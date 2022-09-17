import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'mysql',
	database: 'duofinder',
	port: 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD
})

try {
	sequelize
	  .authenticate()
		.then(() => {
			console.log('Database connection estabilished..')
		})
} catch(err) {
	console.log('Failed to connect to database..')
	console.log(err)
} /*finally {
	console.log('Database connection closed..')
	sequelize.close()
}*/
