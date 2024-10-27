const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); 
})



test("One dollar should be 156.5 yens", function() {
    
    const { fromDollarToYen } = require('./app.js');


    const Yen = fromDollarToYen(1);
    expect(Yen).toBe(156.5);

})
test("One yen should be 0.87 pound", function() {
    
    const { fromYenToPound } = require('./app.js');

    
    const Pound = fromYenToPound(1);
    expect(Pound).toBe(0.87); 
});


