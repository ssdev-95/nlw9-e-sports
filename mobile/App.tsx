import './src/services/notificationConfigs'

import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Routes } from './src/routes'
import { Loader } from './src/components/loading'
import { styles } from './src/components/background/styles'

import { getPushNotificationToken } from './src/services/getPushNotificationToken'
import {Background} from './src/components/background'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

	const getNotificationtionListener = useRef<Subscription>()
	const responseNotificationListener = useRef<Subscription>()

	useEffect(() => {
	  getPushNotificationToken()
	}, [])

	useEffect(() => {
	  getNotificationtionListener.current = Notifications.addNotificationReceivedListener(console.log)

		responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(console.log)

		return () => {
		  if(getNotificationtionListener.current && responseNotificationListener.current) {
			  Notifications.removeNotificationSubscription(getNotificationtionListener.current)
				Notifications.removeNotificationSubscription(responseNotificationListener.current)
			}
		}
	}, [])

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? (
				<Routes />
			) : (
			  <Background>
				  <Loader />
				</Background>
			)}
    </>
  )
}
