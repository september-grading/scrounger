import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Register from './views/Auth/Register';
import LogIn from './views/Auth/LogIn';
import Profile from './views/Profile/Profile';
import Adventure from './views/Adventure/Adventure';
import Create from './views/Create/Create';
import Edit from './views/Edit/Edit';
import { getUser } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/user/:id">Profile</NavLink>
          <button>Log Out</button>
        </header>
        <Switch>
          <Route exact path="/">
            <Home {...{ currentUser }} />
          </Route>
          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/user/:id">
            <Profile />
          </Route>
          <Route exact path="/adventure/:id">
            <Adventure />
          </Route>
          <Route exact path="/adventure/create">
            <Create />
          </Route>
          <Route exact path="/adventure/:id/edit">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
