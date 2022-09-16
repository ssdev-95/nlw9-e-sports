import { StatusBar } from 'react-native'

import {
  useFonts,
  Inter_400Regular as Regular,
  Inter_600SemiBold as Medium,
  Inter_700Bold as Bold,
  Inter_900Black as Black,
} from '@expo-google-fonts/inter'

import { Routes } from './src/routes'
import { Background } from './src/components/background'
import { Loader } from './src/components/loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular,
    Medium,
    Bold,
    Black,
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loader />}
    </Background>
  )
}
