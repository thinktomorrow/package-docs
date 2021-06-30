# Customizing managers

In some cases the basic managers might not be enough.
For instance if you want to add some fields to a module/collection or just want to control who is allowed to view or edit the model.

## Creating a custom manager

To create a custom manager extend one of the following:
- ModuleManager (Module)
- PageManager (Page)
- [AbstractManager](advanced.md#advanced_model_management) (advanced)

So let's create a custom manager and extend 'ModuleManager'.
This all works the same when you're extending the 'PageManager'.

```php
// src/Modules/HeaderManager.php 

class HeaderManager extends ModuleManager
{
    public function fields(): Fields
    {
        return new Fields([
            InputField::make('name'),
            TextField::make('bio'),
        ]);
    }
}
```

Link your new manager to the your module in the 'ChiefProjectServiceProvider'.

```php
// App\Providers\ChiefProjectServiceProvider.php

$this->registerModule(HeaderManager::class, Header::class);
```

One thing you might want to do is add some managed fields.

You can find all the possible fields [here](fields.md).

One important thing to remember is the name you define in the 'make()' function also corresponds to the database entry for all fields except for the Asset fields(Media, Document).
So don't forget to create a column in your database for each field you add here.

### Index card

The cards you see on the index for a page or module can also be customized on the manager.
To do this implement the 'details()' function. 

How to customize the view file is explained here: [customize index view](customizing_chief_admin.md#customizing-index-pages)

```php
// src/Pages/CustomPageManager.php

public function details(): Details
{
    // For existing model
    if ($this->hasExistingModel()) {
        return parent::details()
            ->set('title', ucfirst($this->existingModel()->title))
            ->set('subtitle', 'subtitle')
            ->set('intro', 'Updated on ' . $this->existingModel()->updated_at->format('d/m/Y H:i'))
            ->set('context', '<span class="inline-xs stack-s">' . $this->assistant('publish')->publicationStatusAsLabel() . '</span>');
    }

    return parent::details();
}
```

### Authorization

To prevent or allow certain roles to do CRUD on this model you can implement the 'can()' function.

```php
public function can($verb): bool
{
    // Do not allow creation
    if($verb == 'create' && !chiefAdmin()->hasRole('developer')) return false;

    return parent::can($verb);
}
```

The default verbs are 'create', 'store', 'edit', 'update', 'delete', 'upload'. 

### Pagination a manager in the admin panel

Pagination in the admin panel can be activated on each manager.
To add pagination set a property $paginated to true and set $pageCount to the amount of items on a page.

```php
# AuthorManager.php

<?php

use Thinktomorrow\Chief\Management\Manager;
use Thinktomorrow\Chief\Management\AbstractManager;

class AuthorManager extends AbstractManager implements Manager
{
    protected $paginated = true;
    protected $pageCount = 10;
}
```

## Dynamic attributes
Usually a model's value corresponds to a database column. This is the default behavior. This is fine but can be cumbersome when you want to manage a lot of different values.
Also when you don't know the amount of values beforehand, this can prove to be a challenge. With dynamic attributes, you'll be able to store and manage values on the model without migrations.
All values are stored as a json value on the database level, and transposed to a `Thinktomorrow\Chief\DynamicAttributes\DynamicAttributes` behind the scenes.

### Setting up a dynamic model
1. Add the trait `Thinktomorrow\Chief\DynamicAttributes\HasDynamicAttributes` to the eloquent model.
2. Set a `$dynamicKeys` property on the model. This should be an array of all the attributes that the model exposes.
3. You're good to go. Here's an example of such as setup:
```php
use Illuminate\Database\Eloquent\Model;
use Thinktomorrow\Chief\DynamicAttributes\HasDynamicAttributes;

class ModelStub extends Model
{
    use HasDynamicAttributes;

    // the attribute 'title' is available as dynamic value.
    protected $dynamicKeys = ['title'];
}
```

### Retrieving a dynamic attribute
A dynamic attribute can be retrieved just like a first class property. Or you can choose to use the `dynamic()` method.
```php
// fetching dynamic attribute can be done just like another attribute.
$model->title;

// This is the same as calling the underlying dynamic() method:
$model->dynamic('title');

// If the attribute is localized, and you'd need to fetch a different locale, you can pass a second 'locale' parameter.
$model->dynamic('title', 'en');
```

### When to choose for dynamic attributes
- the column of value is not important for database indexing or search queries.
- the columns are not always expected on each model entry or cannot be determined beforehand.
- the values is not required to be constrainted or validated on a database level.

In other cases, it is best to stick with separate database columns.
