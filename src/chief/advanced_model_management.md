# Advanced Model Management

## Localization
## Tweaking the admin form
## Custom routes (e.g. publish/archive)


## Filters
It is possible to add filtering on the admin index pages. Filters allow the administrator to query index results with custom behaviour.
For example searching by title via a text input or selecting between published or drafted items. By default, there are no filters set on a manager. 

Let's add some filtering.

### Defining filters
Filters are defined in the Manager class via the `filters` method. This returns a `Thinktomorrow\Chief\Filters\Filters` instance which acts as the filter collection:
```php 
use \Thinktomorrow\Chief\Filters\Filters;
...

public static function filters(): Filters
{
    return new Filters([
        LocaleFilter::class
    ]);
}
```

A Filter class should extend from the base `\Thinktomorrow\Chief\Filters\Filter` class and needs to define two methods: an `init()` which boots the filter instance and an `apply` function.
Here's an example:

```php

use \Thinktomorrow\Chief\Filters\Filters;

...
class SearchFilter extends InputFilter
{
    public static function init()
    {
        return static::make('search');
    }

    public function apply($value = null): Closure
    {
        return function($query) use($value){
            return $query->where('name','LIKE', '%'.$value.'%');
        };
    }
}
```

This will add a search field in the sidebar of your index like so:

![Filter example](./img/filter-example.png)

Optionally you can add:
a `label` property to set a custom label. By default the input name is used.
A `description` property to add a small description below the field.


### Input filter
The input filter allows the user to query by textual input. A search field is a good use case. As shown in the example above, there are
a couple of values to be set. 

### Select filter
The select filter allows the user to choose between a set options. Here you should also set the options via an `options` property.
```php{8}
use Closure;
use Thinktomorrow\Chief\Filters\Types\SelectFilter;

class LocaleFilter extends SelectFilter
{
    public $label = 'Language';

    public $options = ['nl','fr'];

    public static function init()
    {
        return static::make('language');
    }

    public function apply($value = null): Closure
    {
        return function($query) use($value){
            return $query->whereIn('locale',[$value]);
        };
    }
}
```

