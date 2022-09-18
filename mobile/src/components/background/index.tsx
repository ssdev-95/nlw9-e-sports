import React from 'react'

import {
  ImageBackground, ImageBackgroundProps
} from 'react-native'

import galaxyBackground from '../../assets/background-galaxy.png'
import { styles } from './styles'

interface BGProps extends Omit<ImageBackgroundProps, 'source'|'defaultSource'> {}

export function Background({ children }: BGProps) {
  return (
    <ImageBackground
      source={galaxyBackground}
      defaultSource={galaxyBackground}
			style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
