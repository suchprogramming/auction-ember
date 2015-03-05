Auction.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: ':lot_id'}, function() {
    this.resource('new-lot-item');
    this.resource('show-item', {path:':item_id'});
  });
  this.resource('new-lot');
});
