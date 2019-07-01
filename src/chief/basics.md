# Basics

On a typical request there are two core concepts that are vital for a successful delivery of the content: chief views and urls.
A page can only be delivered to the visitor if it has a view and an url.

## Views
In order to display the page content to your visitors, you'll need at least 2 templates for your pages and modules.
For now, it's sufficient to know that a page consists of one or more _modules_. We'll discuss modules in depth later on.

#### Page template
Create a file `resources/views/pages/show.blade.php` and add the following content to it:
```html
<!DOCTYPE html>
<html>
<body>
    {!! $model->renderChildren() !!}
</body>
</html>
```
The `renderChildren` method is responsible for constructing an rendering the page content. This is one
method you'll always need to include in your template file.

#### Module template
Create a file `resources/views/modules/show.blade.php` and add the following content to it:
```html
{!! $module->content !!}
```

:::tip Default view folders
If the view directory `pages` conflicts with your project, you can always change the directory basepath setting in
config `thinktomorrow.chief.base-view-paths.pages`. Note that this will have affect to all page renders.
:::

## Page view

With a fresh Chief installation, an admin can immediately start creating and publishing pages.
This is a good starting point for managing static content.


## Registrering chief models
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


### Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.
