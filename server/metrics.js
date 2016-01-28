/* global MetricsRegistry */

// where should I put this?
const MetricType = {
  COUNTER: 0,
  GUAGE: 1,
  TIMER: 2
};

class Metrics {
  constructor(options) {
    this._options = options;
    this._registry = new MetricsRegistry();
  }

  push(name, increment) {
    var metric = this._registry.register(name, MetricType.COUNTER);
    metric.update(increment);
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

var metrics = new Metrics();
