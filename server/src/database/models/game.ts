import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../sequelize'

export class Game extends Model {
	declare id: string
	title: string
	bannerUrl: string
}

Game.init({
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	bannerUrl: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, { sequelize, modelName: 'games' })

Game.sync({ alter: true }).catch(console.error)
