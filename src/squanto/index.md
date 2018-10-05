# squanto

Manage the static translations of your Laravel application during and after development.
Squanto, based on one of the first [Native Indian interpreters](https://nl.wikipedia.org/wiki/Squanto), is an opinionated way to manage the translations in database.

**NOTE: This package is still in development and the api will be subject to change. Also note that it is tailor made for Think Tomorrow projects but you are free to use it. Please only use this package in development until a stable version is released. That being said, please do try this package out as feedback is much appreciated!**

## Install

Via Composer
``` bash
$ composer require thinktomorrow/squanto
```

## Setup
1. Publish the provider:
    ``` bash
    $ php artisan vendor:publish --provider="Thinktomorrow\Squanto\SquantoServiceProvider"
    ```

2. Basic development protection
Add the `ThinkTomorrow\Squanto\Manager\ManagesSquanto` trait to your User model. This will expose a public
method 'isSquantoDeveloper' to be used inside your views and middleware.

3. Managing squanto via the interface also requires a middleware `squanto.develop` which should protect 
the routes responsible for adding, editing and deleting translation lines. An insecure default is 
available but for production you must setup your own permissions logic on these routes.
    ``` php
    protected $routeMiddleware = [
        'squanto.developer' => \Thinktomorrow\Squanto\Manager\Http\Middleware\Developer::class,
    ],
    ```

4. Add the service provider in your config/app.php providers array
    ``` php
    'providers' => [
        ...
        Thinktomorrow\Squanto\SquantoServiceProvider::class,
        Thinktomorrow\Squanto\SquantoManagerServiceProvider::class, // Optionally add the UI manager
    ];
    ```

5. Editor

The 'redactor' editor is required so you'll need to include the css and js assets. This is not provided since you'll need a licence.
Feel free to switch editors. The textareas that require a wysiwyg are assigned the `redactor-editor` class.

## Usage

Make sure you set the settings in the squanto config file. Especially the locales to be maintained.
Run the migrations
``` bash
$ php artisan migrate
```

Next you can import the existing translations from your lang files with the following command:
``` bash
$ php artisan squanto:import
```
If you run this command with the `-dry` option it will simulate the impact of the import first.
