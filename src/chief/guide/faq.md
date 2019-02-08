
# FAQ

### I get the "Route [login] not defined" error. Help!
Extend our ChiefExceptionHandler in the `app/handler.php` file. This is because the chief admin uses a custom guard and does not rely on the default auth laravel routes.

### I get the "Tokenmismatch" error after login into the admin. Help!
This most likely means you have an outdated version of chief. Run 'composer update' to get the latest version.

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