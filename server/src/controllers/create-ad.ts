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
			const entry = Ad.build({
				...ad,
				weekDays: ad.weekDays.join(',')
			})

			const newAd = await entry.save()
  	  return newAd
  	} catch(err) {
  		throw err
  	}
	}
}
