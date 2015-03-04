Auction.Item = DS.Model.extend({
  itemName: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
