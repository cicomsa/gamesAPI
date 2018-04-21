const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]]
  
const result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])

let spliced = result.splice(3,1,"board")
  //console.log(result)

export let newArr = [];
while(result.length) newArr.push(result.splice(0,3));

console.log(newArr)

