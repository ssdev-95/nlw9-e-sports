import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert:true,
		shouldPlaySound:true,
		shouldSetBadge:true
	})
})


export * as Notifications from 'expo-notifications'
