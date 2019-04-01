# Initial setup

## Installation
Chief is a package based site management system built on top of the laravel framework.
Chief is the admin dashboard for your project. There are no assumptions made for the project site logic and structure.

Chief is a laravel specific package. It can be installed in a fresh or existing laravel application. You install the latest version of the package via composer.
Laravel version `5.7.1` is a minimum requirement.
```php 
composer require thinktomorrow/chief
```
The package will automatically register its service provider to hook into your application.

### Application setup

#### Exception handler
Next edit the application exception handler to extend the chief exception handler.
The Chief Exception handler takes care of the admin authentication and authorization.
In the `App\Exceptions\Handler` file extend the class as such:

```php
# App\Exceptions\Handler.php

use Thinktomorrow\Chief\App\Exceptions\Handler as ChiefExceptionHandler;

class Handler extends ChiefExceptionHandler
```

#### Middleware
Add the `\Thinktomorrow\Chief\App\Http\Middleware\AuthenticateChiefSession::class` middleware to your `App\Http\Kernel` file.
You should place these in a `web-chief` middleware group like so:

```php{5-7}
# App\Http\Kernel.php

protected $middlewareGroups = [
    ...
    'web-chief' => [
            \Thinktomorrow\Chief\App\Http\Middleware\AuthenticateChiefSession::class,
    ],
    ...
]
```

Next in the same file we should add the following entries to the $routeMiddleware array.

```php
# App\Http\Kernel.php

protected $routeMiddleware = [
    'auth.superadmin'       => \Thinktomorrow\Chief\App\Http\Middleware\AuthenticateSuperadmin::class,
    'chief-guest'           => \Thinktomorrow\Chief\App\Http\Middleware\ChiefRedirectIfAuthenticated::class,
    'chief-validate-invite' => \Thinktomorrow\Chief\App\Http\Middleware\ChiefValidateInvite::class,
    'role'                  => \Spatie\Permission\Middlewares\RoleMiddleware::class,
    'permission'            => \Spatie\Permission\Middlewares\PermissionMiddleware::class,
    ...
];
```

From laravel version 5.7.19, there is an `App\Http\Middleware\Authenticate` middleware in the app folder which contains a predefined `login` route. This will break behaviour if you do not have a login route defined.
In order to redirect non-logged users to the chief login page, you should change this named route to `chief.back.login`.
If you have upgraded your project from an older version of Laravel you might not have this file.
Make sure you add this file: [Authenticate.php](https://github.com/laravel/laravel/blob/master/app/Http/Middleware/Authenticate.php)

The redirectTo function should end up looking like this:

```php {4}
protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('chief.back.login');
        }
    }
```

### Config & Assets

The next step is to publish the chief-assets to our public folder.
If you want to overwrite existing files you can add the `--force` flag here.

```php
php artisan vendor:publish --tag=chief-assets
```

Publish the chief config to `config/thinktomorrow/chief` as this will require you to set some application defaults such as
contact email and application name.
```php
php artisan vendor:publish --tag=chief-config
```
Make sure to set at least the `name` value to your project name as it is used in some of the generator commands. Ideally this should match
the namespace of your `src` folder, if you have any. Make sure to namespace the src folder in your composer.json to match this name.

The following vendor assets should also be published to your application:
```php
// The dimsav translatable package
php artisan vendor:publish --tag=translatable

// The thinktomorrow locale package
php artisan vendor:publish --provider="Thinktomorrow\Locale\LocaleServiceProvider"
```

### Database setup

Connect a database with your application and make sure you have set the proper database credentials in your `.env` file.

Next perform the migrate artisan command. This will automatically run the chief migrations as well.
Note that Chief has separate tables for the chief admin users, `chief-users` and `chief_password_resets`. This way there
is no interference with your application user logic.

```php
php artisan migrate
```

Next we need at least one main admin user to login and start managing the admin panel.
This command will create the basic roles and permissions and allows to setup the first admin account:

```php
php artisan chief:admin
```

### Known issues
Chief has a few dependencies which may conflict with your current project dependencies. Chief makes use of the 
`spatie/laravel-permission` package and this does expect only one permission based role system. So if your project
requires the same package but for a second permission-based setup, you need to consider this possible conflict.

## Getting Started

### Registration
In the `app/Providers` folder add a file named `ChiefProjectServiceProvider`. This file can be used to register all your manageable models.
An example of this is:

```php
namespace App\Providers;

use Thinktomorrow\Chief\Pages\PageManager;
use Thinktomorrow\Chief\App\Providers\ChiefProjectServiceProvider as BaseChiefProjectServiceProvider;

class ChiefProjectServiceProvider extends BaseChiefProjectServiceProvider
{
    public function boot()
    {
        // Boot core registrations
        parent::boot();

        // Example of registering event pages
        $this->registerPage('events', PageManager::class, \App\Events\Event::class);
    }
}
```

Make sure to add this service provider to your `config/app.php` file:
```php
\App\Providers\ChiefProjectServiceProvider::class,
```

### Define chief routes

Out of the box, there are two project routes required by chief: `pages.show` and `pages.home`. You can [change these](./pages.md#using-a-custom-route-resolver) if you'd need to.
In your route file you should add the following:
``
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

### Chief controller
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
### Chief view
Next, we'll need a default view that is responsible for displaying all managed pages. You can choose either `views/pages/show.blade.php` or `views/front/pages/show.blade.php`.
The one required method to render the chief content in the view is `$page->renderChildren()`. 

So as a bare minimum the `pages.show` view should contain:
```php
# resources/views/pages/show.blade.php

{!! $page->renderChildren() !!}
```


### Homepage
Once you have added your pages, you should choose which one will be the homepage. This is currently set in the `thinktomorrow/chief-settings.php` config file.
Here you can explicitly set the page that is considered to be the website homepage. If this homepage value is left empty, the first published page is used as a default.

### Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.

*Owkey looks like the basics are done and you are all set for kickstart your project development!*

## Upgrading

The latest version of Chief is `0.2.*` which is the one being currently developed upon. 
Please note that the `0.1` release is only maintained for security fixes and critical bugfixes.

### Updating chief inside your project
Chief follows the semantic versioning and we always try to maintain a backward compatible release cycle. 
The major version will include breaking changes and features that are not backward compatible. For each major version, we will
provide an upgrade guide to make this process as painless as possible.
The minor version will contain new features or deprecations that are still backward compatible.
The patch version is used for bugfixes and is safe to update in your current chief version. 

First run the `composer update thinktomorrow/chief` command. This will update Chief to the latest version, according to your version constraints.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root. This will update all style and script assets.

### Upgrading a project from 0.1.* to 0.2.*

The upgrade from 0.1 to 0.2 is not considered an official upgrade. This is because the `0.1` version is a unsupported development phase. Nonetheless, we do have some key elements you should pay attention to while upgrading.

First update the `thinktomorrow/chief` dependency to `~0.2` in your `composer.json` file.

Pay attention to the following changes:
- You need to change a couple of migration entries due to assetlibrary major version upgrade. Table (squanto, media, asset) already exists: migrations table -> change the keys to the following : 2019_01_10_154910_create_asset_table, 2019_01_10_154909_create_media_table, 2019_01_10_154902_create_squanto_tables
- assetlibrary 0.5 uses the name + conversion as filename. This is different from previous versions where this was not the default behaviour e.g. full.jpg becomes heroname-full.jpg
- run migrations for extra default tables for asset library

#### Updating pre-refactor managers

The Linking of managers to models has changed from the chief config file to a serviceprovider.
Lets first create our ChiefProjectServiceProvider and start linking our collection from the config file.

To link a page, use the provided PageManager.
To link a module, use the provided ModuleManager.
You can also define your own manager for custom classes. We will go into this custom manager later.

Before:
```php
# config/chief.php

...
'collections' => [
    // Pages
    'singles'  => Singles\Single::class,

    // Modules
    'banner'  => Banner::class,
],
...
```

After:
```php
# providers/ChiefProjectServiceProvider.php

public function boot()
{
    // Boot core registrations
    parent::boot();

    // Managers
    $this->registerManager('singles', PageManager::class, Single::class);

    //Module Managers
    $this->registerManager('banner', ModuleManager::class, Banner::class);

    //Custom Classes
    $this->registerManager('members', MemberManager::class, Member::class);
}
```

Next up the ManagementDefaults have been removed and aside from implemementing the ModelManagers we now also extend from an AbstractManager.

```php
class MemberManager extends AbstractManager implements ModelManager
{
    
}
```

If the model in question needs publishing or previewing functionality there are traits we can use and interfaces to implement.

```php

class MemberManager extends AbstractManager implements ModelManager, ManagerThatPublishes, ManagerThatPreviews
{
    use ManagesPublishing,
        ManagesPreviews;
}
```

## Contributing



## FAQ

### I get the "Route [login] not defined" error. Help!
Extend our ChiefExceptionHandler in the `app/handler.php` file. This is because the chief admin uses a custom guard and does not rely on the default auth laravel routes.

### I get the "Tokenmismatch" error after login into the admin. Help!
This most likely means you have an outdated version of chief. Run 'composer update' to get the latest version.
If this error persists you might have some middleware that's interfering with the login/session process.

### I get the "Class web-chief does not exist" error. Help!
Add the `AuthenticateChiefSession::class` middleware group to your `App\Http\Kernel.php` file.

### I get the 'Expected response code 250 but got code “530”, with message “530 5.7.1 Authentication required ”' error. Help!
Please make sure your mail settings in your .env file are correct.

### MySQL index length bug
Add following snippet in the AppServiceProvider of your project if you use MySQL older than 5.7.7
ref: https://laravel.com/docs/master/migrations#creating-indexes
`Schema::defaultStringLength(191)`

```php
# App\Providers\AppServiceProvider.php

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

## Local Chief development

For local development of chief we need another project to include the Chief package into since a package does not contain the whole laravel framework.
To set up the chief package for local development we link our local chief folder as a repository in the composer.json file.

Paste the following snippet in your composer.json file. This can be placed right above the 'require' section.
```php
"repositories":[
       {
           "url":"/full/path/to/chief",
           "type":"path",
           "options":{
               "symlinks":true
           }
       }
   ],
```
The url property needs to be the full path to the local version of the chief package.

Next install the local version of Chief. If you already had an installed chief in your vendor folder, make sure to remove it first, otherwise composer will not force the local symlink.
```php
composer require thinktomorrow/chief:"@dev"
``` 
Make sure your minimum stability of the application is set to `dev`.

To migrate and scaffold some entries you can run:
```php
php artisan chief:refresh
```
**Note that this will remove your existing database entries!**

// TODO: something about adding to semver, changelog...
