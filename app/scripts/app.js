var Yotest = window.Yotest = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');


App.TimeRoute = Ember.Route.extend({
    model: { selectedDate: new Date('12-27-2012') }
});

