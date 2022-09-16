import { TouchableOpacity, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { THEME } from '../../theme'
import { DuoInfo } from '../duo-info'
import { styles } from './styles'

interface DuoProps {
  duo:DuoFinder.Duo
  onPress: () => void
}
	
export function DuoCard({ duo, onPress }:DuoProps) {
  const availability = `${duo.weekDays.length} days \u2022 ${duo.hourStart} ~ ${duo.hourEnd}`
	const yearsOfPlaying = `${duo.yearsOfPlaying} years`

	const useVoiceChannel = duo.useVoiceChannel ? 'Yes' : 'No'

	const useVoiceChannelColor = duo.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT

  return (
    <View style={styles.container}>
		  <DuoInfo
			  label="Name"
			  value={duo.name}
			/>

			<DuoInfo
			  label="Years of playing"
				value={yearsOfPlaying}
			/>

			<DuoInfo
			  label="Availability"
				value={availability}
			/>

			<DuoInfo
			  label="Use voice channel?"
				value={useVoiceChannel}
				colorValue={useVoiceChannelColor}
			/>

			<TouchableOpacity
			  onPress={onPress}
			  style={styles.button}
			>
			  <Entypo
				  name="game-controller"
					size={20}
				/>
				<Text style={styles.buttonText}>Connect</Text>
			</TouchableOpacity>
		</View>
  )
}
