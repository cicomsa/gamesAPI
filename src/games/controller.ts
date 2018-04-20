import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError} from 'routing-controllers'
import Games from './entity'


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
    const color = ["red", "yellow", "blue", "green", "magenta"]
    game.color = color[Math.floor(Math.random() * color.length)]
    console.log(game.color)
    return game.save()
  }

  @Put('/games/:id')
  async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Games>
  ) {
    const game = await Games.findOne(id)
    if (!game) throw new NotFoundError('Cannot find page')

    return Games.merge(game, update).save()
  }
}
