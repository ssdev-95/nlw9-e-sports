import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import { Game } from '../screens/game'
import { Home } from '../screens/home'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
  return (
	  <Stack.Navigator
			initialRouteName="home"
		>
		  <Stack.Screen name="home">
			  {Home}
			</Stack.Screen>

			<Stack.Screen name="game">
			  {Game}
			</Stack.Screen>
		</Stack.Navigator>
	)
}
