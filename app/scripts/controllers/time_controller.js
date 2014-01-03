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
            var selectedCompanyValue = $('#company').val();
            if(selectedCompanyValue === '0')
            {
                this.set('isSowHidden', true);
                this.set('model.sows', []);
                return;
            }
            this.set('selectedValue', selectedCompanyValue);
            this.set('isSowHidden', false);

            var selctedCompany = this.store.getById('company', selectedCompanyValue);
            this.set('model.sows', selctedCompany.get('sows'));
        }
    }
});