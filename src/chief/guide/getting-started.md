# Project setup

Chief is a package based site management system built on top of the laravel framework.
Chief is the admin dashboard for your project. There are no assumptions made for the project site logic and structure.

## Chief routes

There are two project routes required by chief: `pages.show` and `pages.home` which are the default routes for chief pages. 

| Routename        | description           |
| ------------- |-------------|
| pages.home      | Points to the Chief managed homepage. |
| pages.show    | Catch all route for all managed Chief pages.      |

The `pages.show` serves as a catch all for displaying all Chief managed pages.
This catch-all route will point to a generic PagesController that directs the request
to the proper published page. Place this routing at the end of your route definitions 
to avoid routes not being triggered.

`pages.home` makes the distinction with other pages that it is accessible on the root url.
So in your route file you should add the following:

```php
# routes/web.php

// Homepage route
Route::get('/', PagesController::class.'@homepage')->name('pages.home');

/**
 * Catch all routing
 *
 * This catch-all will point to a generic chief pages controller that directs the request
 * to the proper published page. It will handle the homepage '/' as well. Place this
 * routing at the end of your route definitions to avoid routes not being triggered.
 */
Route::get('{slug}', PagesController::class.'@show')->name('pages.show')->where('slug', '(.*)?');

```

## Chief controller
Besides the route definitions, we should add the following PagesController which will serve as the generic handler for all page requests.
You are free to create your own logic or extend according to your project. You can use the following code as a starting point.

```php
# App/Http/Controller/PagesController.php

namespace App\Http\Controllers;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Thinktomorrow\Chief\Pages\Homepage;
use Thinktomorrow\Chief\Pages\Page;

class PagesController extends Controller
{
    public function show($slug)
    {
        if(!$page = Page::findPublishedBySlug($slug)) {
            throw new NotFoundHttpException('No published page found by slug ['.$slug.']');
        }

        if(Homepage::is($page)) {
            return redirect()->route('pages.home');
        }

        return $page->view();
    }

    public function homepage()
    {
        $page = Homepage::guess();

        return $page->view();
    }
}
```
## Chief view
Next, we'll need a default view that is responsible for displaying all managed pages. You can choose either `views/pages/show.blade.php` or `views/front/pages/show.blade.php`.
The one required method to render the chief content in the view is `Page::renderChildren()`. 

So as a bare minimum the `pages.show` view should contain:
```php
# resources/views/pages/show.blade.php

{!! $page->renderChildren() !!}
```

## Homepage
Once you have added your pages, your should choose which one will be the homepage. This is currently set in the `thinktomorrow/chief-settings.php` config file.
Here you can explicitly set the page that is considered to be the website homepage. If this homepage value is left empty, the first published page is used as a default.

## Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.

*Owkey looks like the basics are done and you are all set for kickstart your project development!*
