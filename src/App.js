import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Company from './containers/Company';
import Products from './containers/Products';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Cow from './components/Cow';
import Pig from './components/Pig';
import Mutton from './components/Mutton';
import Poultry from './components/Poultry';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/empresa" component={Company}></Route>
              <Route path="/productos" component={Products}></Route>
              <Route exact path="/contacto" component={Contact}></Route>
              <Route component={NotFound}></Route>
            </Switch>
        </Layout>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
