Package.describe({
  name: 'xinranxiao:metrics',
  version: '0.0.1',
  summary: 'Simple metrics API for meteor.',
  git: 'https://github.com/xinranxiao/metrics.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'aldeed:collection2',
    'ecmascript'
  ]);
  api.addFiles([
    'server/counter.js',
    'server/registry.js',
    'server/metrics.js'
  ], 'server');
  api.addFiles([
    'common/collections/metrics.js'
  ], ['client', 'server']);

  api.export('Metrics', 'server');
});
