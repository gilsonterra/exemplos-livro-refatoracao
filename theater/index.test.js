const index = require('./index');

test('test statement TXT', () => {
    const invoice = require('./invoices.json');
    const plays = require('./plays.json');    

    expect(index.statement(invoice, plays)).toMatchSnapshot();
});

test('test statement HTML', () => {
    const invoice = require('./invoices.json');
    const plays = require('./plays.json');    

    expect(index.htmlStatement(invoice, plays)).toMatchSnapshot();
});
