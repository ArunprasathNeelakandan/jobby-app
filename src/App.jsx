import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Jobs from './components/Jobs'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import JobDetailes from './components/JobDetailes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Switch>
             <Route exact path='/login' component={Login} />
             <ProtectedRoute exact path = '/' component={Home} />
             <ProtectedRoute exact path='/jobs' component={Jobs} />
             <ProtectedRoute exact path='/jobs/:id' component={JobDetailes} />
    </Switch>
    
  )
}

export default App
