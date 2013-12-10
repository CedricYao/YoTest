/**
 * Created by cedric on 12/9/13.
 */


Yotest.Myguys = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    administrator: DS.attr()
});

Yotest.Myguys.FIXTURES = [
    {
        id: 1,
        firstName: 'Tom',
        lastName: 'Dale'
    },
    {
        id: 2,
        firstName: 'Matthew',
        lastName: 'Lehner'
    }
];