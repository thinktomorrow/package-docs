# Installation
Chief is a laravel package that adds a site management system to your project.
Out of the box you'll get page, url and menu management provided through a well-crafted admin UI. All of this with localization in mind.

## Requirements
There are a few minimum requirements for chief to be installable:
- php >= 7.2.0
- Laravel framework >= 5.6.39.

:::warning Potential vendor conflict
Chief makes use of the `spatie/laravel-permission` package. This does expect only one permission based role system. So this will present a conflict if your project
already utilises the package for its own permissions.
:::

## Installation
Chief can be installed via composer.

```php 
composer require thinktomorrow/chief
```

The package will automatically register its service provider but you'll need to set up a couple of elements to completely hook chief into your application:

1. [Migrations](#_1-migrations)
2. [Exception handler](#_2-exception-handler)
3. [Middleware](#_3-middleware)
4. [Chief config](#_4-chief-config)
5. [Chief assets](#_5-chief-assets)
6. [First admin user](#_6-first-admin-user)

### 1. Migrations

Run the migrate artisan command. This will automatically run the chief migrations as well.
```php
php artisan migrate
```


### 2. Exception handler
Your app's exception handler should extend `Thinktomorrow\Chief\App\Exceptions\Handler` since it takes care of all chief authentication and authorization.

In the `app/Exceptions/Handler.php` file extend the handler class as such:

```php
# app/Exceptions/Handler.php

use Thinktomorrow\Chief\App\Exceptions\Handler as ChiefExceptionHandler;

class Handler extends ChiefExceptionHandler
{
...
```

### 3. Middleware
Add the `\Thinktomorrow\Chief\App\Http\Middleware\AuthenticateChiefSession::class` middleware to your `App\Http\Kernel` file
in a `web-chief` middleware group:

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

In the same file add the following middlewares to the $routeMiddleware array.

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

::: warning Rename login routename to chief.back.login
From laravel version 5.7.19, there is an `App\Http\Middleware\Authenticate` middleware in the app folder which contains a predefined `login` route. This will break behaviour in cases where you don't have a `login` routename defined.
In order to redirect non-logged users to the chief login page, you should change this named route to `chief.back.login`.

If you have upgraded your project from an older version of Laravel you might not have this file.
Make sure to add it: [Authenticate.php](https://github.com/laravel/laravel/blob/master/app/Http/Middleware/Authenticate.php)

In this class there is a redirectTo function and it should end up looking like this:

```php {6}
# App\Http\Middleware\Authenticate.php

protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('chief.back.login');
        }
    }
```
:::

### 4. Chief config

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
```

This will create the translatable config file `config/translatable.php`, this is where you edit what languages are available in the chief admin panel.


### 5. Chief assets
The next step is to publish the chief-assets to our public folder.
If you want to overwrite existing files you can add the `--force` flag here.

```php
php artisan vendor:publish --tag=chief-assets
```

### 6. First admin user
By now your admin is ready to go. The only thing missing to access it is an admin user, so let's add one. Use the following command to
add an admin account. Note that it also takes care of setting up the auth permissions and roles.
```php
php artisan chief:admin --dev
```

Now that all this setup is done, let's go to the chief admin panel to get your first glance on the admin.
Go to the `/admin` route and login with your newly created credentials to access the admin panel.

The [basics section]('./basics.md') of this guide will bring you up to speed on some of the important concepts to kickstart your project development.

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
