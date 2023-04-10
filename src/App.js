import React from "react";
import './App.css';
import TopSide from "./components/TopSide/TopSide";
import SidebBar from "./components/SideBar/SideBar";
import Home from './components/Pages/Home/Home';
import UserList from './components/Pages/UserList/UserList';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router >
      
    <TopSide />
 

    <div className="container">
      <SidebBar />

     <Switch >
      <Route exact path="/">
        < Home />
      </Route>

      <Route path="/Users">
        < UserList />
      </Route>

      <Route path="/">
        < Home />
      </Route>

      

      </Switch>
    </div>



    </Router>
  );
}

export default App;
