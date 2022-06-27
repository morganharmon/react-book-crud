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
      <header>
        <h1>Your Personal Book List</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='/create'>Create new book</Link>
          </li>
          <li>
            <Link to='/items'>List of your books</Link>
          </li>
          {
            user && <li><button onClick={handleLogout}>Log out</button></li>
          }
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
          {
            user
              ? <Create />
              : <Redirect to ='/' />
          }
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
