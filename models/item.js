Auction.Item = DS.Model.extend({
  itemName: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  price: DS.attr(),
  story: DS.attr(),
  image: DS.attr(),
  year: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
