import "reflect-metadata"
import { DataSource } from "typeorm"

import { Game } from './entity/Game'
import { Ad } from './entity/Ad'

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "admin",
	database: "duofinder",
	synchronize: true,
	logging: process.env.NODE_ENV !== 'production',
	entities: [Ad, Game],
	migrations: [__dirname + '/migration/*.{js,ts}'],
	subscribers: [__dirname + '/migration/*.{js,ts}'],
	migrationsRun: true,
	bigNumberStrings: true,
})
