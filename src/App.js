import './App.css';
import Grid from '@mui/material/Grid';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

import projects from './projects.json';

const App = () => {
  return (
    <Grid id="main">
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <Switch>
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/projects'>
            <Projects projects={projects} />
          </Route>
          <Route path='/contactme' component={ContactMe} />
          <Route path='/resume' component={Resume} />
          <Route path='/' component={Home} />
        </Switch>
      </Grid>
    </Grid>
  )
}

export default App;