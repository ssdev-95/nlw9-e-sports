import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
	header: {
		width: '100%',
		paddingHorizontal: 32,
		marginTop: 28,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	logo: {
		height: 40,
		width: 72
	},
	right: {
		height: 20,
		width: 20
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
