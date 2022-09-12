import express, { Request, Response } from 'express'

const PORT = 3333
const app = express()

app.get('/adds', (_req:Request, res:Response) => {
	const adds = [
		{id:1, name:'lol'}
	]

	return res.json(adds)
})

app.listen(	PORT,	() => {
	console.log(`Server is running at port ${PORT}`)
})
