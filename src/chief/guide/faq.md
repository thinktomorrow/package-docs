
# FAQ

Q: I get the "Route [login] not defined" error. Help!
A: Extend our ChiefExceptionHandler in the `app/handler.php` file. This is because the chief admin uses a custom guard and does not rely on the default auth laravel routes.

Q: I get the "Tokenmismatch" error after login into the admin. Help!
A: This most likely means you have an outdated version of chief. Run 'composer update' to get the latest version.

Q: I get the "Class web-chief does not exist" error. Help!
A: Add the `AuthenticateChiefSession::class` middleware group to your `App\Http\Kernel.php` file.

Q: I get the 'Expected response code 250 but got code “530”, with message “530 5.7.1 Authentication required ”' error. Help!
A: Please make sure your mail settings in your .env file are correct.