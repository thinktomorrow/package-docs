# Usage

## Preparing the model

To upload files to a model we just need to add a trait to the model of our choosing and implement the HasAsset interface.

```php
use Illuminate\Database\Eloquent\Model;
use Thinktomorrow\AssetLibrary\AssetTrait;
use Thinktomorrow\AssetLibrary\HasAsset;

class Article extends Model implements HasAsset
{
   use AssetTrait;
}
```

## Uploading files

There are 2 main ways to upload a file.
- To a model
- To the assetlibrary

### To a model

Make sure you have prepared the model you would like to upload a file to as specified in
the previous step

####  File

To upload a file we call the add method on the 'AddAsset' class and as a first parameter we pass the model we want to attach the file to.

```php
$model = new Article();
app(AddAsset::class)->add($model, $file, $type, $locale, $filename);
```

#### type `String`

Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.
Without type the library wouldn't be able to discern between them.
This is explained in greater detail in the section about retrieving files.

#### locale `String`

The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc

#### filename `String`

The filename can be set to override the uploaded filename. Keep in mind that the filename will still be sluggified for safety.

### Upload an array/collection of files

Uploading multiple files at once is done like this:

```php
$model = new Article();
app(AddAsset::class)->addMultiple($model, $files, $type, $locale)
```

#### files `Array|Collection`

The Thinktomorrow\AssetLibrary\Asset upload is used to attach existing assets from the library to an existing model, and works exactly the same as uploading a file.

#### type `String`

Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.
Without type the library wouldn't be able to discern between them.
This is explained in greater detail in the section about retrieving files.

#### locale `String`

The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc

As you can see there is no parameter for the filename. To pass along a filename you can key the array with the filename like so:

```php
$article = new Article;
app(AddAsset::class)->addMultiple($model, [
   'Image1.png' => Image,
   'Image2.png' => Image
],
$type, $locale);
```

### To the general library

If you don't want to attach a file to a model in the case of a medialibrary, this works as follows.

```php
$asset = AssetUploader::upload($file, $filename);
```

A file not attached to a model doesn't have a type or locale since these fields are only relevant in the context of a model.

### Uploading a Base64 encoded image string

Uploading a Base64 image is different for a model or the library

### Attached to a model

Uploading a Base64 image is exactly the same as a normal file.

```php
$article = new Article();
app(AddAsset::class)->add($model, 'Base64EncodedImage', $type, $locale, $filename);
```

### To the general library

Uploading a Base64 image to the library uses a different method on the AssetUploader class:

```php
$asset = AssetUploader::uploadFromBase64($file, $filename);
```

## Retrieving files

Retrieving a file from a model is very simple. There are a few methods on the model available.
				
exists() returns true if this model has a file for the given type.

```php
$article->asset($type, $locale)->exists();
```

url() returns the url for the size.

```php
$article->asset($type, $locale)->url($size);
```

assets() returns all the assets for the type/locale.

```php
$article->assets($type, $locale);
```

## Replacing assets on a model

ReplaceAsset takes the ids of the assets to replace and to replace with. Note: the replaced asset will be detached.
		
```php
$article = new Article();
app(ReplaceAsset::class)->handle($model, $replaceId, $withId);
```
## Sorting assets on a model

sortFiles() takes the type and an array which defines the sorting order. The array should have the order as keys and the ids of the assets as value:
		
```php
$sorting = [
	0 => "3"
	1 => "1"
	2 => "2"
];

app(SortAsset::class)->handle($model, $type, $sorting);

```

## Detaching assets

DetachAsset takes the model and ids of the assets to detach.

detach() detaches the given ids from the given model.

detachAll() detaches all the assets from the model or the assets with the given type.
		
```php
app(DetachAsset::class)->detach($model, $ids);

app(DetachAsset::class)->detachAll($model, $type);
```

## Removing assets

DeleteAsset() takes the ids of the assets to be deleted. Note: the asset will be completely removed.

delete will remove all the assets with the given ids.	

```php
app(DeleteAsset::class)->delete($ids);
```
## Adding conversions

An upload also creates conversions(size) for the file:

```php
- thumb: width     150
	 	 height    150
- medium:width     300
	 	 height    130
- large: width     1024
	 	 height    353
- full:  width     1600
		 height    553
```

The original version will be returned if you don't specify the size.
These conversions can be defined in the assetlibrary config file.
