import { Request, Response } from 'express'
import { GABGIController } from '../controllers/get-ads-by-game-id'

export class GABGIUseCase {
	async handle (req:Request, res:Response) {
  	try {
			const gameId = req.params.id

			const controller = new GABGIController()

			const ads = await controller.execute(gameId)

  	  return res.json(ads)
  	} catch(err) {
  	}
	}
}
