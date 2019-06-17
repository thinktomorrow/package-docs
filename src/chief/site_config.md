# Site Management

## Menus

Chief allows you to define multiple menus and manage them seperatly.

### Creating a menu

To add a menu to chief we define one in the chief config file.

```php
# Config\chief.php

'menus' => [
        'main' => [
            'label' => 'Main navigation',
            'view'  => 'front.menus.main'
        ],
        'footer' => [
            'label' => 'Footer navigation',
            'view'  => 'front.menus.footer'
        ]
    ],
```

Define the name of the menu and a label and the corresponding view file.

### Using the menu

To start using the menus you have defined you can use the following handler to define where to render the menu.

```php
{!! chiefmenu('main')->render() !!}
```
Next to access the menu in the defined view file.

```php
@foreach(\Thinktomorrow\Chief\Menu\ChiefMenu::fromMenuItems('main')->items() as $item)
    <li><a href="{{ $item->url }}">{{ $item->label }}</a></li>
@endforeach
```
On the menu items you have access to the url and label of the item.

To find out if the current item has any sub items associated with it use the haschildren check.
And then loop over the children to get each child. Deeper levels may be available depending on how your menu is set up.

```php
@if($item->hasChildren())
    @foreach($item->children() as $child)
        <a href="{{ $child->url }}" class="block text-secondary small-caps">{{ $child->label }}</a>
    @endforeach
@endif
```

### Creating menu items

Now you can go ahead and use the admin panel to manage the menu items for the menus you have defined and set up.

## Static Texts


## Roles and Permissions

Setting up roles and permissions we recommend creating a migration to create/link the required roles and permissions.
An example what this migration could look like it the following:

```php
public function up()
    {
        $permissions = [
            'view-form',
            'delete-form'
        ];

        foreach($permissions as $permissionName)
        {
            Artisan::call('chief:permission', ['name' => $permissionName]);
        }

        DB::table('role_has_permissions')->truncate();

        $this->roles()->each(function ($defaultPermissions, $roleName) {
            Artisan::call('chief:role', ['name' => $roleName, '--permissions' => implode(',', $defaultPermissions)]);
        });
    }

    public function roles(): Collection
    {
        return collect([

            // full access, even to application logic stuff
            'developer' => ['role', 'user', 'page', 'disable-user', 'update-you', 'squanto', 'view-audit', 'update-setting', 'view-form', 'delete-form'],

            // Manages everything, including users
            'admin' => ['view-page', 'update-page', 'delete-page', 'update-you', 'view-squanto', 'update-squanto', 'view-form'],

            // Writes and edits content
            'author' => ['view-page', 'update-page', 'update-you', 'view-squanto', 'update-squanto', 'view-form'],
        ]);
    }
```
