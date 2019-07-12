# Installation

## Quickstart
Install Assetlibrary via composer

```bash
composer require thinktomorrow/assetlibrary
```

The provider will register itself so there's no need to add it manually.

Now let's publish the config.

```bash
php artisan vendor:publish --tag="assetlibrary-config"
```

And then run the migrations.

```bash
php artisan migrate
```

### Laravel compatibility

| Laravel  | Assetlibrary  |
|---|---|
| 5.6-5.8  | 0.5  |
| 5.6-5.7  | 0.4  |
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