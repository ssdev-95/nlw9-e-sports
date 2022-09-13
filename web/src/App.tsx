import { MagnifyingGlassPlus } from 'phosphor-react'

import { games } from './games'

import { GameCard } from './components/game-card'

import LogoImg from './assets/nlw9-logo.svg'

export function App() {
  return (
	  <main className="max-w-[1344px] min-h-screen mx-auto pt-20 pb-8">
		  <img
			  className="mx-auto"
				src={LogoImg}
				alt=""
			/>

			<h1 className="font-black text-3xl text-center mt-20 mb-10">
			  Your <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> is here.
			</h1>

			<div className="w-full flex gap-2 overflow-auto px-3 mb-16">
			  {games.map((game) => (
				  <GameCard game={game} key={game.id} />
				))}
			</div>

			<div className="w-full max-w-[95vw] bg-nlw-gradient pt-1 mx-auto rounded-lg overflow-hidden">
			  <div className="w-full bg-zinc-800 flex [@media(max-width:869px)]:flex-col items-center justify-between gap-8 px-8 py-4">
				  <div>
					  <strong className="[@media(max-width:869px)]:text-center block text-xl">Didn't found your duo?</strong>
						<span className="[@media(max-width:869px)]:text-center [@media(max-width:869px)]:text-sm text-zinc-500">Publish and appointment to meet new players.</span>
					</div>

					<button className="bg-violet-500 hover:bg-violet-700 p-4 rounded-md font-bold flex items-center justify-center gap-2">
					  <MagnifyingGlassPlus size={16} />
						<span>Find duo</span>
					</button>
				</div>
			</div>
		</main>
	)
}
