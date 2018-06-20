# standard-minifier-js
[Source code of released version](https://github.com/meteor/meteor/tree/master/packages/standard-minifier-js) | [Source code of development version](https://github.com/meteor/meteor/tree/devel/packages/standard-minifier-js)
***

Standard Minifier for JS
===

This package provides a minifier plugin used for Meteor apps by default but with a fix for mapbox-gl which errors out when minified with the standard library.

The JS minifier uses UglifyJS2. The options include name-mangling and other
commonly used options.