# Upgrade guide

The latest version of Chief is `0.2` which is the one being currently developed upon. 
Please note that the `0.1` release is only maintained for security fixes and critical bugfixes.

## Updating chief inside your project
Chief follows the semantic versioning and we always try to maintain a backward compatible release cycle. 
The major version will include breaking changes and features that are not backward compatible. For each major version, we will
provide an upgrade guide to make this process as painless as possible.
The minor version will contain new features or deprecations that are still backward compatible.
The patch version is used for bugfixes and is safe to update in your current chief version. 

First run the `composer update thinktomorrow/chief` command. This will update Chief to the latest version, according to your version constraints.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root. This will update all style and script assets.

## Upgrading a project from 0.1.* to 0.2.*

The upgrade from 0.1 to 0.2 is not considered an official upgrade. This is because the `0.1` version is a unsupported development phase. Nonetheless, we do have some key elements you should pay attention to while upgrading.

First update the `thinktomorrow/chief` dependency to `~0.2` in your `composer.json` file.

Pay attention to the following changes:
- You need to change a couple of migration entries due to assetlibrary major version upgrade. Table (squanto, media, asset) already exists: migrations table -> change the keys to the following : 2019_01_10_154910_create_asset_table, 2019_01_10_154909_create_media_table, 2019_01_10_154902_create_squanto_tables
- assetlibrary 0.5 gebruikt in bestandsnaam telkens de name + conversion. Dit is anders dan het huidige gedrag waarbij enkel de conversion werd opgevraagd. bv. full.jpg wordt nu heroname-full.jpg
- run migrations for extra default tables for asset library


### Updating pre-refactor managers

The Linking of managers to models has changed from the chief config file to a serviceprovider.
Lets first create our ProjectServiceProvider and start linking our collection from the config file.

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

