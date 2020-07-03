# Upgrading

## Releases
The latest version of Chief is `0.5.*` which is the one being currently developed upon.
Previous versions will no longer be maintained with the exception for security fixes and critical bugfixes.
It is strongly recommended to upgrade to the latest `0.5` version.

## Versioning
Chief follows the [semantic versioning](https://semver.org/) and we always try to maintain a backward compatible release cycle.
Note that while development is still in the 0.* release cycle, minor versions will be able to contain breaking changes.

## Upgrading from 0.2.14 to 0.3.*

#### Installation
Set your composer package constraint to `thinktomorrow/chief: ^0.3`. Run `composer update thinktomorrow/chief` command to get to the latest 0.3.* version.

If during the install any errors occur regarding files not existing please refer to the [removals](#removals) section, change the affected classes
and run `composer install` again.

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

The `chief-settings` file is changed and now has the following values:
```php
 return [

     /**
      * Contact person (aka webmaster)
      *
      * The contact person receives all incoming communication e.g. contact form submissions
      * and is the sender address for all transaction mails such as password reset mails.
      */
     'contact_email' => env('MAIL_ADMIN_EMAIL', 'info@thinktomorrow.be'),
     'contact_name'  => env('MAIL_ADMIN_NAME', 'Think Tomorrow'),

     /**
      * Client details
      *
      * This is mainly a backend thing but it can occur in a
      * couple of frontend places such as the mail footer.
      */
     'app_name' => 'Chief',
 ];
```

### Migrate page slugs to url table
The routing will still not work since there are no url entries yet. After installing the new version, you'll need to run migrations via `php artisan migrate`.
These migrations will also copy all page slugs and convert them to proper urls.
:::warning page_translations.slug will be removed
Note that this migration removes the slug column on the page_translations table.
:::

### Changes to model registration
In version 0.2.14 you needed to define a registrationkey as the first parameter  per model/manager pair registration.
This first parameter is now renamed to managedModelKey and moved to the models.
So to get everything in line remove the first parameter from the registrations in your ChiefprojectServiceProvider.
```php

// version 0.2.14
$this->registerPage('singles', PageManager::class, Single::class);

// version 0.3
$this->registerPage(PageManager::class, Single::class);
```

And on the model you should add the managedModelKey and choose a relevant name.

```php
protected static $managedModelKey = 'singles';
```

### Model labels

The labelSingular and labelPlural field are now only accepted on the model instead of both the model and the manager. 

You should remove the declaration of these fields on the manager to their respective models.

### Removals

#### Routes
The chief routes or now autoloaded so you can safely remove the chief routes in your project and the controller linked to these.
If you need to keep your own routing in place, make sure to set the chief setting `thinktomorrow.chief.route.autoload` to `false` so it will no longer autoload
this route.

#### Classes
The following classes are removed or haved changed location:
- Interface `Thinktomorrow\Chief\Relations\PresentForParent` can be replaced with `Thinktomorrow\Chief\Concerns\Viewable\ViewableContract`.
- Trait `Thinktomorrow\Chief\Relations\PresentingForParent` can be replaced with `Thinktomorrow\Chief\Concerns\Viewable\Viewable`.
- `Thinktomorrow\Chief\Concerns\ProvidesUrl\ProvidesUrl` moved to `Thinktomorrow\Chief\Urls\ProvidesUrl\ProvidesUrl`.

The following methods have been replaced:
- The former method for rendering a view was `presentForParent(ActingAsParent $parent)` and is no longer available. Use the `renderView()` method instead.
- The `view()` method on the Page model is removed and `renderView()` should be used instead. If you used this method in determining the frontend view, you should switch to the new response flow. See below.
- The `Page::menuUrl()` was deprecated in previous 0.2 version and is now removed in favor of the `Page::url()` method.
- `Page::hasPagebuilder()` and `Page::pagebuilder` were deprecated in 0.2 and are now removed. They are no longer used to determine if pagebuilder should be used or not. If you need to control the pagebuilder setup, you should adapt the `fields()` return value instead.
- Removed: `Page::findBySlug()` and `Page::findPublishedBySlug()`.
- Removed: Homepage setting and `chief-settings.homepage` config value. A homepage is now determined by changing the page url to a '/'.
- Added: ProvidesUrl now also required you to implement the resolveUrl function. The default to be used is the following:

```php
public function resolveUrl(string $locale = null, $parameters = null): string
{
    $routeName = config('thinktomorrow.chief.route.name');

    return $this->resolveRoute($routeName, $parameters, $locale);
}
```

### Deprecations
The model data passed to the view, will now always be passed as a `$model` or `$collection` variable. Since 0.3 the `$page`, `$module` and `$pages` are deprecated.

### middleware group and aliases no longer required
The `web-chief` middleware group is now autoloaded by the package. It is no longer needed to add this yourself in the `App\Http\Kernel` file.

The following route middleware aliases are no longer required to load up in your project. There are handled by the package itself.
`auth.superadmin`,  `chief-guest`, `chief-validate-invite`


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

### Homepage

Due to the changes in url management you should make sure one of your pages has '/' as its url to identify it as the homepage.

## Upgrading from 0.3.* to 0.4.*

The biggest change and the one most likely to affect your project is the Assetlibrary update to 0.6 .
Follow the assetlibrary upgrade documentation for this change. [Assetlibrary Documentation](../assetlibrary/0.6/upgrading.md)


## Upgrading from 0.4.6 to 0.4.7
0.4.7 introduces a new states logic for pages as well as a new api for Fields. 
There are a couple of breaking changes in this upgrade. If you haven't done too much advanced customisation, you're probably fine upgrading without too much hassle.

Please visit the [changelog](https://github.com/thinktomorrow/chief/releases/tag/0.4.7) for a list of all the major changes in this version.

### Installation
Set your composer package constraint to `thinktomorrow/chief: ^0.4.7`. Run `composer update thinktomorrow/chief` command to get to the latest 0.4.* version.

If during the installation any errors occur regarding non existing classes or files, we recommend to first follow the [upgrade guide](#upgrading-from-0-4-6-to-0-4-7) below and afterwards try to run `composer update` again.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root.
Note that with the force flag you'll update all existing chief style and script assets in your project.

### Database
First, we advice you to take a backup of the database prior to this migration.
Next run `php artisan migrate` to execute the database migrations. This will convert the old states to the new states setup in the database.
Note that this is only done for the _pages_ table. If your project has other tables containing old state logic, you'll need to do the same migration. In this case, you can create
a new migration in your project based on `vendor/thinktomorrow/chief/database/migrations/2019_09_01_163503_add_page_states.php`.

### Pagestate
Custom models that make use of the page states such as _published_, _draft_ or _archived_, now need to implement the `Thinktomorrow\Chief\States\State\StatefulContract.php`.
This contract expects two methods `stateOf(string $key)` and `changeStateOf(string $key, $state)`. As an example, the basic implementation for pages is this:
```php 
public function stateOf($key): string
{
    return $this->$key;
}

public function changeStateOf($key, $state)
{
    if ($state === $this->stateOf($key)) {
        return;
    }

    PageState::assertNewState($this, $key, $state);

    $this->$key = $state;
}
```

### Manager model
The manager property _model_ is no longer encouraged to be used. Use the `existingModel()` method to retrieve the model or `Manager::modelInstance()` for an empty generic model instance.
To check that an existing model is available, you can use the `Manager::hasExistingModel()` method.
If you have custom manager details - to show custom admin cards or page headers -, you might need to check for the models' existence first. An example from the PageManager can help you on your way:
```php 
public function details(): Details
{
    // Show details in case the model exists
    if ($this->hasExistingModel()) {
        return parent::details()
            ->set('title', $this->existingModel()->title ? ucfirst($this->existingModel()->title) : '')
            ->set('context', '');
    }

    // Show details in case no model exists yet - e.g. on create page.
    return parent::details();
}
```

### Mediafield
`Thinktomorrow\Chief\Fields\MediaField` is now an abstract class and no longer available as a field. Replace its usage with `Thinktomorrow\Chief\Fields\ImageField` instead. This naming better reflects the image only aspect of this formfield.

`Thinktomorrow\Chief\Fields\DocumentField` is removed. Replace its usage with `Thinktomorrow\Chief\Fields\FileField` instead, which has the same behavior. It better reflects its nature because also images are allowed here.

### Redactor image upload
The redactor image upload now expects a payload of base64 encoded data urls. This allows for faster uploads via the wysiwyg editor.
There is a `chiefRedactorImageUpload` function provided to be used in the redactor editor script file. You'll need to update your projects' editor settings.
Implementation looks like this:
```js
// resources/views/vendor/chief/back/_layouts/_editors/redactor/editor.blade.php
 $R.options = {
    @if(isset($imageUploadUrl) && (!isset($disableImageUpload) || !$disableImageUpload))
        imageUpload: chiefRedactorImageUpload('{{ $imageUploadUrl }}'),
    @endif
 }
```

### Other changes and removals
- Changed: File `Thinktomorrow\Chief\Concerns\Publishable\Publishable` is moved to `Thinktomorrow\Chief\States\Publishable\Publishable`
- Changed: File `Thinktomorrow\Chief\Concerns\Archivable\Archivable` is moved to `Thinktomorrow\Chief\States\Archivable\Archivable`
- Changed: `Field::multiple()` is only used to set the multiple state. To retrieve this value, it is replaced by `Field::allowMultiple()`.
- Removed: `Manager::model()`. You should either use `Manager::modelInstance()` for an empty generic model instance or `Manager::existingModel()` to retrieve the model record.
- Removed: `Publishable::sortedByPublished` is removed since it has no effect in sorting by published date.
- Removed: `Field::getFieldValue()`. Use the new `Field::getValue(Model $model = null, ?string $locale = null)` method instead.
- Removed: `Field::key()` is now only used to set a custom key.  To retrieve the key use the `Field::getKey()` method.
- Removed: `Field::name()` is now only used to set a custom name.  To retrieve the name use the `Field::getName()` method.
- Removed: `Field::column()` is now only used to set a custom column.  To retrieve the column use the `Field::getColumn()` method.
- Removed: `Field::default()` method is removed. From now on, use `Field::value(string $value)` to set the default value.

## Upgrading from 0.4.* to 0.5.*

### Changes to preview mode

A small improvement made to the preview mode functionality now requires you to include a view file in your master layout. This will add a small widget shown only to admins to indicate the preview mode and with a direct link to the edit page.

```php
@include('chief::front.admin-toast')
```

### Field changes

Fields can now be tagged, this makes it easier to group them into tabs in the admin view files how you want them.
If you override the fields in a manager you should tag the fields appropriatly.

The default tags are 'general', 'url' and 'seo'.

Tagging the appropriate field with these tags will ensure they are shown into the correct tabs.

```php{7}
InputField::make('seo_title')
    ->translatable($this->model->availableLocales())
    ->validation('max:66')
    ->label('Zoekmachine titel')
    ->description('Maximum 66 tekens')
    ->withCharacterCount()
    ->tag('seo'),
```

### Other changes and removals

- Changed: Field::getValue(string $locale = null) no longer requires to be passed the model. It now only accepts one optional locale argument.
- Changed: renamed Thinktomorrow\Chief\Management\Details\Sections to Thinktomorrow\Chief\Management\Details\DetailSections.
- Changed: renamed Thinktomorrow\Chief\Management\Details\HasSections to Thinktomorrow\Chief\Management\Details\HasDetailSections.
- Changed: Blade component alias chiefformgroup renamed to formgroup
- Changed: Trying to retrieve a Fields offset e.g. $fields['title']), which doesn't exist, now results in an exception being thrown.
- Changed: Field::default() sets the default value in case the model does not provide one. Field::value() forces the value.
- Changed: baseUrlSegment method is no longer a static method and requires to be an instance method.
- Changed: Moved the Healthmonitor classes to the src/System directory. You'll need to update your chief.php monitor entries.
- Removed: ManagedModel::previewUrl(). Use the ManagedModel::url() instead.
- Removed: the $manager instance is no longer available inside a field view. You can always pass this to the view via the Field::viewData() method.
- Removed: Manager::fieldValue() and Manager::renderField() methods. A field is now responsible for rendering its content, not the manager.