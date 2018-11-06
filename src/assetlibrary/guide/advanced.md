## Migrating images to Assetlibrary

### Intro

New in 0.5 is a command to help you migrate your old way of linking images to the AssetLibrary way.

In our older projects we used to just add a column in the database if we needed an image.
This works fine but it starts getting annoying when we need multiple images attached to one model because we needed pivot tables.

If we want to migrate from this old way to the AssetLibrary way we can use this command.

## Usage

The command looks like this:

```assetlibrary:migrate-image {table} {urlcolumn} {linkedmodel} {idcolumn=id} {ordercolumn?} {--force} {--reset} {--dry}```

A quick run down of the field is as follows:

Table is the table that has the links to the images, this can be the model that it's attached to or a pivot table with a foreign key to the model.

Urlcolumn is the column with the actual url to the image/asset.

Linkedmodel is the model that the images/assets are linked to. This can be the same model as the table but it doesn't have to be.

idcolumn is used to set the name of the id column, usually this will be 'id' but in some instances this could be different.

ordercolumn allows us to migrate the ordering of the images/assets as well.


Next we have a few flags:

--dry runs the command but doesn't actually change anything.

--reset removes all the assets on the model should there be any.