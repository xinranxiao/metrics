/* exported MetricsRegistry */
/* global MetricType */

class MetricsRegistry {
  constructor() {
    // Initialize.
    this._metricsCache = MetricsRegistry._initCache();
  }

  static _initCache() {
    // TODO maybe fill this up with some metrics initially? or just let it fill naturally...
    var cache = {};
    for (var type in MetricType) {
      if (!MetricType.hasOwnProperty(type)) {
        continue;
      }

      cache[MetricType[type]] = [];
    }
    return cache;
  }

  registerMetric(name, type) {
    // Make new entry for collection.
    // Store inside cache.
  }

  getMetric(name, type) {
    // Get from cache first.
    var metrics = this.metricsCache[type];
    for (var metric of metrics) {
      if (metric.name === name) {
        return metric;
      }
    }

    // Get from db next if cache was no luck.
    // TODO
  }

  getOrRegisterMetric(name, type) {
    var metric = this.getMetric(name, type);
    if (metric !== null) {
      return metric;
    }

    return this.registerMetric(name, type);
  }
}
