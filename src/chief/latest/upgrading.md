# Upgrading

## Releases
The latest version of Chief is `0.7.*` which is the one being currently developed upon.
Previous versions will no longer be maintained with the exception for security fixes and critical bugfixes.
It is recommended to upgrade to this latest version.

## Versioning
Chief follows the [semantic versioning](https://semver.org/) and we always try to maintain a backward compatible release cycle.
Note that while development is still in the 0.* release cycle, minor versions will be able to contain breaking changes.

## Upgrading minor versions
Minor version updates are done by updating the package. Run `composer update thinktomorrow/chief`.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root.
Note that with the force flag you update all existing chief style and script assets in your project.

## Upgrading from 0.6.* to 0.7.*
Since 0.7 is a major overhaul of the chief logic and architecture since 0.6, the upgrade will take some time. Also the minimum requirement for Laravel is 9.*.
This upgrade guide will try to assist you in this process. 

For older laravel applications, we recommend to first upgrade your application to Laravel 9. 
After that, you can continue with your chief upgrade.

#### update chief package
Set your composer package constraint to `thinktomorrow/chief: dev-master@dev`. Run `composer update thinktomorrow/chief` command to get to the latest version.

If during the install any errors occur regarding files not existing please refer to the [removals](#removals) section, change the affected classes
and run `composer install` again.

Next update the chief assets by running `php artisan vendor:publish --tag=chief-assets --force` in your project root.
Note that with the force flag you'll update all existing chief style and script assets in your project.

Don't run the chief migrations just yet! You'll need to take a backup of the squanto tables first:
### Squanto
Squanto is a translation package used by chief and in this version chief uses the 1.* version which uses a different database scheme. The easiest way to upgrade is:
- use the cached output of production language files usually found in storage/app/lang as the new resource. This means copying all these files to your resources/lang directory.
- Remove the old database tables. These are the three tables starting with as squanto_ prefix.
- After running the chief migration - which you shouldn't do just yet - you should do a squanto:push and squanto:purge to resync the database.

### Migrate database schema
Run `php artisan migrate` to run the chief migrations. This also includes a migration for the Spatie Medialibrary v9.

### Updated config
The config files, both `chief` and `chief-settings` now reside in the `config` folder and no longer in the `config/thinktomorrow` folder. 
We advise to add the chief config via `php artisan vendor:publish --tag=chief-config` and copy the project settings manually from the former config files.
