// src/controller.ts
// src/pages/controller.ts
import { JsonController, Get} from 'routing-controllers'
import Games from './entity'


@JsonController()
export default class Controller {

  @Get('/games')
  async allPages() {
    const games = await Games.find()
    return { games }
  }

}