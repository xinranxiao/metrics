// where should I put this?
MetricType = {
  COUNTER: 0
};

class MetricsWrapper {
  constructor(options) {
    this._options = options;
    this._registry = new MetricsRegistry();
  }

  push(name, increment) {
    var metric = this._registry.getOrRegisterMetric(name, MetricType.COUNTER);
    if (metric) {
      metric.update(increment);
    }
  }
}

Metrics = new MetricsWrapper();
