const createNewBoard = require('./createNewBoard')

const newBoard = 
[["board", "o", "o"],
["o", "o", "o"],
["o", "o", "o"]]
const emptyBoard = []
const boardInArray = ['board','o','o','o','o','o','o','o','o']

test('new board created', () => {
    expect(createNewBoard()).toEqual(newBoard);
  });