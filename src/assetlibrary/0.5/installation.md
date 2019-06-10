# Installation

## Quickstart
Install Assetlibrary via composer

```bash
composer require thinktomorrow/assetlibrary
```

The provider will register itself so there's no need to add it manually.

Now let's publish the config and migration files.
Run the following command and select the appropriate option for your situation.

```bash
php artisan vendor:publish
```

Option 1:

Select AssetLibraryServiceProvider from the list to publish all the config and migrations.

Option 2:

Select the assetlibrary-config/assetlibrary-migrations to publish the config and migrations separately

### Laravel compatibility

| Laravel  | Assetlibrary  |
|---|---|
| 5.6-5.7  | 0.4-0.5  |
| 5.5  | 0.3  |

## Features
- Upload a file to the library without an attached model
- Localization support
- Define a type for an upload attached to a i.e. images/pdfs/banners 
- Upload a file to a model
- Attach a file from the library to a model
- Attached a media file to multiple models
- Upload base64 encoded images
- Crop images
- And more...

## Inspiration
This package is built around spaties medialibrary 
(<a target="_blank" href="https://github.com/spatie/laravel-medialibrary">spatie/laravel-medialibrary</a>)