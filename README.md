A Modular JavaScript Plugin Boilerplate for WordPress
=====================================================

## Important Note
> *Gregory Cornelius pointed out an issue with how this is set up at present, so if you use this technique on a page where Backbone or another AMD-compatible script is available on the page, things will break. This is due to a conflict with Require's global `define` function.*
>
> *We're working on a fix, and I'll post an article explaining how to use this once we think it's a truly stable foundation! <strong>In the mean time, please try this out to learn about AMD;</strong> but I recommend to <strong>check back for updates</strong> before using this model in a live site :)*

## What & Why?

If JavaScript is a "first-class citizen" in your plugin, you may have a lot of it. If you have a lot of JavaScript, you should probably be modularizing your code and splitting those modules up into files to aid development.

[Require.js](http://requirejs.org) is a popular tool for authoring JavaScript in the AMD format ("Asynchronous Module Definition"). AMD is great, but it can be daunting to get up and running with all the configuration needed to take advantage of require—*especially* if you're going to be doing so within a WordPress theme or plugin! This boilerplate is an attempt to provide an example of a basic AMD setup, with all of that WordPress-specific configuration provided.

## A Note on File Structure

There are only a few modules defined in this repository, so that you don't have to delete too much of my code before you can write your own. Consult the [recommended directory structure](http://requirejs.org/docs/api.html#jsfiles) from the Require.js website for more thorough best-practices around code organization.

## Other Resources

This is a sampling of other AMD or Modular JS resources I've found through some cursory Googling. **If you find other resources, please let me know on twitter or by opening an issue (see below):** for Require in particular I know there are other great resources out there, but I need help rounding them up!

* [Writing Modular JavaScript](http://addyosmani.com/writing-modular-js/), by Addy Osmani
* [Using RequireJS In WordPress](http://kaidez.com/requirejs-wordpress/), by Kai Gittens
* [Understanding Require.js](http://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/), on SitePoint
* [Require.js API documentation](http://requirejs.org/docs/api.html)


## Acknowledgements

This repository was created with guidance and resources from the following kind people:

* [Mike Pennisi](https://github.com/jugglinmike)
* [Tim Branyen](https://github.com/tbranyen)
* [Mika "Ipstenu" Epstein](http://ipstenu.org/)
* [Kai Gittens](http://kaidez.com)
* [James Burke](http://requirejs.org/)

## Issues

This is a work in progress, so if you find yourself struggling to make use of the structures demonstrated here, or (worse!) something isn't working as advertised, open an [issue](https://github.com/kadamwhite/js-plugin-boilerplate/issues) to let me know and we can talk through it!
