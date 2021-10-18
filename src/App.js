import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Header from './components/AppHeader/Header';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
