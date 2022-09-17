import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'mysql',
	database: 'duofinder',
	port: 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD
})
