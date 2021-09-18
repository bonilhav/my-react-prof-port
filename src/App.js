import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import projects from './projects';

const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/projects' component={Projects}>
          <Projects projects={projects} />
        </Route>/
        <Route path='/contactme' component={ContactMe} />
        <Route path='/' component={Home} />
      </Switch>
    </Navbar>
  )
}

export default App;