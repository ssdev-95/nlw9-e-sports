import { Ad } from '../database/models/ad'

export class GDBAIController {
	async execute(adId:string) {
  	try {
			const response = await Ad.findOne({
				attributes: ['discord'],
				where: {
					id: adId
				},
			})

  	  //const discord = response.getDataValue('discord')

			return response
	
  	} catch(err) {
  		throw err
  	}
	}
}
