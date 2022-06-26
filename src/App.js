import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { client } from './services/client';
import Home from './Home';
import Create from './Create';
import Items from './Items';
import ItemDetail from './ItemDetail';

function App() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home signInPassword={signInPassword} setSignInPassword={setSignInPassword} signInEmail={signInEmail} setSignInEmail={setSignInEmail} signUpEmail={signUpEmail} setSignUpEmail={setSignUpEmail} signUpPassword={signUpPassword} setSignUpPassword={setSignUpPassword} />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route exact path='/items/:id'>
          <ItemDetail />
        </Route>
        <Route path='/items'>
          <Items />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
