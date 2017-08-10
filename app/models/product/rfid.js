import DS from 'ember-data';

export default DS.Model.extend({
  tag: DS.attr('string'),
  product: DS.belongsTo('product')
});
