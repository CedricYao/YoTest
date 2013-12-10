/**
 * Created by cedric on 12/10/13.
 */
Yotest.TimeRoute = Ember.Route.extend({
    model: function() {
        return {selectedDate: moment().format('YYYY-MM-DD')};
    }
});