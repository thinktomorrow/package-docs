
# Installation

## Package
Chief can be installed in a blank or existing laravel application. You install the package via composer.
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
Add the `AuthenticateChiefSession::class` middleware to your `App\Http\Kernel` file.
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
    'auth.superadmin' => AuthenticateSuperadmin::class,
    'chief-guest' => \Thinktomorrow\Chief\App\Http\Middleware\ChiefRedirectIfAuthenticated::class,
    'chief-validate-invite' => \Thinktomorrow\Chief\App\Http\Middleware\ChiefValidateInvite::class,
    'role' => \Spatie\Permission\Middlewares\RoleMiddleware::class,
    'permission' => \Spatie\Permission\Middlewares\PermissionMiddleware::class,
    ...
];
```

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
