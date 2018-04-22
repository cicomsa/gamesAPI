
// let defaultBoard = [
//     ["o", "o", "o"],
//     ["o", "o", "o"],
//     ["o", "o", "o"]]

// let result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])
// console.log(result)
// let index = Math.floor((Math.random() * result.length-1) + 1)
// result.splice(index,1,"board")
// console.log(result)

// defaultBoard = [];

// while(result.length) defaultBoard.push(result.splice(0,3));
// console.log(defaultBoard)

//PUT version
// const defaultBoard : string[][] =  [
//   ["o", "o", "o"],
//   ["o", "o", "o"],
//   ["o", "o", "o"]
// ]
// let newArr : string[] = [];

// const result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])
// const index = Math.floor((Math.random() * result.length-1) + 1)
// result.splice(index,1,"board")

// //result.length error 
// while(result.length) newArr.push(result.splice(0,3))
// console.log(typeof result.length)

// const stringifiedNewArray = JSON.stringify(newArr)
// const jsonNewArray = JSON.parse(stringifiedNewArray)

// game.board = jsonNewArray

