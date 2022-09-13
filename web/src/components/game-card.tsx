import { games } from '../games'

type Game = typeof games[0]

interface CardProps {
  game:Game
}

export function GameCard({ game }:CardProps) {
  return (
	  <div
		  className="flex-none relative rounded-lg overflow-hidden"
			key={game.id}
		>
		  <img src={game.thumb} alt={game.name} />

			<div className="w-full px-2 pt-3 pb-2 absolute bottom-0 left-0 right-0 bg-game-gradient">
			  <p className="block font-bold text-md lg:text-lg">{game.name}</p>
				<span className="block text-zincon-500">4 adds</span>
			</div>
		</div>
	)
}
