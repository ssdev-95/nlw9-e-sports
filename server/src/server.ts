import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { router } from './routes'

const PORT = process.env.PORT

const server = express()

server.use(cors({
	origin: '*'
}))

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(router)

server.listen(PORT, () => {
	console.log(`Server is running at port  ${PORT}`)
})
