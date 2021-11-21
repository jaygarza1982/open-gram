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
import { navShownAtom, userAtom } from './atoms';
import Register from './components/Register/Register';
import ProfileView from './components/Profile/ProfileView';
import axios from 'axios';
import SinglePost from './components/SinglePost/SinglePost';

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

  const LoginCheck = props => {
    const [user, setUser] = useRecoilState(userAtom);
    const [, setNavShown] = useRecoilState(navShownAtom);

    const fetchSession = async () => {
      try {
        // Only fetch session if we do not have a user stored locally
        if (user != '') return;

        console.log('Fetching session...');

        const { data: { email } } = await axios.get('/api/session');

        setUser(email);
        setNavShown(true);
      } catch (error) {
        console.log('Could not fetch session on login check', error);
      }
    }

    fetchSession();

    return <></>
  }

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <RecoilRoot>
          <Header />
          <Router>
            <LoginCheck />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <ProtectedRoute path='/' exact component={Home} />
              <ProtectedRoute path='/profile' exact component={Profile} />
              <Route path='/profile/:user' exact component={ProfileView} />
              <Route path='/post/:postId' exact component={SinglePost} />
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
