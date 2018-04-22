const createWholeArray = require('./createWholeArray')

const result = ['o','o','o','o','o','o','o','o','o']

test('adds 1 + 2 to equal 3', () => {
    expect(createWholeArray()).toEqual(result);
  });