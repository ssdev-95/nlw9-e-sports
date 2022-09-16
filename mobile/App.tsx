import { StatusBar } from 'react-native'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Game } from './src/screens/game'
import { Background } from './src/components/background'
import { Loader } from './src/components/loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Game /> : <Loader />}
    </Background>
  )
}
