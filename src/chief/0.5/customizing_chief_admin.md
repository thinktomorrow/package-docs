# Customizing the chief admin

## Customizing the navigation

To customize the chief navigation create a 'nav-main.blade.php' file in the following location:
```
resources/views/vendor/chief/back/_layouts/_partials/nav-main.blade.php
```

This file will now override the default navigation and will allow you to customize it as you please.

The default navigation looks like this:

```php
<!-- Here you find the specific chief navigation for your project -->
{!! Thinktomorrow\Chief\Nav\Nav::fromKeys(\Thinktomorrow\Chief\Pages\Single::managedModelKey())
    ->render('Pages') 
!!}

{!! Thinktomorrow\Chief\Nav\Nav::fromTags('page')
    ->rejectKeys(\Thinktomorrow\Chief\Pages\Single::managedModelKey())
    ->renderItems('Collections')
!!}

{!! Thinktomorrow\Chief\Nav\Nav::allManagers()
    ->rejectKeys(\Thinktomorrow\Chief\Pages\Single::managedModelKey())
    ->rejectTags(['page','module', 'pagesection'])
    ->renderItems('Models')
!!}
```

The 'Nav' class is the main way to render the nav items. 
There are a few methods available that can help you take control of what to render.

#### fromKeys

Selects all the models based on the given key, this correlates to the 'managedModelKey' on the models.

#### fromTags

Selects all the models based on the given tag, this correlates to the tag given in the 'chiefprojectserviceprovider' on the registering of the model.
In this case the tag would be 'blog':

```php
$this->registerManager(ArticleManager::class, Article::class, ['blog']);
```

#### allManagers

Selects all the managers. Useful to list the remaining managers by rejecting all other keys/tags.

#### rejectKeys

Rejects managers based on the key given.

#### rejectTags

Rejects managers based on the tag given.


#### render

Renders the menu item with the given name. This will be a link to the corresponding managers index page.

#### renderItems

Renders a dropdown menu item with the given name. This will be a dropdown with links to corresponding managers index pages.

## Customizing the wysiwyg editor

We currently support two different wysiwyg editors in chief. Quill and Redactor.

To change which editor you want to use change the config value in the chief config file.

```php
/**
* Select the editor for the html fields. This is used for the html fields
* in the forms as well as in the pagebuilder. Available options are:
* 'quill' and 'redactor'. By default the free quill editor is set.
*/
'editor' => 'quill',
```

Next to edit the behaviour you should create a blade file 'editor.blade.php' in the following location:
Where '**EDITORNAME**' is 'redactor' or 'quill'.

```
resources/views/vendor/chief/back/_layouts/_editors/EDITORNAME/editor.blade.php
```

:::warning
Creating this file is required if you're using redactor since redactor is paid software which we can't include in chief. So you should get the .js file and include it in this file.
:::

## Customizing index pages

To customize the index pages override the 'indexView' method on the manager and return the string dot notation referencing the view path.

```php
public function indexView(): string
{
    return 'back.catalog.rowitems';
}
```

In the view you will have access to the '$managers' variable with all the managers for this model. 
You can then loop over these managers and render these however you want.
If you need access to other data in this view you can pass this using the 'indexViewData' method.

```php
public function indexViewData(): array
{
    return ['catalogpages' =>  CatalogPage::all()];
}
```

Everything returned in this way will also be accessible in the view file.

## Customizing create pages

Customizing the createView works in the same way, by overriding the createView method on the manager and returning the string dot notation referencing the view path.

```php
public function createView(): string
{
    return 'back.forms.create';
}
```

Make sure you render all the fields that are required on create on this view otherwise the creation will not work.

## Customizing edit pages

Customizing the editView works in the same way, by overriding the editView method on the manager and returning the string dot notation referencing the view path.

```php
public function editView(): string
{
    return 'back.forms.edit';
}
```

The default edit view can be found here [_editform.blade.php](https://github.com/thinktomorrow/chief/blob/master/resources/views/back/pages/_partials/_editform.blade.php).

Rendering the fields that have been defined on the manager can be done by their tags.

```php
$fields->tagged('pagebuilder')->render()
```

This allow you to easily group your field in the edit view.

If the page allows linked modules to be created the following check and the include need to be added to this view file. The check makes sure that the modules tab only shows when the page has any modules that can be created for it. 

```php
@if(\Thinktomorrow\Chief\Modules\Module::anyAvailableForCreation())
    <tab name="Modules">
        @include('chief::back.pages._partials.modules')
    </tab>
@endif
```