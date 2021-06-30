# Model Management

## Models and Managers

### Creating a manager
A manager makes it possible to expose your models to the Chief administrator. In order to manage an eloquent model, we'll create a manager.
At the very least, a manager class needs to implement the `\Thinktomorrow\Chief\Management\Manager` interface.

::: tip INFO
We recommend you to extend the `\Thinktomorrow\Chief\Management\AbstractManager` class.
This class gives you an out-of-the-box setup for most of the methods required by the Manager contact.
:::

As an example, let's say our project has an `Author` eloquent model. Our client needs to edit or create authors of their own, so w'll need to add a manager.
An author manager can look something like this:

```php
# AuthorManager.php

<?php

use Thinktomorrow\Chief\Management\Manager;
use Thinktomorrow\Chief\Management\AbstractManager;

class AuthorManager extends AbstractManager implements Manager
{
    ...
}
```

### Providing required methods
Besides the defaults provided by the AbstractManager,  there are methods you'll need to implement yourself. Let's go over them.

#### Manager::fields
`Manager::fields(): \Thinktomorrow\Chief\Fields\Fields`

Here you define the model attributes to be managed in the admin. In Chief a single field can be represented by a `Field` class.
Each field class takes care of the form representation and validation.
[Learn more on fields in the fields section](#fields).

If we'd like our author to have a manageable name and bio, we can setup something like this:

```php
use \Thinktomorrow\Chief\Fields\Fields;
use \Thinktomorrow\Chief\Fields\Types\InputField;
use \Thinktomorrow\Chief\Fields\Types\TextField;
...

public function fields(): array
{
    return new Fields[
        InputField::make('name'),
        TextField::make('bio'),
    ];
}
```

#### Here is the full overview of all the methods expected for a Manager:
```php
// Methods provided by the AbstractManager
public function route($verb): ?string;
public function can($verb): bool;
public function fieldArrangement(): FieldArrangement;
public function getFieldValue($field);
public function setField(Field $field, Request $request);
public function saveFields(): Manager;
public function renderField(Field $field);
public function delete();
public function managerDetails(): ManagerDetails;

// Methods you'll need to implement for each model
public function manage(ManagedModel $model = null): Manager { ... }
public function fields(): array { ... }
public static function findById($id): ?Manager { ... }
public static function findAllManaged(): Collection { ... }
public function managedModelDetails(): ManagedModelDetails { ... }
```


### Registering a manager
Last thing to do is registering the manager which makes our manager available inside the Chief application.
You register a manager with the `register` command. A good place to put these registrations is in your project's `AppServiceProvider`.
```php
# App/Providers/AppServiceProvider

use \Thinktomorrow\Chief\Management\Register;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        app(Register::class)->register(Author::managerKey(), AuthorManager::class);
    }

    ...
}
```
The register method takes two arguments: first you pass it the unique identifier of the manager. This string identifies the manager inside the chief internals.
This value should match the return value from Author::managerKey().

The second parameter is the reference to the Manager class.

### navigation
-> view in chief admin...

### Authorizing actions