import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, Patch} from 'routing-controllers'
import Games from './entity'
import {newArr} from './hg'

export const color = ["red", "yellow", "blue", "green", "magenta"]
const defaultBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
  ["o", "o", "o"]
]

let stringifiedBoard = JSON.stringify(defaultBoard)
let jsonBoard = JSON.parse(stringifiedBoard)

let stringifiedNewArray = JSON.stringify(newArr)
let jsonNewArray = JSON.parse(stringifiedNewArray)

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
  return game.save()
  }

  @Put('/games/:id')
  async updateGame(
  @Param('id') id: number,
  @Body() update: Partial<Games>
  ) {
  const game = await Games.findOne(id)
  if (!game) throw new NotFoundError('Cannot find game')

  game.color = color[Math.floor(Math.random() * color.length)]
  game.board = jsonNewArray

  return Games.merge(game, update).save()
  }
 
}



