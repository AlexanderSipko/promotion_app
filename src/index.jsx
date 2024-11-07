import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
// import './index.css'
import '@/app/style/global.scss'

const reactRoot = createRoot(document.getElementById('root')
)

reactRoot.render(
  <React.StrictMode>
              <App />
            </React.StrictMode>
)