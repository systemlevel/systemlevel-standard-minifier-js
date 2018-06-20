Package.describe({
  name: 'systemlevel:standard-minifier-js',
<<<<<<< Updated upstream
  version: '2.3.4',
  summary: 'Standard javascript minifiers used with Meteor apps updated for mapbox-gl fix.',
=======
  version: '2.3.7',
  summary: 'Standard javascript minifiers updated for mapbox-gl fix used with Meteor apps.',
  github: 'https://github.com/systemlevel/systemlevel-standard-minifier-js',
>>>>>>> Stashed changes
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: "minifyStdJS",
  use: [
    'minifier-js',
    'babel-compiler',
    'ecmascript'
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
