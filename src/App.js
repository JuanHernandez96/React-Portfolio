import './App.css';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects/index.js';
import ContactMe from './Components/ContactMe/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// routes to move from and to pages
function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={AboutMe} />
      <Route exact path='/AboutMe' component={AboutMe} />
      <Route exact path='/Projects' component={Projects} />
      <Route exact path='/ContactMe' component={ContactMe} />
     </Switch>
     </BrowserRouter>
    </main>

  );
}

export default App;