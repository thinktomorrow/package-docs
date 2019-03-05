# Fields

## DateField

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

## HasPeriod fields