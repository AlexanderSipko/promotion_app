import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
import '@/app/style/global.css'

const reactRoot = createRoot(document.getElementById('root')
)

reactRoot.render(
  <React.StrictMode>
              <App />
            </React.StrictMode>
)