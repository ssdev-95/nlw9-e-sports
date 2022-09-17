import { Request, Response } from 'express'
import { CAController } from '../controllers/create-ad'

export class CAUseCase {
	async handle (req:Request, res:Response) {
  	try {
			const controller = new CAController()

			const gameId = req.params.id
			const body = req.body

			const ad = await controller.execute({
				...body,
				gameId
			})

  	  return res.json(ad)
  	} catch(err) {
  	}
	}
}
