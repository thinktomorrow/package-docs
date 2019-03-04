# Advanced Page Management

## Grouping pages in the pagebuilder

One of the ways to group pages together is to add them to the pagebuilder next to eachother.
These pages will be grouped and the view can be customized by creating a view in the modules folder with the name of the type of page.
For instance, lets take a page called product. We can make multiple product pages.
Now if we want to show 3 products on the homepage we can add those products in the pagebuilder and if we have a view 'modules/product.blade.php'
that view will be used to render those items.

To get this working properly make sure you filename is the same as the key you defined that page as in the Chief.php config file.

## Using query sets

A pageset is a collection of pages that can be added to a page as a module. 
In addition to this a pageset allows you to define query scopes.
This lets you filter the collection by published or other query scopes as you see fit.

### Creating pagesets
To create a pageset you make a file in the src/Pagesets folder.

```php
<?php
 namespace Thinktomorrow\Chief\Tests\Feature\PageSets;
 use Thinktomorrow\Chief\Pages\Page;
 use Thinktomorrow\Chief\PageSets\PageSet;

 class DummyPageSetRepository
{
    public function all($limit = 100)
    {
        $pages = Page::limit($limit)->get();
        return new PageSet($pages);
    }
} 
```

The next thing to do is to add a reference to this pageset in the chief-settings.php config file.

You need to define the pageset in the pagesets array so the admin-panel has knowledge of this new pageset.


```php
'pagesets' => [
    'published' => [
        'action' => PublishedPageSet::class.'@published',
        'parameter' => [1],
        'label'     => 'published pages'
    ]
]
```

There are a few things we can define here. For starters the required field is the action which defines the class. If no method is defined (@method), the name of the array is used.
The parameter accepts an array with parameters for this method.
If the label is defined this will be used as the name of this pageset in the adminpanel. If label is not defined the name of the array is used.

### Customizing pagesets
To customize how a pageset renders we can also customize the view that would be used.

To create a view for this specific module, we create views/front/modules/pageset.blade.php in this case.
The name of the view should be the same as the pageset type as defined in the chief-assets config file.
You can also put this file in a folder with the name of a page to define a view specificly for this page and pageset.

In this view we have access to the $pages and $parent variable.

### Using Pagesets
Once this setup is done we can create instances of these pagesets from the admin panel.
And following that to add them to a page, simple select them from the pagebuilder dropdown.

## Using snippets