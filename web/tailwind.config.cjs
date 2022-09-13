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
				background: '#121214'
			},
			backgroundImage: {
				galaxy: 'url("/nlw9-background.png")',
				'nlw-gradient': 'linear-gradient(89.86deg, #9572fc 27.08%, #43e7ad 33.94%, #e1d55d 64%)',
				'game-gradient': 'linear-gradient(100deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)'
			}
		},
  },
  plugins: [],
}
