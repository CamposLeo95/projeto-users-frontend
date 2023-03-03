import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import Root from './routes/root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
)
