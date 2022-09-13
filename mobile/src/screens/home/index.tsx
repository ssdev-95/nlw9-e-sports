import { View, Text } from 'react-native'
import { Logo } from '../../components/logo'

export function Home() {
  return (
    <View>
		  <Logo />

			<Text style={{color:'#f0f2f1'}}>Welcome</Text>
		</View>
  )
}
