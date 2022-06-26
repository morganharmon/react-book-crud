import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { client } from './services/client';
import Home from './Home';
import Create from './Create';
import Items from './Items';
import ItemDetail from './ItemDetail';

function App() {
  const [signInInput, setSignInInput] = useState('');
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home signInInput={signInInput} setSignInInput={setSignInInput} />
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
