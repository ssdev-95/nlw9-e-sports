const cdn_base = 'https://static-cdn.jtvnw.net/ttv-boxart'

const cdn_end_a = '416x555.jpeg'

const cdn_end_b = '208x277.jpeg'

export const games = [
	{ title: 'Dota 2', bannerUrl: `${cdn_base}/2585-${cdn_end_a}` },
	{ title: 'World of Warcraft', bannerUrl: `${cdn_base}/18122-${cdn_end_a}` },
	{ title: 'Valorant', bannerUrl: `${cdn_base}/5216575-${cdn_end_b}` },
	{ title: 'League of Legends', bannerUrl: `${cdn_base}/21779-${cdn_end_b}` },
	{ title: 'Among Us', bannerUrl: `${cdn_base}/510218_IGDB-${cdn_end_a}` },
	{ title: 'Cs GO', bannerUrl: `${cdn_base}/32399_IGDB-${cdn_end_a}` },
	{ title: 'Smite', bannerUrl: `${cdn_base}/32507-${cdn_end_a}` }
]

console.log(games)
