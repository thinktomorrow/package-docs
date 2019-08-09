# Customizing managers

In some cases the basic managers might not be enough.
For instance if you want to add some fields to a module/collection or just want to control who is allowed to view or edit the model.

## Creating a custom manager

To create a custom manager extend one of the following:
- ModuleManager (Module)
- PageManager (Page)
- [AbstractManager](./advanced.md#advanced_model_management) (advanced)

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

You can find all the possible fields [here](./fields.md).

One important thing to remember is the name you define in the 'make()' function also corresponds to the database entry for all fields except for the Asset fields(Media, Document).
So don't forget to create a column in your database for each field you add here.

### Index card

The cards you see on the index for a page or module can also be customized on the manager.
To do this implement the 'details()' function.

```php
// src/Pages/CustomPageManager.php

public function details(): Details
{
    // For existing model
    if ($this->model->id) {
        return parent::details()
            ->set('title', ucfirst($this->model->title))
            ->set('subtitle', 'subtitle')
            ->set('intro', 'Updated on ' . $this->model->updated_at->format('d/m/Y H:i'))
            ->set('context', '<span class="inline-xs stack-s">' . $this->assistant('publish')->publicationStatusAsLabel() . '</span>');
    }

    return parent::details();
}
```