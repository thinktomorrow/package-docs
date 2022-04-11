# Fields

## Adding fields
Each Manager has a `fields()` method. This method returns all available form fields.
Chief has the most commonly used fields already at your disposal, such as text and select input, checkboxes, textarea and wysiwyg input.
If your project requires another input type, you can always [create a custom field](#create-a-custom-field) as well.

Define your fields in the `fields()` method of the manager. This method should return a `\Thinktomorrow\Chief\Fields\Fields` class.
The first argument for this `Fields` class is an array of field objects. Each field should extend the `\Thinktomorrow\Chief\Fields\Field` class.

```php
use \Thinktomorrow\Chief\Fields\Fields;
use \Thinktomorrow\Chief\Pages\PageManager;
use \Thinktomorrow\Chief\Fields\Types\TextField;
use \Thinktomorrow\Chief\Fields\Types\InputField;

class AuthorManager extends PageManager
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


## Available options

The following are the default available options on all fields:

- make: the name of the field, also corresponds to the database column name
- label: the label shown in the admin panel
- description: the description shown underneath the label in the admin panel
- validation: the laravel validation rules applied to this field. More on this in the section [Validation](#validation).
- translated: the languages in which this field should be translated. More on this in the section [Localisation](#localisation).
- default: set the default value for this field.
- valueResolver: set a callback that will be used to determine how this value should be filled. Useful if the field is saved on a pivot or in a json field.

An example of a basic field with all these options filled in could look like this:

```php
InputField::make('title')->translatable(['en', 'nl'])
                        ->validation('required-fallback-locale|max:200')
                        ->label('Page Title')
                        ->description('Title to be used in the admin.')
                        ->default('Standard pagetitle')
                        ->valueResolver(function($model, $locale){
                            return $model->pagetitle();
                        }),
```

## Create a custom field

## Page fields

## Validation

## Localisation
:::tip
If you define a field as translatable you will have to override the `translatedAttributed` on the model so the translated field can be fetched.
```
protected $translatedAttributes = ['title', 'content', 'title_bg'];
```
In this case we added the title_bg field so we have to override all translated fields.
:::

### Validating fields

- intro: eloquent model, custom object, Page and Module are 2 in-house types of managers
-



:::tip
If you define a field as translatable you will have to override the `translatedAttributed` on the model so the translated field can be fetched.
```
protected $translatedAttributes = ['title', 'content', 'title_bg'];
```
In this case we added the title_bg field so we have to override all translated fields.
:::
