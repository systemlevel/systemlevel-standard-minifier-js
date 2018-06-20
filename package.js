Package.describe({
  name: 'systemlevel:standard-minifier-js',
  version: '2.3.4',
  summary: 'Standard javascript minifiers used with Meteor apps updated for mapbox-gl fix.',
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
