/* exported Counter */
/* global MetricType MetricsCollection */

Counter = class Counter {
  constructor(name) {
    this.name = name;
    this.entries = []; // TODO when getting this from db, we should limit how many to return.
  }

  get(start, end) {
    if (!start && !end) {
      // Return everything.
      return this.entries;
    }

    // TODO only return subset.
    return null;
  }

  create() {
    // Don't write if id already exists.
    if (this.id) {
      return;
    }

    this.id = MetricsCollection.insert({
      name: this.name,
      type: MetricType.COUNTER.toString()
    });
  }

  update(value) {
    let entry = {
      value: value,
      createdAt: new Date()
    };

    MetricsCollection.update(this.id, {
      $push: {
        entries: entry
      }
    });

    this.entries.push(entry);
  }

  static fromDatabaseEntry(rawMetric) {
    if (!rawMetric) {
      return null;
    }

    let counter = new Counter(rawMetric.name);
    counter.id = rawMetric.id;
    counter.entries = rawMetric.entries;

    return counter;
  }
}