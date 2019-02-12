# Project Skeleton

This project is the skeleton we use at Think Tomorrow when we start a new project.

## Installation

To use this as the base for a project you can install this using the compose create-project cli tool.

```
compose create-project thinktomorrow/project-skeleton projectname --keep-vcs
```

Keep in mind that the --keep-vcs flag will keep the git files so you should remove the .git folder and initialize your own.
We run this with the flag to preserve our .gitignore files.

## Features

- Default view folder structure
- Default assets/css/js setup
- Default packages: debugbar, bugsnag, locale
- Default ActionEnd Middleware

## Usage

This project is a basic scaffold.

One possible step is to add "thinktomorrow/chief" as an admin panel.


### Action End

The action end middleware lets you define when the site/campagne/etc should be online/offline.

To start add the middleware 'actionend' to a route.
This route is now only accessible within the defined action timespan.

The actionend config lets us adjust these settings.

Here we can define the start and end dates and which views they should redirect to.

We can also disable the middleware here. This variable can also be changed in your .env file:

```php
ACTION_END_ENABLED=true
```

The config also allows you to add multiple different timespans.
You can access these by passing it to the middleware as a parameter:

```php
Route::get('/', function () {
    return view('welcome');
})->middleware('actionend:projectname');
```

And then add this to the config as the array key:

```php
'projectname' => [
        'start_at' => Carbon\Carbon::now()->subDay(),
        'end_at'   => Carbon\Carbon::now()->addDays(2),
        'views'    => [
            'start' => 'projectname.pages.start',
            'end'   => 'projectname.pages.end',
        ]
    ],
```
