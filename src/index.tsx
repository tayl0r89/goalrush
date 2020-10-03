import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@committed/components'
import AppFrame from './AppFrame'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppFrame />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
