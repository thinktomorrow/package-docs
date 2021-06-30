# Contributing
Chief is an open source project that is maintained by Think Tomorrow. Our feature choices are
driven by our own project needs. Chief is how we want our customers to manager their content.
Chief can be found on our [github](https://github.com/thinktomorrow/chief).

## Symlinking chief
First clone the chief repository. `git clone git@github.com:thinktomorrow/chief.git`.

In order to interact with the admin, you'll need a project. Start a blank laravel project and follow the
installation instructions. Now make sure you use your local chief package.

Paste the following snippet in your composer.json file.
```php
"repositories":[
   {
       "url":"/full/path/to/chief",
       "type":"path",
       "options":{
           "symlinks":true
       }
   }
],
```
The url property needs to be the full path to the local version of the chief package.

Change the chief declaration in the composer _require_ section to the following:
```php
"require": {
    "thinktomorrow/chief":"@dev"
}
```
If you already had an installed chief in your vendor folder, make sure to remove it first.

To migrate and scaffold some entries you can run `php artisan chief:refresh`.
**Note that this will remove your existing database entries!**
