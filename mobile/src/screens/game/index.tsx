import { useState, useEffect } from 'react'
import { Image, View, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo	} from '@expo/vector-icons'

import { Logo } from '../../components/logo'
import { Loader } from '../../components/loading'
import { Heading } from '../../components/heading'
import { DuoCard } from '../../components/duo-card'
import { Background } from '../../components/background'

import { styles } from './styles'
import { THEME } from '../../theme'

import { api } from '../../services/api'

type Game = DuoFinder.Game
type Duo = DuoFinder.Duo

export function Game() {
  /*const navigation = useNavigation()
	const route = useRoute()
	const game = route.params as Game

	function handleGoBack() {
	  navigation.goBack()
	}*/

	const game = {
  	id: 'ga_m2f8chnwsOGb29f93',
	  title: 'League of Cats',
		bannerUrl: 'https://http.cat/401'
	}

	const [isLoadingContent, setIsLoadingContent] = useState(true)
	const [duos, setDuos] = useState<Duo[]>([])

  useEffect(() => {
	  api
		  .get<Duo[]>('/DUOS')
			.then(({data}) => {
			  console.log('Renderizou a gamescreen :D')
			  setDuos(data)
			})
			.catch(console.log)
			.finally(() => setIsLoadingContent(false))
	},[])

	if(isLoadingContent) {
	  return (
		  <Background>
			  <SafeAreaView style={styles.container}>
				  <Loader />
				</SafeAreaView>
			</Background>
		)
	}

  return (
	  <Background>
			<SafeAreaView style={styles.container}>
			  <View style={styles.header}>
  		    <TouchableOpacity>
			  	  <Entypo
		  	  	  name="chevron-thin-left"
		    			size={20}
		  			  color={THEME.COLORS.CAPTION_300}
	  				/>
					</TouchableOpacity>
	
	    	  <Logo
  	  	  	resizeMode="cover"
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
		</Background>
  )
}
