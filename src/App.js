import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AddArticle from './components/AddArticle/AddArticle';
import Home from './components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addArticle">
            <AddArticle />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
