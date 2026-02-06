import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//.render() -> The starting point for the application to start
// .render() ->  render a React Element (created internally with the React.createElement() function).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
