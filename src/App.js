import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Login } from "./components/Login";
import { ErrorPage } from "./components/ErrorPage";
import { Layout } from "./components/Layouts/layout";
import {NavBar} from "./components/Navbar"
import './App.css';



class App extends Component {
    render() {
      return (
        <div>
          <NavBar/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/login" component={Login} />
                <Route component={ErrorPage} />
              </Switch>
            </Router>
          </Layout>
        </div>
  );
 }
}

export default App;
