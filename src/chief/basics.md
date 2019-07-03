# Basics

## Your first page
Let's make sure a page can be rendered in the browser. You'll need to add a page view to your project.

Create a file `pages/show.blade.php` and add the following code to it:
```html
<!-- resources/views/pages/show.blade.php -->

<!DOCTYPE html>
<html>
<body>
    {!! $model->renderChildren() !!}
</body>
</html>
```

The key method here is `Page::renderChildren()`, which renders the page content.

Also note that the html structure is simplified for demonstration purposes. In your project you probably want to use your own html boilerplate.

#### Page modules
A page is built up by so called _modules_.
We'll explain modules in depth later on. For now, it's sufficient to know that each module represents a block of content and takes care of its own rendering. So you'll need a default template for modules as well.

Create a module view `modules/show.blade.php`:
```html
<!-- resources/views/modules/show.blade.php -->

{!! $module->content !!}
```

:::tip Default templates
Both `pages/show.blade.php` and `modules/show.blade.php` files are default templates that serve as fallback for resp. all pages and modules.
In the [Templates](#templates) section we will go into further detail on how to make view templates for specific [page types](#page-types).
:::
:::tip Changing the view folders
Default location for page templates is `resources/views/pages/` and for modules `resources/views/modules`.
If these view directories conflict with your project, you can always change the directory settings in the
config `thinktomorrow.chief.base-view-paths.pages`. Note that this will have affect to all page renders.
:::

## Static pages
If you create a page in the admin, you should now be able to view the result in your browser.
So now you are able to deal with static pages. Let's go on and explore how to tackle collections.

## Collections
...

## Modules

## Sets

## Templates



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

## Fields

### Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.
