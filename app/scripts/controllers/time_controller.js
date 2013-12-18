/**
 * Created by cedric on 12/17/13.
 */


Yotest.TimeController = Ember.Controller.extend({
    init: function() {
        this.set('selectedDate', moment().format('YYYY-MM-DD'));
    },

    actions: {
        doSomething: function(){
            this.set('selectedValue', $('#company').val() );
        }
    }
});