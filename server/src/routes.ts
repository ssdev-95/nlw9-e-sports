import express from 'express'

import { Seeder } from './database/seed'

import { CAUseCase } from './use-cases/create-ad'

import { GABGIUseCase } from './use-cases/get-ads-by-game-id'

import { GDBAIUseCase } from './use-cases/get-discord-by-ad-id'

import { GAGUseCase } from './use-cases/get-all-games'

export const router = express.Router()

router.post('/games/seed', new Seeder().up)

router.get('/games', new GAGUseCase().handle)

router.get('/games/:id/ads', new GABGIUseCase().handle)

router.post('/games/:id/ads', new CAUseCase().handle)

router.get('/ads/:id/discord', new GDBAIUseCase().handle)
