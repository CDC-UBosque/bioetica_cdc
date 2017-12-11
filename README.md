# Droplet
Bootstrap child theme for Drupal.

This is a starter development theme using the [Bootstrap 3 SASS](https://github.com/twbs/bootstrap-sass) source code. To use this theme you must first download and install the [Drupal Bootstrap](https://www.drupal.org/project/bootstrap) parent theme.

Includes:
- bootstrap-sass
- font-awesome
- mediaCheck
- Gulp-based build system

## One-time Development Environment Setup
Install [NodeJS and Node Package Manager](https://nodejs.org/en/) globally.
Run the following command-line instructions inside *theme root*:
```
npm install -g gulp bower
npm install && bower install
```

## Using and Editing
Custom styles should be in `src/scss/_header.scss`, `src/scss/_content.scss` and `src/scss/_footer.scss`. If you wish, you can simply combine these files into one file, I just like organized code.

To set custom variables such as colors, fonts, etc, you may use `src/scss/_theme-variables.scss`.

To add your own Javascript code you can edit `src/js/theme.js`, this file comes with a custom behavior that will change the default Bootstrap menu behavior to display submenus onhover rather than onclick, you can keep this if you like or remove it.
At the top of this file you can add more `require` lines to include your own libraries.

Example:
```
//= require ../vendor/mediaCheck/js/mediaCheck.js
```

Development changes can be automated with command-line instruction inside *theme root*:
```
gulp watch
```
Build optimized, minified, autoprefixed assets with command-line instruction inside *theme root*:
```
gulp
```

## Other Gulp commands

- `gulp styles` - Compiles the SCSS source code.
- `gulp scripts` - Compiles the Javascript source code.
- `gulp lint` - Checks your javscript code for errors or coding standards.


## Customizing Bootstrap

To customize Bootstrap you may edit `src/scss/_bootstrap-variables.scss`.

To add or remove Bootstrap javascript component you may edit `src/js/bootstrap.js`. The default build includes all components.

## TODO
- Feature to optimize images.