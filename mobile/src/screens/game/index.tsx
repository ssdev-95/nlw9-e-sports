import { useState, useEffect } from 'react'
import { Image, View, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo	} from '@expo/vector-icons'

import { Logo } from '../../components/logo'
import { Loader } from '../../components/loading'
import { Heading } from '../../components/heading'
import { DuoCard } from '../../components/duo-card'
import { DuoMatch } from '../../components/duo-match'
import { Background } from '../../components/background'

import { styles } from './styles'
import { THEME } from '../../theme'

import { api } from '../../services/api'

type Game = DuoFinder.Game
type Duo = DuoFinder.Duo

interface DCResponse {
  discord:string
}

export function Game() {
  /*const navigation = useNavigation()
	const route = useRoute()
	const game = route.params as Game

	function handleGoBack() {
	  navigation.goBack()
	}*/

	const game = {
  	id: '00f9715a-9399-4acd-a290-3b1134eaaa81',
	  title: 'League of Cats',
		bannerUrl: 'https://http.cat/401'
	}

	const [isLoadingContent, setIsLoadingContent] = useState(true)
	const [duos, setDuos] = useState<Duo[]>([])
	const [selectedDuo, setSelectedDuo] = useState('')

	async function openDuoModal(adId:string) {
	  const { data } = await api.get<DCResponse>(`/ads/${adId}/discord`)

	  setSelectedDuo(data.discord)
	}

  useEffect(() => {
	  api
		  .get<Duo[]>(`/games/${game.id}/ads`)
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
			  <DuoMatch
				  visible={!!selectedDuo.trim()}
				  discord={selectedDuo}
					onClose={()=>setSelectedDuo('')}
				/>
			  <View style={styles.header}>
  		    <TouchableOpacity style={styles.buttonBack}>
			  	  <Entypo
		  	  	  name="chevron-left"
		    			size={20}
		  			  color={THEME.COLORS.PRIMARY}
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
					  <DuoCard
						  duo={item}
							onPress={()=>openDuoModal(item.id)}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.contentList}
				/>
      </SafeAreaView>
		</Background>
  )
}
