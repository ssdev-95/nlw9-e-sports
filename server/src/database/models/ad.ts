import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../sequelize'

export class Ad extends Model {
	declare id: string
	name: string
	discord: string
	yearsOfPlaying: number
	weekDays: string
	hourStart: string
	hourEnd: string
	useVoiceChannel: boolean
	createdAt: Date
	gameId: string
}

Ad.init({
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	discord: {
		type: DataTypes.STRING,
		allowNull: false
	},
	yearsOfPlaying: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	weekDays: {
		type: DataTypes.STRING,
		allowNull: false
	},
	hourStart: {
		type: DataTypes.STRING,
		allowNull: false
	},
	hourEnd: {
		type: DataTypes.STRING,
		allowNull: false
	},
	useVoiceChannel: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	gameId: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, { sequelize, modelName: 'ads' })

Ad.sync({ alter: true }).catch(console.error)
