import {
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { THEME } from '../../theme'

interface Game extends DuoFinder.Game {
  adsCount: number
}

interface CardProps extends TouchableOpacityProps {
  game: Game
}

export function GameCard({ game, ...rest }: CardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: game.bannerUrl }} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{game.title}</Text>

          <Text style={styles.ads}>{`${game.adsCount} ads`}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
