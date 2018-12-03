# Upgrade Guide

## Upgrading a project from Chief@0.1 to Chief@0.2

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
# providers/ProjectServiceProvider.php

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
