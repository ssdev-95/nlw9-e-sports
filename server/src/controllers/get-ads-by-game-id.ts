import { Ad } from '../database/models/ad'

export class GABGIController {
	async execute (gameId:string) {
  	try {
			const response = await Ad.findAll({
				attributes: [
					'id',
					'name',
					'yearsOfPlaying',
					'weekDays',
					'hourStart',
					'hourEnd',
					'useVoiceChannel'
				],
				where: {
					gameId
				},
				order: [
					['createdAt', 'DESC']
				]
			})

  	  const ads = response
			  .map((ad) => ({
					...ad.get(),
					weekDays: ad.getDataValue('weekDays').split(',').map(Number)
				}))

			return ads
	
  	} catch(err) {
  		throw err
  	}
	}
}
