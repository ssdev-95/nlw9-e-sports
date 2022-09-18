import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import { Game } from '../screens/game'
import { Home } from '../screens/home'

const {
  Navigator,
	Screen
} = createNativeStackNavigator()

export function AppRoutes() {
  return (
	  <Navigator
		  initialRouteName="home"
			screenOptions={{ headerShown: false }}
		>
		  <Screen
			  name="home"
				component={Home}
			/>

			<Screen
			  name="game"
			  component={Game}
			/>
		</Navigator>
	)
}
