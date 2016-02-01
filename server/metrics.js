/* global MetricsRegistry */

// where should I put this?
MetricType = {
  COUNTER: Symbol()
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

  /*
  metrics.push("hello", 5);
  metrics.guage("howmanyvars", 5 (seconds), function() {
    return var.len;
  }
  var timer = metrics.timer("hello");
  timer.start();
  timer.end();
   */
}

Metrics = new MetricsWrapper();
