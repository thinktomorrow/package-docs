# Getting started

Chief is a package based cms built on top of the laravel framework.
Chief is solely the back-end(admin panel). You will need to create the front-end yourself.
To install chief we need to install it into another project.
This can be either an existing one or a fresh Laravel 5.6+ project.

## Default routes
There is one project related route that is expected by chief and that is: `pages.show`. This
is the route for the detail of a static page. Make sure to add this one. 

For the easiest setup you should also add the `pages.home` route. This will detect the homepage based on the config.

```File: routes\front.php```
```php
Route::get('/', PagesController::class.'@homepage')->name('pages.home');
Route::get('page/{slug}', PagesController::class.'@show')->name('pages.show');
```

Also add a controller file for this front end route.
This one is an example:

```File: App\Http\Controller```
```php
<?php
namespace App\Http\Controllers;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Thinktomorrow\Chief\Pages\Page;

class PagesController extends Controller
{
    public function show($slug)
    {
        if(!$page = Page::findPublishedBySlug($slug)) {
            throw new NotFoundHttpException('No published page found by slug ['.$slug.']');
        }

        // TODO: If slug matches the homepage page, redirect to root to avoid duplicate content
        if($page->isHomepage()) {
            return redirect()->route('pages.home');
        }

        return $page->view();
    }

    public function homepage()
    {
        // Get the page that has the flag 'is_homepage'. Otherwise we take the first singles pages found. If not found, we take the first published page...
        $page = Page::guessHomepage();

        return $page->view();
    }
}
```

To get this route to work it's a good idea to add a view file where we can show a page.

An example of this view file is the following:

```File: resources\views\front\pages\show.blade.php```
```html
@extends('front._layouts.master')

@section('content')

    <!-- hero -->
    <div class="row" style="background: url({{ $page->mediaUrl(\Thinktomorrow\Chief\Media\MediaType::HERO) }}) top right no-repeat;">
        <div class="container">
            <div class="column-7">
                <h1>{{ $page->title }}</h1>
                <div class="editor-content">
                    {!! trans('pages.statics.hero.description') !!}
                </div>
            </div>
        </div>
    </div>

    <section class="container editor-content">
        {!! $page->content !!}
    </section>

    {!! $page->renderChildren() !!}

    <section class="container editor-content">
        {!! $page->hero_title !!}
        {!! $page->hero_description !!}
    </section>

@stop
```

Next to get the front-end to work you should set a homepage id in the chief-settings config file.
This determines what the homepage/landing page will be. Currently this is changed through that config file.
Eventually this will be editable in the admin.

## Multilingual

There are a couple of places where you need to configure the localisation of your application.
At the following files you should change the locales to your desired setup:

- Set the available locales of the application in the `config/translatable.php` file. The values in the `locales` array will be available for the admin to manage.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. The values in this `locales` array will be the allowed locales for the visitors of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.

## Project setup advice
Following adjustments are not automatically enforced but are however recommended in your project.

### MySQL index length
Add following snippet in the AppServiceProvider of your project if you use MySQL older than 5.7.7
ref: https://laravel.com/docs/master/migrations#creating-indexes
`Schema::defaultStringLength(191)`

```File: App\Providers\AppServiceProvider.php```
```php
use Illuminate\Support\Facades\Schema;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    Schema::defaultStringLength(191);
}
```
