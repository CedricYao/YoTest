/**
 * Created by cedric on 12/19/13.
 */

Yotest.Company = DS.Model.extend({
    name: DS.attr()
});

Yotest.Company.FIXTURES = [
    {
        id: 1,
        name: '- Company'
    },
    {
        id: 2,
        name: 'Udell'
    },
    {
        id: 3,
        name: 'CUC'
    }];