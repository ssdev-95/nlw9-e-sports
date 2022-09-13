import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if(
  window &&
	window.innerWidth < 1024 &&
	import.meta.env.DEV
) {
  eruda.init()

	eruda.add(erudaDOM)
}
