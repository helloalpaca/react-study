import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

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
import Login from './domain/login';

import Redux from './domain/Redux/index';
import Context from './domain/context/index';
import Gossok from './domain/gossok/index';
import Pagination from './domain/pagination/reactpaginate';

function App() {
  const [pictures1, setPictures1] = useState([]);

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
            <Route exact path="/image-upload">
              <ImageUpload pictures1={pictures1} setPictures1={setPictures1} />
            </Route>
            <Route exact path="/input-numeric" component={InputNumeric} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/redux" component={Redux} />
            <Route exact path="/context" component={Context} />
            <Route exact path="/pagination" component={Pagination} />
            <Route exact path="/gossok" component={Gossok} />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
