import { Request, Response } from 'express'

import { GAGController } from '../controllers/get-all-games'

export class GAGUseCase {
	async handle (_req:Request, res:Response) {
		const controller = new GAGController()

		const games = await controller.execute()

		return res.json(games)
	}
}
