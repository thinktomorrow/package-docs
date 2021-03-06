# Advanced guide

## Strict mode
When chief is in strict mode, it highlights potential errors and warnings in your application.
Strict mode is enabled by default in development mode. In production builds this has no effect.

You can disable / enable strict mode in the chief config:
```php
# config/thinktomorrow/chief.php

'strict' => env('APP_DEBUG', false),
```

## Using extra logins besides chief

To make sure the logins you add don't conflict with the chief login make sure you override the logout method on your logincontroller to only flush the password_hash instead of the whole session. Otherwise the logout will also log your user out of the chief admin.
The logout method should look like this:

```php
# App/Http/Controllers/Auth/LoginController.php

public function logout(Request $request)
{
    $this->guard()->logout();

    $request->session()->forget('password_hash');

    return $this->loggedOut($request) ?: redirect('/');
}
```

# Advanced Model Management

## Model views
Implement the `ViewableContract` if the model should be rendered on the site.
Implement the `ProvidesUrl` contract if the model needs to be accessed directly via an url.

## Model fields

## Authorization & authentication
Note that Chief has separate tables for the chief admin users, `chief-users` and `chief_password_resets`. This way there is no interference with your application user logic.

## Grouping pages in the pagebuilder

One of the ways to group pages together is to add them to the pagebuilder next to eachother.
These pages will be grouped and the view can be customized by creating a view in the modules folder with the name of the type of page.
For instance, lets take a page called product. We can make multiple product pages.
Now if we want to show 3 products on the homepage we can add those products in the pagebuilder and if we have a view 'modules/product.blade.php'
that view will be used to render those items.

To get this working properly make sure you filename is the same as the key you defined that page as in the Chief.php config file.

## Using snippets


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

### Custom chief pages

Any page can be added as a nav item in chief by added them to the nav-main.blade.php that you override in your project.

One thing to keep in mind while defining the routes is to add the web, web-chief and auth:chief middleware to your routes to make sure all the authorization works correctly.