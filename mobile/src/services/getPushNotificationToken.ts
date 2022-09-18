import * as Notifications from 'expo-notifications'

export async function getPushNotificationToken() {
	const { granted } = await Notifications.getPermissionsAsync()

	if(!granted) {
		await Notifications.requestPermissionsAsync()
	}

	const token = await Notifications.getExpoPushTokenAsync()

	console.log('TOKEN => ', token)

	return token.data
}
