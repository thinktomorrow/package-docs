# Management basics

## Setting up your first manager
Let's take a basic example case:
Our application already has an eloquent `Author` model which is used on the site to display on each page. Up to now
these records weren't subject to change and it was ok not to make them available in the admin section of the site.
Now our client asks if they can manage those authors. Yikes! but no sweat. This is something where our manager comes in...


## Creating a manager
In order to manage an eloquent model, we'll create a manager.

#### Implementing the contract
At the very least, a manager class needs to implement the `\Thinktomorrow\Chief\Management\ModelManager` interface.
This contract requires you to set the expected methods on your manager class.

::: info
We recommend you to extend the `\Thinktomorrow\Chief\Management\AbstractManager` class.
This class gives you out-of-the-box behaviour for most of the expected methods.
:::

An author manager looks something like this:

```php
# AuthorManager.php

<?php

use Thinktomorrow\Chief\Management\ModelManager;
use Thinktomorrow\Chief\Management\AbstractManager;

class AuthorManager extends AbstractManager implements ModelManager
{
    ...
}
```

#### Providing additional methods
When you extend from the AbstractManager, there are already a big chunk of the interface taking care of. There are, however , still some methods you'll need to implement yourself. Let's go over them.

#### ModelManager::fields
`ModelManager::fields(): Fields`

Here you define the model attributes to be managed in the admin. In Chief a single field can be represented by a `Field` class.
Each field class takes care of the form representation and validation.
[Learn more on fields in the fields section]('./fields.md').

If w'd like our author to have a manageable name and bio, we can setup something like this:

```php
public function fields(): array
{
    return [
        InputField::make('name'),
        TextField::make('bio'),
    ];
}
```

### Here is the full overview of all the methods expected for a ModelManager:
```php
// Methods provided by the AbstractManager
public function route($verb): ?string;
public function can($verb): bool;
public function fieldArrangement(): FieldArrangement;
public function getFieldValue($field);
public function setField(Field $field, Request $request);
public function saveFields(): ModelManager;
public function renderField(Field $field);
public function delete();
public function managerDetails(): ManagerDetails;

// Methods you'll need to implement for each model
public function manage(ManagedModel $model = null): ModelManager { ... }
public function fields(): array { ... }
public static function findById($id): ?ModelManager { ... }
public static function findAllManaged(): Collection { ... }
public function managedModelDetails(): ManagedModelDetails { ... }
```


## Registering a manager
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

The second parameter is the reference to the ModelManager class.

## navigation
-> view in chief admin...

## Authorizing actions

## Validating fields

- intro: eloquent model, custom object, Page and Module are 2 in-house types of managers
-