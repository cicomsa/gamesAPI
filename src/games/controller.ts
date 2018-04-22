import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, Patch} from 'routing-controllers'
import Games from './entity'
import { IsJSON } from 'class-validator';


export const color = ["red", "yellow", "blue", "green", "magenta"]

const defaultBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
  ["o", "o", "o"]
]

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
  game.board = defaultBoard
  game.color = color[Math.floor(Math.random() * color.length)]

  return game.save()
  }


  // @Put('/games/:id')
  // async updateGameColor(
  // @Param('id') id: number,
  // @Body() update: Partial<Games>
  // ) {
  // const game = await Games.findOne(id)
  // if (!game) throw new NotFoundError('Cannot find game')
  // return Games.merge(game,update).save()
  // }




  @Put('/games/:id')
  async updateGameBoard(
  @Param('id') id: number,
  @Body() update: Partial<Games>
  ) {
  const game = await Games.findOne(id)
  if (!game) throw new NotFoundError('Cannot find game')

  game.color = color[Math.floor(Math.random() * color.length)]
   
  const newArr : string[] = []
  const board = JSON.stringify(game.board)
  const splitedBoard = board.split("")
  const stringBoard = splitedBoard.filter(o => o !== "'" && o !== '"' && o !== "[" && o !== "]" && o !== ",")
  const index = Math.floor((Math.random() * stringBoard.length-1) + 1)
  stringBoard.splice(index, 1, update.board)
  while(stringBoard.length) newArr.push(stringBoard.splice(0,3))
  game.board = newArr

  return game.save()
  }
 
}





