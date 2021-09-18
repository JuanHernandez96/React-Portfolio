import './App.css';
import About from './Components/About';
import Projects from './Components/Projects/index.js';
import Contact from './Components/Contact/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Projects' component={Projects} />
      <Route exact path='/Contact' component={Contact} />
     </Switch>
     </BrowserRouter>
    </main>

  );
}

export default App;