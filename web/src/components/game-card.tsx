interface Game {
  id:number,
	title:string,
	adsCount:number,
	bannerUrl:string
}

interface CardProps {
  game:Game
}

export function GameCard({ game }:CardProps) {
  return (
	  <div
		  className="flex-none relative rounded-lg overflow-hidden w-[180px] h-[260px]"
			key={game.id}
		>
		  <img
			  src={game.bannerUrl}
				className="object-cover w-full h-full"
				alt={game.title}
			/>

			<div className="w-full px-2 pt-3 pb-2 absolute bottom-0 left-0 right-0 bg-game-gradient">
			  <p
				  className="block font-bold text-md lg:text-lg"
				>
				  {game.title}
				</p>
				<span className="block text-zincon-500">
				  {game.adsCount} adds
				</span>
			</div>
		</div>
	)
}
