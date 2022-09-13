import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import { api } from '../../services/api'

import { GameCard } from '../../components/game-card'
import { Logo } from '../../components/logo'
import { Heading } from '../../components/heading'

import { styles } from './styles'

interface Game {
  id: number
  name: string
  ads: number
  cover: string
}

export function Home() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    api.get<Game[]>('/GAMES').then((res) => setGames(res.data))
  }, [])

  return (
    <View style={styles.container}>
      <Logo />

      <Heading
        title="Your duo is here!"
        subtitle="Select the game you wanna play..."
      />

      <FlatList
        horizontal
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(game) => String(game.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
