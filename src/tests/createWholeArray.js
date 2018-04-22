const defaultBoard = 
[["o", "o", "o"],
["o", "o", "o"],
["o", "o", "o"]]

const result = () => defaultBoard.reduce((r, e) => (r.push(...e), r), [])

module.exports = result