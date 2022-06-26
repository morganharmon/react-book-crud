import './App.css';
import { client } from './services/client';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Items from './Items';
import ItemDetail from './ItemDetail';
import { signUp, signIn, logout } from './services/fetch-utils';

function App() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(client.auth.user());

  async function signUpSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }
  async function signInSubmit(e) {
    e.preventDefault();
    try {
      const user = await signIn(signInEmail, signInPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }
  async function handleLogout() {
    try {
      await logout();
      setUser('');
    } catch (e) {
      setError(e.message);
    }
    console.log(user);
  }

  return (
    <BrowserRouter>
      <nav>
        <button onClick={handleLogout}>Log out</button>
      </nav>
      <Switch>
        <Route exact path='/'>
          {
            !user
              ? <Home signInPassword={signInPassword} setSignInPassword={setSignInPassword} signInEmail={signInEmail} setSignInEmail={setSignInEmail} signUpEmail={signUpEmail} setSignUpEmail={setSignUpEmail} signUpPassword={signUpPassword} setSignUpPassword={setSignUpPassword} signUpSubmit={signUpSubmit} signInSubmit={signInSubmit} />
              : <Redirect to='/items' />
          }
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route exact path='/items/:id'>
          <ItemDetail />
        </Route>
        <Route exact path='/items'>
          {
            user
              ? <Items />
              : <Redirect to='/' />
          }
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
