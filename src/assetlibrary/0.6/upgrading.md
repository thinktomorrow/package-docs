# Upgrading

## upgrading from 0.5.4 to 0.6.0

### Changes

The following files have been moved:

- Assettrait moved from Traits folder to root
- Assetuploader moved to Application folder


### Api changes

Assettrait is now only responsible for fetching the images.
To add, remove, replace or sort assets you should use the following commands:

- AddAsset
- DeleteAsset
- ReplaceAsset
- SortAsset

### Implementation changes

Since Assettrait is now only responsible for fetching there are some changes to how you would get an asset.

Assettrait now provides 2 functions for fetching assets:

```php
//single asset
$model->asset('type', 'locale');

//multiple assets
$model->assets('type', 'locale');
```

These functions will return an Asset or a collection of assets.

Fetching filename or url is now done on the asset itself

```php
$model->asset('banner', 'locale')->filename('size');
$model->asset('banner', 'locale')->url('size');
```
