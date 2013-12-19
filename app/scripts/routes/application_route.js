Yotest.ApplicationRoute = Ember.Route.extend({
});


Yotest.TestRoute = Ember.Route.extend({
   model: function() {return this.store.find('task');}
});