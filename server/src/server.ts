import 'reflect-metadata'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'

import { AppDataSource } from './database/data-source'
import { Game } from './database/entity/Game'
//import { Ad } from './database/entity/Ad'

//const gamesRepo = AppDataSource.getRepository(Game)
//const AddsRepo = AppDataSource.getRepository(Ad)
const PORT = process.env.PORT || 9999

const app = express()
app.use(express.json())
app.use(cors({
	origin: process.env.NODe_ENV === 'development' ? '*' : 'https://kol.com br'
}))

//TODO: Get all games
app.get('/games', async (req:Request, res:Response) => {
	const games = await AppDataSource.manager.find(Game,{
		select: {
			id:true,
			title:true,
			bannerUrl:true
		}
	}).catch(console.log)

	console.log(games)

	res.status(200).json(games)
})

//TODO: Get all adds based on gameId -> findUnique
//TODO: Format weekDays to an array
app.get('/games/:id/ads', (req: Request, res: Response) => {
	//const gameId = req.params.id
  const adds = [{ id: 1, name: 'lol' }]

  return res.json(adds)
})

//TODO: Get an ad and select only discord field
app.get('/ads/:id/discord', (req: Request, res: Response) => {
	//const adId = req.params.id
	res.send([])
})

//TODO: Create and ad using gameId
app.post('/games/:id/ads', (req: Request, res: Response) => {
	//const gameId = req.params.id
	//const body = req.body

	res.status(201).json({})
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
