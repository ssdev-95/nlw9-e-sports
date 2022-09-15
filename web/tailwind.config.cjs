/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/**/*.tsx',
		'./index.html'
	],
  theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				background: '#121214',
				green: {
					300: '#43e7ad'
				}
			},
			backgroundImage: {
				galaxy: 'url("/nlw9-background.png")',
				'nlw-gradient': 'linear-gradient(89.86deg, #9572fc 33%, #43e7ad 55%, #e1d55d 80.08%)',
				'game-gradient': 'linear-gradient(100deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 40.08%)'
			},
			screens: {
				mb: {'max':'869px'}
			}
		},
  },
  plugins: [],
}
