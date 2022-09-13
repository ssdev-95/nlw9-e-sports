import React from 'react'
import { ImageBackground } from 'react-native'
import { styles } from './styles'

import galaxyBackground from '../../assets/background-galaxy.png'

interface BGProps {
  children: React.ReactNode
}

export function Background({ children }: BGProps) {
  return (
	  <ImageBackground
		  source={galaxyBackground}
			defaultSource={galaxyBackground}
			style={styles.container}
		>
		  { children }
		</ImageBackground>
	)
}
