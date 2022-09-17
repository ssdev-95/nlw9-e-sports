import { Game } from '../database/models/game'
import { Ad } from '../database/models/ad'

export class GAGController {
	async execute () {
		try {
			const response = await Game.findAll({
				attributes: ['id','title','bannerUrl'],
				include: [Ad]
			})

			const games = response.map((game) => ({
				id: game.id,
				title: game.title,
				bannerUrl: game.bannerUrl,
				adsCount: game['ads'].length
			}))

			return games
		} catch(err) {
			throw err
		}
	}
}
