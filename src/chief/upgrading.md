# Upgrading

## Releases
The latest version of Chief is `0.3.*` which is the one being currently developed upon.
Previous versions will no longer be maintained with the exception for security fixes and critical bugfixes.
It is strongly recommended to upgrade to the latest version.

## Versioning
Chief follows the [semantic versioning](https://semver.org/) and we always try to maintain a backward compatible release cycle.
Note that while development is still in the 0.* release cycle, minor versions will be able to contain breaking changes.

## Upgrading from 0.2.14 to 0.3.*

#### Installation
Set your composer package constraint to `thinktomorrow/chief: ^0.3`. Run `composer update thinktomorrow/chief` command to get to the latest 0.3.* version.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root.
Note that with the force flag you'll update all existing chief style and script assets in your project.

There are a couple of breaking changes in this upgrade. If you've done some advanced customisation, you're probably fine upgrading without too much hassle.

### Updated config
There are some new configuration options added like `strict`, `route.autoload`, `route.name` and `base-view-paths`.
Complete your config file by adding the following values:
```php
# /config/thinktomorrow/chief.php

/**
 * A request can encounter non-critical errors like non found urls or views. When such an error occurs
 * in strict mode, your app will halt and showcase these errors. You should set this to true while
 * in development. We recommend to disable strict mode in production to suppress these errors.
 */
'strict' => env('APP_DEBUG', false),

'route' => [
    /**
     * By default Chief will add the pages.show routing to your app. Since this is a catch-all route, it will be loaded last.
     * If this conflicts with your project, set the autoload value to false. In this case you are responsible for handling the routing.
     * Use the following route snippet as a starting point:
     *
     *      Route::get('{slug?}', function($slug = '/'){
     *          return \Thinktomorrow\Chief\Urls\ChiefResponse::fromSlug($slug);
     *      })->name('pages.show')->where('slug', '(.*)?');
     *
     */
    'autoload' => true,

    /**
     * Route name for the route that chief uses to listen and interact with
     * a page request. It is set to `pages.show` but if this conflicts
     * with your project naming conventions, you can change it here.
     */
    'name' => 'pages.show',
],

/**
 * The Viewable::viewPath() method gives the view path for that specific model.
 * By default, we provide some sensible defaults for pages, modules and sets.
 * Here you define the relative base view path for these resp. models.
 */
'base-view-paths' => [
    'pages'   => 'pages',
    'modules' => 'modules',
    'sets'    => 'sets',
],

```

### New url logic
--> php artisan migrate will . Backup your database beforehand.

### Removed classes
The following classes are removed
Trait 'Thinktomorrow\Chief\Relations\PresentingForParent' not found
Interface 'Thinktomorrow\Chief\Relations\PresentForParent' not found

Thinktomorrow\Chief\Concerns\ProvidesUrl\ProvidesUrl moved to

Implement the `ViewableContract` if the model should be rendered on the site.
Implement the `ProvidesUrl` contract if the model needs to be accessed directly via an url.

### Removed: pages.home route
The `pages.home` is no longer required in version 0.3. You are free to still use it in your project, it won't break anything. The Chief admin system
will no longer rely on this route to exist.

### Removed: route and controller
In version 0.3, the route declaration for the `pages.show` is done via the ChiefServiceProvider. It is no longer
necessary to add this yourself to the project route file. If you need to keep your own routing in place, make
sure to set the chief setting `thinktomorrow.chief.route.autoload` to `false` so it will no longer autoload
this route.

The PagesController is replaced by a `ChiefResponse` class which takes care of interpreting and answering the request
with the proper model and view. Under the hood the following routing logic is being used:
```php
Route::get('{slug?}', function ($slug = '/') use($routeName) {
    return ChiefResponse::fromSlug($slug);
})->name('pages.show')->where('slug', '(.*)?');
```

### Removed: Page::menuUrl()
The `Page::menuUrl()` was deprecated in previous 0.2 version and is now removed in favor of the `Page::url()` method.

### Removed: `Page::hasPagebuilder()`
`Page::hasPagebuilder()` and `Page::pagebuilder` were deprecated in 0.2 and are now removed. They are no longer used to determine if
pagebuilder should be used or not. If you need to control the pagebuilder setup, you should adapt the `fields()` return value instead.

### Removed: $page and $module view variables.
- The page or module is now passed as a `$model` variable to the view. The `$page`, `$module` and `$pages` - as used by custom query sets - variables
are set as deprecated and will be removed in 0.4.

### Changed: default viewpaths
The default viewpaths no longer assume the `front` folder. These are:
- pages: `resources/views/pages`,
- modules: `resources/views/modules`,
- sets: `resources/views/sets`

You can change these to fit your project's needs in the `thinktomorrow.chief.base-view-paths` config setting.

Please pay extra attention if you recognize one of the following cases in your project:
- you are using either the `PresentForParent` contract or the `PresentingForParent` trait.
-

### Changed: Don't use magic property `Page::url`
Page::url() is a method and no longer available as property.

### Changed: fieldArrangement()
If you've written a custom `Manager::fieldArrangement()`, chances are that you'll need to replace the `$this->fields` presence in the method to `$this->fieldsWithAssistantFields()`.
This change is needed to include any assistant added fields as well.

### Changed PagesController logic

### ViewableContract replaces PresentForParent
The `Thinktomorrow\Chief\Relations\PresentForParent` interface is removed. It should be replaced by the `ViewableContract` interface.
The former method for rendering a view was `presentForParent(ActingAsParent $parent)` and is no longer available. Use the `renderView()` method instead.

The `view()` method on the Page model is removed and `renderView()` should be used instead. If you used this method in determining the frontend view, you should switch to the new response flow. See below.

If you have used a custom view folders to structure your project view files, you'll need to change the base viewpaths for your models. Instead of defining the baseViewPath property on each model, we provided a way to define these for all pages, modules and sets at once in the config. There is a new config value
in thinktomorrow.chief called `base-view-paths`.

### Migrate page slugs to url table
The routing will still not work since there are no url entries yet. Let's fix this.
With the new url table, the existing page slugs, that are found in the page_translations table, need to be moved over to the chief_urls table.
You can set up a migration for this with basically the following code:
```php
use Thinktomorrow\Chief\Pages\Page;
use Thinktomorrow\Chief\Urls\UrlRecord;
...

foreach(Page::all() as $page){
    foreach($page->translations as $translation){
        UrlRecord::create([
            'locale'     => $translation->locale,
            'slug'       => $translation->slug,
            'model_type' => $page->morphKey(),
            'model_id'   => $page->id,
        ]);
    }
}
```

### Removed homepage config
You no longer determine the homepage via a config setting. You set the slug value to an empty string instead.

### Added base view paths config
The base viewpaths for a page, module and set can be configured via a new parameter `base-view-paths`.
The default configuration looks like this:
```php
# config/thinktomorrow/chief.php

/**
* Here you define the base view path for your pages, modules and sets. All module
* views will be relative to this location. A sensible default has been set.
* Note that is only is effect when not providing a custom viewPath.
*/
'base-view-paths' => [
   'pages'   => 'front.pages',
   'modules' => 'modules',
   'sets'    => 'sets',
],
```

## Upgrading from 0.1.* to 0.2.*

The upgrade from 0.1 to 0.2 is not considered an official upgrade. This is because the `0.1` version is a unsupported development phase. Nonetheless, we do have some key elements you should pay attention to while upgrading.

First update the `thinktomorrow/chief` dependency to `~0.2` in your `composer.json` file.

Pay attention to the following changes:
- You need to change a couple of migration entries due to assetlibrary major version upgrade. Table (squanto, media, asset) already exists: migrations table -> change the keys to the following : 2019_01_10_154910_create_asset_table, 2019_01_10_154909_create_media_table, 2019_01_10_154902_create_squanto_tables
- assetlibrary 0.5 uses the name + conversion as filename. This is different from previous versions where this was not the default behaviour e.g. full.jpg becomes heroname-full.jpg
- run migrations for extra default tables for asset library

#### Updating pre-refactor managers

The Linking of managers to models has changed from the chief config file to a serviceprovider.
Lets first create our ChiefProjectServiceProvider and start linking our collection from the config file.

To link a page, use the provided PageManager.
To link a module, use the provided ModuleManager.
You can also define your own manager for custom classes. We will go into this custom manager later.

Before:
```php
# config/chief.php

...
'collections' => [
    // Pages
    'singles'  => Singles\Single::class,

    // Modules
    'banner'  => Banner::class,
],
...
```

After:
```php
# providers/ChiefProjectServiceProvider.php

public function boot()
{
    // Boot core registrations
    parent::boot();

    // Managers
    $this->registerManager('singles', PageManager::class, Single::class);

    //Module Managers
    $this->registerManager('banner', ModuleManager::class, Banner::class);

    //Custom Classes
    $this->registerManager('members', MemberManager::class, Member::class);
}
```

Next up the ManagementDefaults have been removed and aside from implemementing the ModelManagers we now also extend from an AbstractManager.

```php
class MemberManager extends AbstractManager implements ModelManager
{

}
```

If the model in question needs publishing or previewing functionality there are traits we can use and interfaces to implement.

```php

class MemberManager extends AbstractManager implements ModelManager, ManagerThatPublishes, ManagerThatPreviews
{
    use ManagesPublishing,
        ManagesPreviews;
}
```
