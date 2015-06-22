Package.describe({
  name: 'tluyben:python',
  version: '0.0.1',
  summary: 'Write Meteor apps in the Python language.',
  git: 'https://github.com/tluyben/Meteor-Python.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.registerBuildPlugin({
	  name: "python",
	  use: [],
	  sources: [
	    'python.js'
	  ],
	  npmDependencies: {
	    "python-js": "0.9.8",
	    "source-map": "0.4.2"
	  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tluyben:python');
  api.addFiles('python-tests.js');
});
