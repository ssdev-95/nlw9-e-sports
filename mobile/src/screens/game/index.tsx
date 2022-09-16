import { useState, useEffect } from 'react'
import { Image, View, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo	} from '@expo/vector-icons'

import { Loader } from '../../components/loading'
import { Heading } from '../../components/heading'
import { DuoCard } from '../../components/duo-card'
import { Background } from '../../components/background'

import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'

import { api } from '../../services/api'

type Game = DuoFinder.Game
type Duo = DuoFinder.Duo

export function Game() {
  const navigation = useNavigation()
	const route = useRoute()
	const game = route.params as Game

	function handleGoBack() {
	  navigation.goBack()
	}

	const [isLoadingContent, setIsLoadingContent] = useState(true)
	const [duos, setDuos] = useState<Duo[]>([])

  useEffect(() => {
	  api
		  .get<Duo[]>('/DUOS')
			.then(({data}) => setDuos(data))
			.catch(console.log)
			.finally(() => setIsLoadingContent(false))
	},[])

  return (
	  <Background>
      {isLoadingContent ? (<Loader />) : (
			  <SafeAreaView style={styles.container}>
				  <View style={styles.header}>
				    <TouchableOpacity onPress={handleGoBack}>
				  	  <Entypo
					  	  name="chevron-thin-left"
		  					size={20}
		  				  color={THEME.COLORS.CAPTION_300}
	  					/>
	  				</TouchableOpacity>
	
	  	  	  <Image
  				  	source={logoImg}
  					  style={styles.logo}
  	  			/>

	  				<View style={styles.right} />
	    		</View>

  				<Image
		  		  source={{ uri: game.bannerUrl }}
	  				style={styles.cover}
	  				resizeMode="cover"
	  			/>

  				<Heading
	  			  title={game.title}
		  			subtitle="Connect to start playing.."
			  	/>

					<FlatList
					  data={duos}
					  keyExtractor={(duo) => duo.id}
						renderItem={({ item }) => (
						  <DuoCard duo={item} />
						)}
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.containerList}
						contentContainerStyle={styles.contentList}
					/>
        </SafeAreaView>
			)}
		</Background>
  )
}
