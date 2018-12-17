# glossary

## pages

Pages in chief are exactly that. Pages. They have a front-end page, a url, etc.

Pages can have a pagebuilder that lets you use predefined modules, sets and collections to build up your page.
More about these types below.

### collections

Every page has a collectiontype. This type determines which collection the page belongs to.
One special collectiontype is "single". A page with the collectiontype "single" is a page that stands on its own.
As opposed to a page with the collection type "product" which belongs to the products collection.

## modules

A module is a small element that can be added to a page through the pagebuilder.
A module does not have a dedicated page and no url.

### general modules

A general module is accesible across all pages.

### owned modules

An owned module is only accessible on the page that owns it.

Switching general -> owned or vice versa is not possible at this time.

## sets

A set is a predefined subset of one or more managed models/pages/modules.

## snippets

## static translations

Any translation that doesn't belong to a page/model/etc. can be managed in the static translations.
These can include stuff like validation errors, cookie bars, etc.

## menu

There can be multiple menu's setup through chief, and for each menu you can add menu items that link to the different pages.

## pagebuilder

The pagebuilder lets us build a page to our specifications by linking modules, pages, textblocks, etc.
