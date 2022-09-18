import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { GameCard } from '../../components/game-card'
import { Logo } from '../../components/logo'
import { Loader } from '../../components/loading'
import { Heading } from '../../components/heading'
import { Background } from '../../components/background'

import { api } from '../../services/api'
import { styles } from './styles'

interface Game extends DuoFinder.Game {
  adsCount: number
}

export function Home({ navigation }:any) {
  const [games, setGames] = useState<Game[]>([])
	const [isLoadingContent, setIsLoadingContent] = useState(true)

	function handleGoToGameScreen(game: DuoFinder.Game) {
		navigation.navigate('game', game)
	}

  useEffect(() => {
	  console.log('Renderizou a homescreen :D')
    api
		  .get<Game[]>('/games')
			.then((res) => setGames(res.data))
			.catch(console.log)
			.finally(() => setIsLoadingContent(false))
  }, [])

	if(isLoadingContent) {
	  return (
		  <Background style={styles.container}>
			  <SafeAreaView style={styles.container}>
				  <Loader />
				</SafeAreaView>
			</Background>
		)
	}

  return (
	  <Background>
      <SafeAreaView style={styles.container}>
  			<Logo />

  			<Heading
			    title="Your duo is here!"
					subtitle="Select the game you wanna play.."
	  		/>

  			<FlatList
			    horizontal
			  	data={games}
					renderItem={({ item }) => {
						const { id, title, bannerUrl } = item
						return (
  	  				<GameCard
								game={item}
								onPress={() => {
							    handleGoToGameScreen({
	  			  				id, title, bannerUrl
		  						})
			  				}}
			  			/>
						)
					}}
				  keyExtractor={(game) => game.id}
			  	showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.contentList}
		  	/>
      </SafeAreaView>
		</Background>
  )
}
