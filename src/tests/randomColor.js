const colorArray = ["red", "yellow", "blue", "green", "magenta"]
const color = colorArray[Math.floor(Math.random() * colorArray.length)] 
const randomColor = () => color !== "red" && color !== "green" && color!== "yellow" && color!== "magenta" && color!== "blue"

module.exports = randomColor