import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:id' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </Router>
  )
}

export default App
