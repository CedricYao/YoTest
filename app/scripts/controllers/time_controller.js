/**
 * Created by cedric on 12/17/13.
 */


Yotest.TimeController = Ember.Controller.extend({
    init: function() {
            this.set('selectedDate', moment().format('YYYY-MM-DD'));
            this.set('isSowHidden', true);
    },

    actions: {
        company_selected: function(){
            var selectedCompany = $('#company').val();
            if(selectedCompany == 0)
            {
                this.set('isSowHidden', true);
                this.set('model.tasks', []);
                return;
            }
            this.set('selectedValue', selectedCompany);
            this.set('isSowHidden', false);
            this.set('model.tasks', this.store.find('sow'));
        }
    }
});