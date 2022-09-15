import { useState, useEffect } from 'react'
import { api } from './services/api'

import { GameCard } from './components/game-card'
import { CreateAdBar } from './components/create-ad-bar'

import LogoImg from './assets/nlw9-logo.svg'

interface Game {
  id:number
	title:string
	adsCount:number
	bannerUrl:string
}

export function App() {
  const [games, setGames] = useState<Game[]>([])

	useEffect(() => {
	  api
		  .get<Game[]>('/GAMES')
			.then(({ data }) => setGames(data))
			.catch(console.log)
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

			<div className="w-full flex gap-2 overflow-auto px-3 mb-16">
			  {games.map((game) => (
				  <GameCard game={game} key={game.id} />
				))}
			</div>

			<CreateAdBar />
		</main>
	)
}
