const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]]
  
let result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])
console.log(result)
let index = Math.floor((Math.random() * result.length-1) + 1)
let spliced = result.splice(index,1,"board")
  

let newArr = [];
while(result.length) newArr.push(result.splice(0,3));

//console.log(newArr)

