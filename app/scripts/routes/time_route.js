/**
 * Created by cedric on 12/10/13.
 */

Yotest.TimeRoute = Ember.Route.extend({

    model: function() {
        return {
            selectedDate: moment().format('YYYY-MM-DD'),
            tasks: [
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
                }]
        };

    }
});