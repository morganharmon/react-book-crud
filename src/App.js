import './App.css';
import { client } from './services/client';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Create from './Create';
import Items from './Items';
import ItemDetail from './ItemDetail';
import { logout } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/create'>Create new book</Link>
          </li>
          <li>
            {
              user && <button onClick={handleLogout}>Log out</button>
            }
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          {
            !user
              ? <Auth setUser={setUser} />
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
