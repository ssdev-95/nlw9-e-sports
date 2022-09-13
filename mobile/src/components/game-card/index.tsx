import {
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { THEME } from '../../theme'

interface Game {
  id: number
  name: string
  ads: number
  cover: string
}

interface CardProps extends TouchableOpacityProps {
  game: Game
}

export function GameCard({ game, ...rest }: CardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: game.cover }} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{game.name}</Text>

          <Text style={styles.ads}>{`${game.ads} ads`}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
