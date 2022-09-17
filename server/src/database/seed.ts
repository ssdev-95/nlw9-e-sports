import { Request, Response } from 'express'
import { sequelize } from '../database/sequelize'
import { Game } from '../database/models/game'

import { GAMES } from '../../games'

export class Seeder {
	async up (_req:Request, res:Response) {
  	try {
  		await sequelize.authenticate()

			GAMES.forEach(async (igame) => {
				const newGame = Game.build(igame)

				await newGame.save({
  				validate: true
				})
			})

  	  return res.end('Successfully.initiated and seeded')
  	} catch(err) {
  		console.log('Failed to connect to database..')

			console.log(err)

  		return res.status(500).end('Failed to initialize database and seed initial data ...')
  	}
	}

	async down () {
		await sequelize.drop()
	}
}
