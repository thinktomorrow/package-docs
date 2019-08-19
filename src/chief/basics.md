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

The key method here is `renderChildren()`, which renders the page content.

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
Both `pages/show.blade.php` and `modules/show.blade.php` files are default templates that serve as fallback for respectively all pages and modules.
In the [Templates](#templates) section we will go into further detail on how to make view templates for specific [page types](#page-types).
:::
:::tip Changing the view folders
Default location for page templates is `resources/views/pages/` and for modules `resources/views/modules`.
If these view directories conflict with your project, you can always change the directory settings in the
config `thinktomorrow.chief.base-view-paths.pages`. Note that this will have affect on all page renders.
:::

## Static pages
If you create a page in the admin, you should now be able to view the result in your browser.
So now you are able to deal with static pages. Let's go on and explore how to tackle collections.

## Collections
Apart from static pages, you can also define a collection of pages (e.g articles, blogposts, products, etc).
To get started with collection we create a model for the collection.

Let's make an 'articles' collection.

```php
// src/Article.php

use Thinktomorrow\Chief\Pages\Page;

class Article extends Page
{
    protected static $managedModelKey = 'articles';
}
```

The basics are:
- extending from the Chief Page
- setting the managedModelKey

The Page extend makes this model a Page for Chief.
The managedModelKey is the string by which this model will be recognised.

To make this managed through the chief admin panel we need to link it to a manager.
To link our own models and make them managed you should create a service provider to do this setup.

In the `app/Providers` folder add a file named `ChiefProjectServiceProvider`. This file can be used to register all your manageable models.
An example of this is:

```php
// App\Providers\ChiefProjectServiceProvider.php
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
        $this->registerPage(PageManager::class, Article::class);
    }
}
```

Make sure to add this service provider to your `app.php` config file:
```php
// config/app.php

\App\Providers\ChiefProjectServiceProvider::class,
```

Let's just use the default PageManager for now and link it to our newly created article model.

Perfect! Now you have a collection of products that you can manage through the chief admin panel.
But it will still use the default pages.show view to display these pages so let's use our own view for these articles.

To use your own layout it's as easy as making a view file at 'pages.MANAGEDMODELKEY' so for our example of articles we would make the view
pages/articles.blade.php.

```html
<!-- resources/views/pages/articles.blade.php -->

<!DOCTYPE html>
<html>
<body>
    {!! $model->renderChildren() !!}
</body>
</html>
```


## Modules

Now let's get to the meat of Chief. Modules.

A module represents a block of content and takes care of its own rendering.

This also means it has no detail page and no url but you can add it to a page through the pagebuilder.

So lets create a Header module.
```php
// src/Modules/Header.php

use Thinktomorrow\Chief\Modules\Module;

class Header extends Module
{
    protected static $managedModelKey = 'headers';
}
```

The basics are:
- extending from the Chief Module
- setting the managedModelKey

The Module extend makes this model a Module for Chief.
The managedModelKey is the string by which this model will be recognised.

To make this managed through the chief admin panel we need to link it to a manager.
```php
// App\Providers\ChiefProjectServiceProvider.php

$this->registerModule(ModuleManager::class, Header::class);
```

Let's just use the default ModuleManager for now and link it to our newly created header model.

Perfect! Now you have a header module that you can manage through the chief admin panel.
But it will still use the default modules.show view to display these modules so let's use our own view for these headers.

To use your own layout it's as easy as making a view file at 'modules.MANAGEDMODELKEY' so for our example of articles we would make the view
modules/headers.blade.php.

By default the available fields are `content` and `title`.

```html
<!-- resources/views/modules/headers.blade.php -->

{!! $module->content !!}
{!! $module->title !!}
```

Then to make sure we can add the modules in the pagebuilder we add it in the relations.children array in the `config/chief.php`.

```php
'relations'   => [
        'children' => [
            src/Modules/Header::class,
        ],
    ],
```

## Sets

Now what if we want to add the latest 3 articles to our homepage? 
We can accomplish this with a Set.

A Set is basicly a subset of a collection that can be added in the pagebuilder.

Defining a Set is done in `config/chief.php`.

```php
    'sets' => [
        'recent-articles'   => [
            'action'     => Article::class.'@getRecent',
            'parameters' => [3],
            'label'      => '3 most recent articles'
        ],
    ],
```

And then we define that function on the Article model. The parameters will be passed through to the function aswell.

```php
// src/Article.php

public function getRecent($limit)
{
    return $this->orderBy('created_at', 'desc')->limit($limit)->get();
}

```

And now we create a view to render this set. The name of this view is based on the key you define in the config.
So this set we create the following view: `sets/recent-articles.blade.php`

## Templates

## Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.
