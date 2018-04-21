import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, Patch} from 'routing-controllers'
import Games from './entity'


export const color = ["red", "yellow", "blue", "green", "magenta"]
const defaultBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
  ["o", "o", "o"]
]

let stringifiedBoard = JSON.stringify(defaultBoard)
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

  const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
  ]
  
  const result = defaultBoard.reduce((r, e) => (r.push(...e), r), [])

  const index = Math.floor((Math.random() * result.length-1) + 1)
  result.splice(index,1,"board")
    //console.log(result)

  let newArr : string[] = [];
  while(result.length) newArr.push(result.splice(0,3));

  

  const stringifiedNewArray = JSON.stringify(newArr)
  const jsonNewArray = JSON.parse(stringifiedNewArray)

  game.board = jsonNewArray

    console.log( result)

  return Games.merge(game, update).save()
  }
 
}



