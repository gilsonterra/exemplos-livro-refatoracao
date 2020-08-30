const index = require('./index');

test('test statement theater', () => {
    const invoice = require('./invoices.json');
    const plays = require('./plays.json');    

    expect(index.statement(invoice, plays)).toMatchSnapshot();
});