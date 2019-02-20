
# Installation

## Package
Chief is a laravel specific package. It can be installed in a fresh or existing laravel application. You install the latest version of the package via composer.
Laravel version `5.7.1` is a minimum requirement.
```php
composer require thinktomorrow/chief
```
The package will automatically register its service provider to hook into your application.

## Application setup

### Exception handler
Next edit the application exception handler to extend the chief exception handler.
The Chief Exception handler takes care of the admin authentication and authorization.
In the `App\Exceptions\Handler` file extend the class as such:

```php
# App\Exceptions\Handler.php

use Thinktomorrow\Chief\App\Exceptions\Handler as ChiefExceptionHandler;

class Handler extends ChiefExceptionHandler
```

### Middleware
Add the `\Thinktomorrow\Chief\App\Http\Middleware\AuthenticateChiefSession::class` middleware to your `App\Http\Kernel` file.
You should place these in a `web-chief` middleware group like so:

```php
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
    'auth.superadmin' => \Thinktomorrow\Chief\App\Http\Middleware\AuthenticateSuperadmin::class,
    'chief-guest' => \Thinktomorrow\Chief\App\Http\Middleware\ChiefRedirectIfAuthenticated::class,
    'chief-validate-invite' => \Thinktomorrow\Chief\App\Http\Middleware\ChiefValidateInvite::class,
    'role' => \Spatie\Permission\Middlewares\RoleMiddleware::class,
    'permission' => \Spatie\Permission\Middlewares\PermissionMiddleware::class,
    ...
];
```

From laravel version 5.7.19, there is an `App\Http\Middleware\Authenticate` middleware in the app folder which contains a predefined `login` route. This will break behaviour if you do not have a login route defined.
In order to redirect non-logged users to the chief login page, you should change this named route to `chief.back.login`.
If you have upgraded your project from an older version of Laravel you might not have this file.
Make sure you add this file: [Authenticate.php](https://github.com/laravel/laravel/blob/master/app/Http/Middleware/Authenticate.php)

## Database setup

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

## Known issues
Chief has a few dependencies which may conflict with your current project dependencies. Chief makes use of the 
`spatie/laravel-permission` package and this does expect only one permission based role system. So if your project
requires the same package but for an second permission-based setup, you need to consider this possible conflict.
