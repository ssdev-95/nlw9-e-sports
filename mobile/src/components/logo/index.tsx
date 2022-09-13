import { Image } from 'react-native'
import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'

export function Logo() {
  return <Image source={logoImg} style={styles.logo} />
}
