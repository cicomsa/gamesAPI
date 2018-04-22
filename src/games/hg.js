
let defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]]

// let result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])
// console.log(result)
// let index = Math.floor((Math.random() * result.length-1) + 1)
// result.splice(index,1,"board")
// console.log(result)

// defaultBoard = [];

// while(result.length) defaultBoard.push(result.splice(0,3));
// console.log(defaultBoard)


let stringifiedBoard = JSON.stringify(defaultBoard)
console.log(stringifiedBoard)
let split = stringifiedBoard.split("[[],")
console.log(split)