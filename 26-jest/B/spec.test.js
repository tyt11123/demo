describe('Test blocks', () => {
    test('I am in the test block 1', () => {
        console.log('I am in the test block 1');
    });
    test('I am in the test block 2', () => {
        console.log('I am in the test block 2');
    });
    test('I am in the test block 3', () => {
        console.log('I am in the test block 3');
    });
    test('I am in the test block 4', () => {
        console.log('I am in the test block 4');
    });
    test('I am in the test block 5 but I fail', () => {
        console.log('I am in the test block 5 but I fail');
        throw new Error();
    });
});