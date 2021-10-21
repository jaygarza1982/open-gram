import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Header from './components/AppHeader/Header';
import Login from './components/Login/Login';
import NavContainer from './components/NavButtons/NavContainer';

function App() {
  return (
    <>
    <RecoilRoot>
    <Header />
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
      </Switch>
      <NavContainer />
    </Router>
    </RecoilRoot>
    </>
  );
}

export default App;
