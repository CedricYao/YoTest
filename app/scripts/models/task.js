/**
 * Created by cedric on 12/10/13.
 */

Yotest.Task = DS.Model.extend({
    sow: DS.attr(),
    name: DS.attr(),
    client: DS.attr()
});

Yotest.Task.FIXTURES = [
    {
        id: 1,
    sow: 'UDELL004',
    name: 'Dec 2013 - ALERT: Large All Store Spend Processed Delta',
    client: 'Udell'
},
{
    id: 2,
        sow: 'Headspring Dallas',
    name: 'Planning',
    client: '- Company'
},
{
    id: 3,
        sow: 'UDELL004',
    name: 'Dec 2013 - BenefitsIssued Report ',
    client: 'Udell'
}
];

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