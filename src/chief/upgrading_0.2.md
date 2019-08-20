# Upgrading from 0.1.* to 0.2.*

The upgrade from 0.1 to 0.2 is not considered an official upgrade.
This is because the `0.1` version is a unsupported development phase. Nonetheless, we do have some key elements you should pay attention to while upgrading.

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