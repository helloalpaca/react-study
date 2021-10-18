import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Sidebar from './components/sidebar/index';

import Main from './domain/main/index';
import PrivacyPolicy from './domain/privacypolicy';
import Image from './domain/image';
import Dropdown from './domain/dropdown';
import ImageUpload from './domain/imageupload';
import InputNumeric from './domain/inputnumeric';

import Redux from "./domain/Redux/index";

class App extends Component {
  render() {
    return (
        <Router>
          <div id="main">
            <Header />
            <div id="layoutSidenav">
              <div id="layoutSidenav_nav">
                <Sidebar />
              </div>
              <div id="layoutSidenav_content">
                <Route exact path="/" component={Main} />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Route exact path="/image" component={Image} />
                <Route exact path="/dropdown" component={Dropdown} />
                <Route exact path="/image-upload" component={ImageUpload} />
                <Route exact path="/input-numeric" component={InputNumeric} />
                <Route exact path="/redux" component={Redux} />
                <Footer />
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
