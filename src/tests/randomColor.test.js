const randomColor = require('./randomColor')

const colorArray = ["red", "yellow", "blue", "green", "magenta"]
const color = colorArray[Math.floor(Math.random() * colorArray.length)]


test('random color is red, green, blue, yellow or magenta', () => {
    
    expect(randomColor()).toBe(false)
})