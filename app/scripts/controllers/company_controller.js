/**
 * Created by cedric on 12/17/13.
 */

Yotest.CompanyController = Ember.ObjectController.extend({
   getAll: function() {
       return Yotest.Company.find();
   }
});