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

## Available fields
- [InputField](#inputfield)
- TextField
- HtmlField
- SelectField
- RadioField

### InputField


## Available options
## Create a custom field
## Field arrangements
All fields are

## Page fields
## Validation
## Localisation

### Validating fields

- intro: eloquent model, custom object, Page and Module are 2 in-house types of managers
-

### Field

This is the basic field. You would not use this to define a field on a model.
Instead you define one of the more specific fields.
This class provides some global function that are useful for a field like if it's translatable, its validation, label and description.

A basic input field might look like this:

```php
InputField::make('title')->translatable(['en', 'nl'])
                        ->validation('required-fallback-locale|max:200')
                        ->label('Page Title')
                        ->description('Title to be used in the admin.'),
```

:::tip
If you define a field as translatable you will have to override the `translatedAttributed` on the model so the translated field can be fetched.
```
protected $translatedAttributes = ['title', 'content', 'title_bg'];
```
In this case we added the title_bg field so we have to override all translated fields.
:::

### DateField

This field will allow you to add a date to the model.
To display this date correctly across all pages you need to define the field in the dates array on the model.

```php
<?php
use Thinktomorrow\Chief\Pages\Page;
use Thinktomorrow\Chief\Common\Fields\DateField;
class DateItem extends Page
{
    public $dates   = ['date'];

    public function customFields()
    {
        return [
            'date' => DateField::make('date')->label('The date'),
        ];
    }
}

```

### DocumentField

The document field adds a file upload (any type) to the model.

One extra option is 'multiple' to define if the field may upload multiple files or just one.

### HtmlField

The Html field will render as a wysiwyg editor in the admin.

### InputField

This is the basic input element.

### MediaField

The document field adds media (png, jpg, jpeg, gif, etc) to the model.

One extra option is 'multiple' to define if the field may upload multiple files or just one.

### PageBuilderField

This field is responsible for the pagebuilder. This requires some extra setup if you want to customize these fields.
Although this field is present on pages by default so that shouldn't need more setup.

### SelectField

The selectfield renders a dropdown. It has options that you can pass along as well as the currently selected property.

```php
SelectField::make('pages')
            ->label('Page')
            ->description('Select a page')
            ->options($all_pages)
            ->multiple(false)
            ->selected($pageId);
```

### RadioField

The radio field renders radiobuttons. This extends the selectfield so it has all its features but just a different identifier.

### TextField

The textfield is the same as the Html field except that this does not render as a wysiwyg editor.

### HasPeriod fields