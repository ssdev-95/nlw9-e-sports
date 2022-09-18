import { useState, useEffect } from 'react'
import { api } from './services/api'

import { Loading } from './components/loading'
import { GameCard } from './components/game-card'
import { CreateAdBar } from './components/create-ad-bar'

import LogoImg from './assets/nlw9-logo.svg'

export interface Game {
  id:string
	title:string
	adsCount:number
	bannerUrl:string
}

export function App() {
  const [games, setGames] = useState<Game[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
	  api
		  .get<Game[]>('/games')
			.then(({ data }) => {
			  setGames(data)

				if(data && data.length) {
				  setLoading(false)
				}
			})
			.catch((error) => {
			  console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				console.log(error.request)
				console.log('Error', error.message);
			})
	}, [])

  return (
	  <main className="max-w-[1344px] min-h-screen mx-auto pt-20 pb-8">
		  <img
			  className="mx-auto"
				src={LogoImg}
				alt=""
			/>

			<h1 className="font-black text-3xl text-center mt-20 mb-10 bg-clip-text bg-nlw-gradient">
			  Your <span className="text-transparent">duo</span> is here.
			</h1>

			{loading ? (<Loading/>) : (
			<div className="w-full flex gap-2 overflow-auto px-3 mb-16">
			  {games.map((game) => (
				  <GameCard game={game} key={game.id} />
				))}
			</div>
			)}

			<CreateAdBar />
		</main>
	)
}
