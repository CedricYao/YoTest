/**
 * Created by cedric on 12/10/13.
 */

Yotest.TimeRoute = Ember.Route.extend({

    model: function() {
        return {
            companies: this.store.find('company'),
            tasks: []
        }
    }
});
