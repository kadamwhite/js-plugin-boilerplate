A Modular JavaScript Plugin Boilerplate for WordPress
=====================================================

If JavaScript is a "first-class citizen" in your plugin, you may have a lot of it. If you have a lot of JavaScript, you should probably be modularizing your code and splitting those modules up into files to aid development.

[Require.js](http://requirejs.org) is a popular tool for authoring JavaScript in the AMD format ("Asynchronous Module Definition"). AMD is great, but it can be daunting to get up and running with all the configuration needed to take advantage of require—*especially* if you're going to be doing so within a WordPress theme or plugin! This boilerplate is an attempt to provide an example of a basic AMD setup, with all of that WordPress-specific configuration provided.

## A Note on File Structure

There are only a few modules defined in this repository, so that you don't have to delete too much of my code before you can write your own. Consult the [recommended directory structure](http://requirejs.org/docs/api.html#jsfiles) from the Require.js website for more thorough best-practices around code organization.

## Acknowledgements

This repository was created with guidance and resources from the following kind people:

* [Mike Pennisi](https://github.com/jugglinmike)
* [Tim Branyen](https://github.com/tbranyen)
* [Mika "Ipstenu" Epstein](http://ipstenu.org/)
* [Kai Gittens](http://kaidez.com)
* [James Burke](http://requirejs.org/)

## Issues

This is a work in progress, so if you find yourself struggling to make use of the structures demonstrated here, or (worse!) something isn't working as advertised, open an [issue](https://github.com/kadamwhite/js-plugin-boilerplate/issues) to let me know and we can talk through it!
