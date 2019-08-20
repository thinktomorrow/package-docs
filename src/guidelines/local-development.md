# Local development

One of the things we regularly need to do when developing our own packages is link the package to an existing project to see if it works in a real project.

A shortcut for this is putting the following command as an alias in your ~/.zshrc file. (credit to [Caleb Porzio](https://calebporzio.com/bash-alias-composer-link-use-local-folders-as-composer-dependancies/) and [Johannes Pichler](https://johannespichler.com/add-composer-link-command/))
```bash
composer-link() {
  repositoryName=${3:-local}

  composer config repositories.$repositoryName '{"type": "path", "url": "'$1'", "options": {"symlink": true}}' --file composer.json
  composer require $2 @dev
}
```

This command is used like this:
```bash
composer-link /path/to/chief vendor/package
```