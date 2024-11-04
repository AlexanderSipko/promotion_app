import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app/routes/index'
import './app/styles/style.css'

const reactRoot = createRoot(
  document.getElementById('root')!,
)

reactRoot.render(
  <React.StrictMode>
              <App />
            </React.StrictMode>
)