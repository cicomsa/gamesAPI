import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, BadRequestError} from 'routing-controllers'
import Games from './entity'
import { Validate } from 'class-validator';
import { ColorValidator } from './colorValidator';


export const color = ["red", "yellow", "blue", "green", "magenta"]

const defaultBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
  ["o", "o", "o"]
]

@JsonController()
export default class Controller {


  @Get('/games')
  async allGames() {
  const games = await Games.find()
  return { games }
  }

  @Post('/games')
  @HttpCode(201)
  
  createGame(
  @Body() game: Games
  ) {
  game.board = defaultBoard
  game.color = color[Math.floor(Math.random() * color.length)]

  return game.save()
  }

  @Put('/games/:id')
  async updateGameBoard(
  @Param('id') id: number,
  @Body() update: Partial<Games>
  ) {
  const game = await Games.findOne(id)
  if (!game) throw new NotFoundError('Cannot find game')

  const newBoard : string[] = []
  const oldBoard : string[] = []
  

  const stringBoard = JSON.stringify(game.board)
  const splitedBoard = stringBoard.split("")
  const arrayBoard = splitedBoard.filter(o => o !== "'" && o !== '"' && o !== "[" && o !== "]" && o !== ",")
  const arrayToOldBoard = splitedBoard.filter(o => o !== "'" && o !== '"' && o !== "[" && o !== "]" && o !== ",")
 
  while(arrayToOldBoard.length) oldBoard.push(arrayToOldBoard.splice(0,3))
  console.log(arrayBoard)
  const index = Math.floor((Math.random() * arrayBoard.length-1) + 1)
  arrayBoard.splice(index, 1, update.board)
  while(arrayBoard.length) newBoard.push(arrayBoard.splice(0,3))
  
  console.log(newBoard)
  console.log(oldBoard)
  
  if (update.board) game.board = newBoard
  if (update.name) game.name=update.name

  game.color = color[Math.floor(Math.random() * color.length)]
  if (update.color) game.color=update.color
  if (game.color !== "red" && game.color!== "green" && game.color!== "yellow" && game.color!== "magenta" && game.color!== "blue") 
  throw new BadRequestError('Color: "red", "blue", "green", "yellow" or "magenta" only!')

  return game.save()
  }
}





