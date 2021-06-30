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
But it will still use the default pages.show view to display these pages. Customizing this view will be explained in the [Templates](#templates) section.


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

Then to make sure we can add the modules in the pagebuilder we add it in the relations.children array in the `config/chief.php`.

```php
'relations'   => [
        'children' => [
            src/Modules/Header::class,
        ],
    ],
```

Perfect! Now you have a header module that you can manage through the chief admin panel.
But it will still use the default modules.show view to display these modules. Customizing this view will be explained in the [Templates](#templates) section.

## Using query sets

A pageset is a collection of pages that can be added to a page as a module. 
In addition to this a pageset allows you to define query scopes.
This lets you filter the collection by published or other query scopes as you see fit.

### Creating sets
A set is a custom grouping of pages, modules or other models.

To create a set for a page you make a file in the src/Sets folder.

```php
<?php
 namespace Thinktomorrow\Chief\Tests\Feature\PageSets;
 use Thinktomorrow\Chief\Pages\Page;
 use Thinktomorrow\Chief\Sets\Set;

 class DummyPageSetRepository
{
    public function all($limit = 100)
    {
        $pages = Page::limit($limit)->get();
        return new Set($pages);
    }
} 
```

The next thing to do is to add a reference to this pageset in the chief.php config file.

You need to define the pageset in the pagesets array so the admin-panel has knowledge of this new pageset.


```php
'pagesets' => [
    'published' => [
        'action' => PublishedPageSet::class.'@published',
        'parameter' => [1],
        'label'     => 'published pages'
    ]
]
```

There are a few things we can define here. For starters the required field is the action which defines the class. If no method is defined (@method), the name of the array is used.
The parameter accepts an array with parameters for this method.
If the label is defined this will be used as the name of this pageset in the adminpanel. If label is not defined the name of the array is used.

### Customizing pagesets
To customize how a pageset renders we can also customize the view that would be used.

To create a view for this specific module, we create views/front/modules/published.blade.php in this case.
The name of the view should be the same as the pageset type as defined in the chief config file.
You can also put this file in a folder with the name of a page to define a view specificly for this page and pageset.

In this view we have access to the following variables:
- $pages and $parent for a set of pages.
- $collection and $parent for a set of modules or models.

### Using Pagesets
Once this setup is done we can create instances of these pagesets from the admin panel.
And following that to add them to a page, simple select them from the pagebuilder dropdown.

## Menus

Chief allows you to define multiple menus and manage them seperatly.

### Creating a menu

To add a menu to chief we define one in the chief config file.

```php
# Config\chief.php

'menus' => [
        'main' => [
            'label' => 'Main navigation',
            'view'  => 'front.menus.main'
        ],
        'footer' => [
            'label' => 'Footer navigation',
            'view'  => 'front.menus.footer'
        ]
    ],
```

Define the name of the menu and a label and the corresponding view file.

### Using the menu

To start using the menus you have defined you can use the following handler to define where to render the menu.

```php
{!! chiefmenu('main')->render() !!}
```
Next to access the menu in the defined view file.

```php
@foreach(\Thinktomorrow\Chief\Menu\ChiefMenu::fromMenuItems('main')->items() as $item)
    <li><a href="{{ $item->url }}">{{ $item->label }}</a></li>
@endforeach
```
On the menu items you have access to the url and label of the item.

To find out if the current item has any sub items associated with it use the haschildren check.
And then loop over the children to get each child. Deeper levels may be available depending on how your menu is set up.

```php
@if($item->hasChildren())
    @foreach($item->children() as $child)
        <a href="{{ $child->url }}" class="block text-secondary small-caps">{{ $child->label }}</a>
    @endforeach
@endif
```

### Creating menu items

Now you can go ahead and use the admin panel to manage the menu items for the menus you have defined and set up.

## Templates

Templates in this context means the view that will be used to render this model. By default the 'pages.show', 'modules.show' and 'sets.show' views are used to render the respective types of models.
Let's get into how we can define a view that should be used for rendering per model.

### Page model templates

To use your own layout for a page it's as easy as making a view file at 'pages.MANAGEDMODELKEY' so for our example of articles we would make the view
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

### Module templates

To use your own layout for a model it's as easy as making a view file at 'modules.MANAGEDMODELKEY' so for our example of headers we would make the view
modules/headers.blade.php.

By default the available fields are `content` and `title`.

```html
<!-- resources/views/modules/headers.blade.php -->

{!! $module->content !!}
{!! $module->title !!}
```

:::tip folders
If you want to clean up you folder structure you always have the option to create a folder with the managemodelkey and create a 'show.blade.php' file. That file will then be used as the main rendered view for that model.
:::

## Localization
When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.
In order to manage the locales, you need to configure the following files:
- Set the available locales of the application in the `config/translatable.php` file. These are the locales in which each page should be made available.
- Set the frontend locales of the application in the `config/thinktomorrow/locale.php` file. These locales are available for the users of your application.
- Set the default and fallback locale in the `config/app.php` file. Keep in mind that this value needs to consist of one of the available locales as set in the `config/translatable.php`.
