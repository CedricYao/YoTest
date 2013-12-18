/**
 * Created by cedric on 12/17/13.
 */
Yotest.TestController = Ember.Controller.extend({
    init: function() {
        this.set('name', localStorage.appName);
    },

    saveName: function(value){
        localStorage.appName = value;
    }
});