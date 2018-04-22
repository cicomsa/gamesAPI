import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, Patch} from 'routing-controllers'
import Games from './entity'
import { IsJSON } from 'class-validator';


export const color = ["red", "yellow", "blue", "green", "magenta"]
const defaultBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
  ["o", "o", "o"]
]

let stringifiedBoard = JSON.stringify(defaultBoard)
console.log(stringifiedBoard)
let jsonBoard = JSON.parse(stringifiedBoard)

@JsonController()
export default class Controller {


  @Get('/games')
  async allPages() {
  const games = await Games.find()
  return { games }
  }

  @Post('/games')
  @HttpCode(201)
  createGame(
  @Body() game: Games
  ) {
  game.board = jsonBoard
  game.color = color[Math.floor(Math.random() * color.length)]
  console.log(typeof game.board)
  return game.save()
  }

  @Put('/games/:id')
  async updateGame(
  @Param('id') id: number,
  @Body() toUpdate: Partial<Games>
  ) {
  const newGame = await Games.findOne(id)
  if (!newGame) throw new NotFoundError('Cannot find game')
  newGame.color = color[Math.floor(Math.random() * color.length)]

    const stringGame = JSON.stringify(newGame.board)
    let split = stringGame.split("")
    //console.log(split)
    let result = split.filter(function(a){return a !== '[' && a!==']' && a!=='"' && a!==',' && a!=="'"  && a!=="\"" && a!=="\\")
   
    console.log(result)
    console.log(result.length)
    const index = Number(Math.floor((Math.random() * result.length-1) + 1))
    result.splice(index,1,JSON.stringify(toUpdate.board))
    //console.log(result)
    let newArr = []
    while(result.length) newArr.push(result.splice(0,3))
    //console.log(newArr)
    const stringifiedNewArray = JSON.stringify(newArr)
    //console.log(stringifiedNewArray)
   //console.log(result)

    let parsedBoard=JSON.parse(stringifiedNewArray)
    newGame.board=parsedBoard

  return newGame.save()
  }
 
}



