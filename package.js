Package.describe({
  name: 'xinranxiao:metrics',
  version: '0.0.1',
  summary: 'Simple metrics API for meteor.',
  git: 'https://github.com/xinranxiao/metrics.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles([
    'server/metrics.js'
  ], 'server');
});
