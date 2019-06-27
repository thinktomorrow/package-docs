# Upgrading

The latest version of Chief is `0.3.*` which is the one being currently developed upon.
Please note that the `0.1` release is only maintained for security fixes and critical bugfixes.

For each upgrade you run the `composer update thinktomorrow/chief` command to update Chief to the latest version, according to your version constraints.
Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root. This will update all style and script assets.

## Versioning
Chief follows the semantic versioning and we always try to maintain a backward compatible release cycle.
The major version will include breaking changes and features that are not backward compatible.
For each major version, we will provide an upgrade guide to make this process as painless as possible.
The minor version will contain new features or deprecations that are still backward compatible.
The patch version is used for bugfixes and is safe to update in your current chief version.
:::warning
Note that while development is still in the 0.* release cycle, minor versions will be able to contain breaking changes.
:::

## Upgrading from 0.2.10 to 0.3.*
There are a couple of breaking changes in this upgrade. The most changes orientate around the routing and view presentation logic. If you've never done advanced stuff, you're probably fine upgrading without difficulties.
Please pay extra attention if you recognize one of the following cases in your project:
- you are using either the `PresentForParent` contract or the `PresentingForParent` trait.
-

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
