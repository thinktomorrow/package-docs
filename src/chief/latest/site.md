## views
- model views

## Customize the view path.
- viewpath
- viewkey: file basename of the view. By default this is based on the model class name. 

You can set your own view key on the model if you need to:
```php 
// Like so the view file is expected to be custom-key.blade.php
public function viewKey(): string
{
    return 'custom-key';
}
```
