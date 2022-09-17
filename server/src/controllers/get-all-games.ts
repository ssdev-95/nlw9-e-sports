import { Game } from '../database/models/game'

export class GAGController {
	async execute () {
		try {
			const games = await Game.findAll({
				attributes: ['id','title','bannerUrl']
			})

			return games
		} catch(err) {
			throw err
		}
	}
}
