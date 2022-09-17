import express from 'express'
import { Game } from './database/models/game'

export const router = express.Router()

router.get('/games', async (_req, res) => {
	const games = await Game.findAll()
	return res.status(204).json({ games })
})

router.get('/games/:id/ads', async (_req, res) => {})

router.post('/games:id/ads', async (_req, res) => {})

router.get('ads/:id/discord', async (_req, res) => {})
