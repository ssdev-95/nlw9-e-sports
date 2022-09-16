import { Image, ImageProps } from 'react-native'
import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'

type Props = Omit<ImageProps, 'source'>

export function Logo(props:Props) {
  return (
	  <Image
		  source={logoImg}
			style={styles.logo}
			{...props}
		/>
	)
}
