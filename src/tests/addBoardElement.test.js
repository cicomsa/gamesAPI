const addBoardElement = require('./addBoardElement')

const boardInArray = ['board','o','o','o','o','o','o','o','o']
const array = ['o','o','o','o','o','o','o','o','o']

test('"board" added to the array', () => {
    expect(addBoardElement()).toEqual(boardInArray);
  });
  