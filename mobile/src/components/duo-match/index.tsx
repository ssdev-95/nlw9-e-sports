import { useState, useEffect } from 'react'
import * as Clipboard from 'expo-clipboard'
import { MaterialIcons } from '@expo/vector-icons'

import {
  View,
	Text,
  Modal,
	ModalProps,
	TouchableOpacity
} from 'react-native'

import { Loader } from '../loading'
import { Heading } from '../heading'

import { styles } from './styles'
import { THEME } from '../../theme'

interface Props extends ModalProps {
  discord: string
	onClose: () => void
}

let timeout:string|number|NodeJS.Timeout = 0
export function DuoMatch({ discord, onClose, ...props }:Props) {
  const [isCopying, setIsCopying] = useState(false)

  async function handleCopyDiscordUser() {
	  setIsCopying(true)
		await Clipboard.setStringAsync(discord)

		setIsCopying(false)

		timeout = setTimeout(onClose, 1500)
	}

	useEffect(() => {
	  return () => clearTimeout(timeout)
	}, [])

  return (
	  <Modal
		  animationType="fade"
		  transparent
			statusBarTranslucent
			{...props}
		>
      <View style={styles.container}>
			  <View style={styles.content}>
				  <TouchableOpacity
					  style={styles.close}
						onPress={onClose}
					>
					  <MaterialIcons
						  name="close"
							size={20}
						/>
					</TouchableOpacity>

					<MaterialIcons
					  name="check-circle-outline"
						size={64}
						color={THEME.COLORS.SHAPE}
					/>

					<Heading
					  title="Let's Play!"
						subtitle="Now it's just a matter of start the match .."
						style={styles.heading}
					/>

					<Text style={styles.label}>
					  Add on discord
					</Text>

					<TouchableOpacity
					 style={styles.discordButton}
					 onPress={handleCopyDiscordUser}
					 disabled={isCopying}
					>
					  {isCopying ? (
						  <Loader />
						) : (
    				  <Text style={styles.discord}>
    					  {discord}
  	  				</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
  )
}
