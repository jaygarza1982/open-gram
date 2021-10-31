import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Header from './components/AppHeader/Header';
import Login from './components/Login/Login';
import NavContainer from './components/NavButtons/NavContainer';
import Publish from './components/Publish/Publish';
import { useRecoilState } from 'recoil';
import { userAtom } from './atoms';
import Register from './components/Register/Register';

function App() {

  const ProtectedRoute = props => {
    const [user] = useRecoilState(userAtom);

    return user != '' ? <Route {...props} /> :
      (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
  }

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <RecoilRoot>
          <Header />
          <Router>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <ProtectedRoute path='/' exact component={Home} />
              <ProtectedRoute path='/profile' component={Profile} />
              <ProtectedRoute path='/publish' component={Publish} />
            </Switch>
            <NavContainer />
          </Router>
        </RecoilRoot>
      </SnackbarProvider>
    </>
  );
}

export default App;
