# locale

## Install

Via Composer

``` bash
$ composer require thinktomorrow/locale
```

The package will be autodiscovered by laravel so no need to add the provider to the config/app.php file.

Finally create a configuration file to `/config/thinktomorrow/locale.php`

``` bash
php artisan vendor:publish --provider="Thinktomorrow\Locale\LocaleServiceProvider"
```
## Usage

To make your routes localized, place them inside a Route::group() with a following prefix:

``` php
Route::group(['prefix' => localeRoutePrefix()],function(){
    
    // Routes registered within this group will be localized
    
});
    
```


## Generating a localized url

Localisation of your routes is done automatically when <a href="https://laravel.com/docs/5.2/routing#named-routes" target="_blank">named routes</a> are being used. 
Creation of all named routes will be localized based on current locale. Quick non-obtrusive integration. 

``` php
    route('pages.about'); // prints out http://example.com/en/about (if en is the active locale)
```

To create an url with a specific locale other than the active one, you can use the `Thinktomorrow\Locale\LocaleUrl` class.

``` php
// Generate localized url from uri (resolves as laravel url() function)
localeroute('about','en'); // http://example.com/en/about

// Generate localized url from named route (resolves as laravel route() function)
localeroute('pages.about','en'); // http://example.com/en/about  

// Add additional parameters as third parameter
localeroute('products.show','en',['slug' => 'tablet'])); // http://example/en/products/tablet
    
```

**Note:** Passing the locale as 'lang' query parameter will force the locale 
*example.com/en/about?lang=nl* makes sure the request will deal with a 'nl' locale.

## Configuration
- **locales**: Whitelist of locales available for usage inside your application. 
    Basic usage:
```php
'locales' => [
    '*' => [
        'nl',
        'en',
    ]
],
```

Multi-domain usage:
```php
'locales' => [
    'https://awesome-domain-nl.com' => [
        '/' => 'nl',
    ],
    'https://awesome-domain-en.com' => [
        '/' => 'en',
    ]
],
```

Each multi-domain can have multiple locale as well:

```php
'locales' => [
    'https://awesome-domain.com' => [
        'en'    => 'en',
        '/'     => 'nl',
    ]
],
```


- **hidden_locale**: You can set one of the available locales as 'hidden' which means any request without a locale in its uri, should be localized as this hidden locale.
For example if the hidden locale is 'nl' and the request uri is /foo/bar, this request is interpreted with the 'nl' locale. 
Note that this is best used for your main / default locale.
- **placeholder**: Explicit route placeholder for the locale. Must be used for the LocaleUrl::route()` method when multiple parameters need to be injected.

## Switching languages

To implement a language toggle you can define the switch simply in the view using the activeLocale()->get() to find the active locale like so:

```php
@if(\Thinktomorrow\Locale\Scope::activeLocale()->get() == 'nl')
    <span class="font-bold p-2 inline-block">NL</span>
    <a href="{{ localeroute('pages.home', 'fr') }}">FR</a>
@else
    <a href="{{ localeroute('pages.home', 'nl') }}">NL</a>
    <span class="font-bold p-2 inline-block">FR</span>
@endif
```

Or if you prefer you can use a dedicated language switching controller.
This may come in handy if you need to do some other operations while switch languages.

```php
$locale = $request->get('locale', Scope::activeLocale()->get());

// Redirect to requested language version of this url
$redirect = $request->get('redirect', null) ?? localeurl(URL::previous(), $locale);

return redirect()->to($redirect);
```
