import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import OneBox from './components/OneBox'
// import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/onebox" component={OneBox} />
  </Switch>
)

export default App
