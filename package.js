Package.describe({
  name: 'systemlevel:standard-minifier-js',
  version: '2.3.10',
  summary: 'Standard javascript minifiers updated for mapbox-gl fix used with Meteor apps.',
  github: 'https://github.com/systemlevel/systemlevel-standard-minifier-js',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: "minifyStdJS",
  use: [
    'minifier-js@2.3.5',
    'babel-compiler@7.1.1',
    'ecmascript@0.11.1'
  ],
  sources: [
    'plugin/minify-js.js',
    'plugin/stats.js',
    'plugin/visitor.js',
    'plugin/utils.js',
  ],
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
