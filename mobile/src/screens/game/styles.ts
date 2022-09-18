import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
		zIndex: 10
  },
	header: {
		width: '100%',
		paddingHorizontal: 32,
		marginLeft: 'auto',
		marginVertical: 28,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	logo: {
		height: 40,
		width: 72
	},
	buttonBack: {
		marginRight: 'auto'
	},
	right: {
		height: 20,
		width: 20,
		marginLeft: 'auto'
	},
	cover: {
		width: 311,
		height: 160,
		borderRadius: 8
	},
	containerList: {
		width: '100%'
	},
	contentList: {
		paddingLeft: 32,
		paddingRight: 64,
		alignItems: 'flex-start'
	}
})
