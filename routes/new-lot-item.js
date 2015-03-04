Auction.NewLotItemRoute = Ember.Route.extend({
  model: function(params) {
    var lot = this.modelFor('lot');
    var item = this.store.createTecord('item');
    // CHECK HERE IF COMMENTS BREAKS CODE BECAUSE OF PLURALITY
    lot.get('items').then(function(items) {
      items.pushObject(item);
    });
    return item;
  }
});
