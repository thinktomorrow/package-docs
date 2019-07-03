# Upgrading

## Releases
The latest version of Chief is `0.3.*` which is the one being currently developed upon.
Previous versions will no longer be maintained with the exception for security fixes and critical bugfixes.
It is strongly recommended to upgrade to the latest `0.3` version.

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
 * When chief is in strict mode, it exposes potential errors and warnings in your application.
 * Non-critical errors like non found urls or views. When such an error occurs in strict mode,
 * your app will throw an exception. Strict mode is by default only enabled in development.
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

### Migrate page slugs to url table
The routing will still not work since there are no url entries yet. After installing the new version, you'll need to run migrations via `php artisan migrate`. These migrations will also copy all page slugs and convert them to
proper urls. Note that the original slug column is not being removed. You'll need to do this by yourself. The following schema can
be a good starting point for such a migration:
```php
Schema::table('page_translations', function (Blueprint $table) {
    $table->dropColumn('slug');
});
```

### Removals
The following classes are removed or haved changed location:
- Interface `Thinktomorrow\Chief\Relations\PresentForParent` can be replaced with `Thinktomorrow\Chief\Concerns\Viewable\ViewableContract`.
- Trait `Thinktomorrow\Chief\Relations\PresentingForParent` can be replaced with `Thinktomorrow\Chief\Concerns\Viewable\Viewable`.
- `Thinktomorrow\Chief\Concerns\ProvidesUrl\ProvidesUrl` moved to `Thinktomorrow\Chief\Urls\ProvidesUrl\ProvidesUrl`.

The following methods have been replaced:
- The former method for rendering a view was `presentForParent(ActingAsParent $parent)` and is no longer available. Use the `renderView()` method instead.
- The `view()` method on the Page model is removed and `renderView()` should be used instead. If you used this method in determining the frontend view, you should switch to the new response flow. See below.
- The `Page::menuUrl()` was deprecated in previous 0.2 version and is now removed in favor of the `Page::url()` method.
- `Page::hasPagebuilder()` and `Page::pagebuilder` were deprecated in 0.2 and are now removed. They are no longer used to determine if
- Removed: `Page::findBySlug()` and `Page::findPublishedBySlug()`.
  pagebuilder should be used or not. If you need to control the pagebuilder setup, you should adapt the `fields()` return value instead.
- Removed: Homepage setting and `chief-settings.homepage` config value. A homepage is now determined by changing the page url to a '/'.

### Deprecations
The model data passed to the view, will now always be passed as a `$model` or `$collection` variable. Since 0.3 the `$page`, `$module` and `$pages` are deprecated.

### Route pages.home not required
The `pages.home` is no longer required in version 0.3. Chief will no longer rely on this route to exist.
You are free to still use it in your project.

### Project route and controller no longer required
In version 0.3, the route declaration for the `pages.show` is done automatically. It is no longer
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

### Removed: $page and $module view variables.
- The page or module is now passed as a `$model` variable to the view. The `$page`, `$module` and `$pages` - as used by custom query sets - variables
are set as deprecated and will be removed in 0.4.

### Changed: default viewpaths
The default page and module viewpaths no longer assume the `front` folder. The default are now:
- pages: `resources/views/pages`,
- modules: `resources/views/modules`,
- sets: `resources/views/sets`

You can change these to fit your project's needs in the `thinktomorrow.chief.base-view-paths` config setting.

### Changed: fieldArrangement()
If you've written a custom `Manager::fieldArrangement()`, chances are that you'll need to replace the `$this->fields` presence in the method to `$this->fieldsWithAssistantFields()`.
This change is needed to include any optional assistant added fields as well.

