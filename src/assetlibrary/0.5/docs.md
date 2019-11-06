# Usage

## Preparing the model

To upload files to a model we just need to add a trait to the model of our choosing and implement the HasMedia interface.

```php
use Illuminate\Database\Eloquent\Model;
use Thinktomorrow\AssetLibrary\Traits\AssetTrait;

class Article extends Model implements HasMedia
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

To upload a file we call the addFile method on the model instance we want to attach the file to.

```php
$model = new Article();
$model->addFile($file, $type, $locale, $filename);
```

#### file `File|Thinktomorrow\AssetLibrary\Models\Asset`
`required`

The Thinktomorrow\AssetLibrary\Models\Asset upload is used to attach existing assets from the library to an existing model, and works exactly the same as uploading a file.

#### type `String`
`optional`

Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.
Without type the library wouldn't be able to discern between them.
This is explained in greater detail in the section about retrieving files.

#### locale `String`
`optional`

The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc

#### filename `String`
`optional`

The filename can be set to override the uploaded filename. Keep in mind that the filename will still be sluggified for safety.

### Upload an array/collection of files

Uploading multiple files at once is done like this:

```php
$model = new Article();
$model->addFiles($files, $type, $locale);
```

#### files `Array|Collection`
`required`

The Thinktomorrow\AssetLibrary\Models\Asset upload is used to attach existing assets from the library to an existing model, and works exactly the same as uploading a file.

#### type `String`
`optional`

Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.
Without type the library wouldn't be able to discern between them.
This is explained in greater detail in the section about retrieving files.

#### locale `String`
`optional`

The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc

As you can see there is no parameter for the filename. To pass along a filename you can key the array with the filename like so:

```php
$article = new Article;
$article->addFiles([
   'Image1.png' => Image,
   'Image2.png' => Image
],
$type, $locale, $keepOriginal);
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
$article->addFile('Base64EncodedImage', $type, $locale, $filename);
```

### To the general library

Uploading a Base64 image to the library uses a different method on the AssetUploader class:

```php
$asset = AssetUploader::uploadFromBase64($file, $filename);
```

## Retrieving files

Retrieving a file from a model is very simple. There are a few methods on the model available.
				
hasFile() returns true if this model has a file for the given type and/or url.

```php
$article->hasFile($type, $locale);
```

getFileUrl() returns the url for the type/file/locale.

```php
$article->getFileUrl($type, $size, $locale);
```

getAllImages() returns all the assets which are images.

```php
$article->getAllImages();
```

getAllFiles() returns all the assets for the type/locale.

```php
$article->getAllFiles($type, $locale);
```

## Replacing assets on a model

replaceAsset() takes the ids of the assets to replace and to replace with. Note: the replaced asset will be removed.
		
```php
$article->replaceAsset($replaceId, $withId);
```
## Sorting assets on a model

sortFiles() takes the type and an array which defines the sorting order. The array should have the order as keys and the ids of the assets as value:
		
```php
sorting = [
	0 => "3"
	1 => "1"
	2 => "2"
];

$article->sortFiles($type, $sorting);
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
