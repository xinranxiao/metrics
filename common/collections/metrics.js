/* global SimpleSchema */

MetricsCollection = new Mongo.Collection('metrics');

// TODO this kinda only works for counters, will probably have to change strategy for other types.
var MetricsSchema = new SimpleSchema({
  name: { type: String, unique: true },
  type: { type: String },

  entries: { type: [Object], defaultValue: [] },
  'entries.$.createdAt': { type: Date },
  'entries.$.value': { type: Number }
});

MetricsCollection.attachSchema(MetricsSchema);
