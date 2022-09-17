import { Request, Response } from 'express'
import { GDBAIController } from'../controllers/get-discord-by-ad-id'

export class GDBAIUseCase {
	async handle (req:Request, res:Response) {
  	try {
			const adId = req.params.id
			const controller = new GDBAIController()

			const discord = await controller.execute(adId)

  	  return res.json(discord)
  	} catch(err) {
			throw err
  	}
	}
}
