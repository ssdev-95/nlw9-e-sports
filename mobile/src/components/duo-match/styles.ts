import { StyleSheet } from 'react-native'
import {THEME} from '../../theme'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: THEME.COLORS.OVERLAY
	},
	content: {
		width: 311,
		padding: 16,
		borderRadius: 8,
		backgroundColor: THEME.COLORS.SHAPE,
		alignItems: 'center',
		justifyContent: 'center'
	},
	close: {
		marginBottom: 16,
		alignSelf: 'flex-end'
	},
	heading: {
		alignItems: 'center',
		marginVertical: 24,
		gap: 4
	},
	label: {
		marginBottom: 8,
		color: THEME.COLORS.TEXT,
		fontSize: THEME.FONT_SIZE.MD,
		fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
	},
	discordButton: {
		width: 231,
		height: 48,
		borderRadius: 4,
		marginBottom: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: THEME.COLORS.BACKGROUND_900
	},
	discord: {
		color: THEME.COLORS.TEXT,
		fontSize: THEME.FONT_SIZE.MD,
		fontFamily: THEME.FONT_FAMILY.REGULAR
	}
})
