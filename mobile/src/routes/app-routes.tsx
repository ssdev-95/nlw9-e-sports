import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import Game from '../screens/game'
import Home from '../screens/home'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
  return (
	  <Stack.Navigator
			initialRouteName="home"
		>
		  <Stack.Screen
			  name="home"
				component={Home}
			/>

			<Stack.Screen
			  name="game"
				component={Game}
			/>
		</Stack.Navigator>
	)
}
