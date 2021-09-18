import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route path='/about' component={AboutMe}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
    </Navbar>
  )
}

export default App;
