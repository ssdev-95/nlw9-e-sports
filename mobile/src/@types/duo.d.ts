export declare global {
	namespace DuoFinder {
		interface Game {
			id: string
			title: string
			bannerUrl: string
		}

		interface Duo {
			id:string
			name:string
			yearsOfPlaying:number
			weekDays:number[]
			hourStart:string
			hourEnd:string
			useVoiceChannel:boolean
		}
	}
}
