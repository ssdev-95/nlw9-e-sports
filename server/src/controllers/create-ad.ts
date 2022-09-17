import { Ad } from '../database/models/ad'

export interface IAd {
	name:string
	discord:string
	yearsOfPlaying:number
	weekDays:number[]
	hourStart:string
	hourEnd:string
	useVoiceChannel:boolean
	gameId:string
}

export class CAController {
	async execute (ad: IAd) {
  	try {
			const newAd = await Ad.create({
				...ad,
				weekDays: ad.weekDays.join(',')
			}, { validate: true })

  	  return newAd
  	} catch(err) {
  		throw err
  	}
	}
}
