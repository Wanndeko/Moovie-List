import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import MultRoutes from './routes/routes.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <MultRoutes />
      </BrowserRouter>
    </>
  </React.StrictMode>
)
