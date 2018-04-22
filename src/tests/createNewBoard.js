const boardInArray = ['board','o','o','o','o','o','o','o','o']
const newBoard = []
const createNewBoard = () => {
    while(boardInArray.length) {
        newBoard.push(boardInArray.splice(0,3))  
       }
        return newBoard
   }
module.exports = createNewBoard
   