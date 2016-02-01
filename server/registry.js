/* exported MetricsRegistry */
/* global MetricType Counter MetricsCollection */

MetricsRegistry = class MetricsRegistry {
  constructor() {
    // Initialize.
    this._metricsCache = this._initCache();
    this.cacheSize = 100; // TODO make this configurable
  }

  _initCache() {
    let cache = [];
    for (let type in MetricType) {
      if (!MetricType.hasOwnProperty(type)) {
        continue;
      }

      cache[MetricType[type]] = [];
    }
    return cache;
  }

  registerMetric(name, type) {
    let metric = null;
    switch (type) {
      case MetricType.COUNTER:
        metric = new Counter(name);
        break;
      default:
        // TODO log this?
        return null;
    }

    // Save this in the DB.
    metric.create();

    // Save this metric in the cache.
    if (this._metricsCache.length < this.cacheSize) {
      this._metricsCache[type].push(metric);
    }

    return metric;
  }

  getMetric(name, type) {
    // Get from cache first.
    let metric = this._metricsCache[type].find(
      x => x.name === name
    );

    // Get from db next if cache was no luck.
    if (!metric) {
      metric = MetricsCollection.findOne({ name: name });
      switch (type) {
        case MetricType.COUNTER:
          metric = Counter.fromDatabaseEntry(metric);
          break;
        default:
          break;
      }
    }

    return metric;
  }

  getOrRegisterMetric(name, type) {
    var metric = this.getMetric(name, type);
    if (metric) {
      return metric;
    }

    return this.registerMetric(name, type);
  }
}
