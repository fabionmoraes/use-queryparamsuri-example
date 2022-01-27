import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Router'

import GlobalStyle from './styles/global'

const App = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>

      <GlobalStyle />
    </>
  )
}

export default App
