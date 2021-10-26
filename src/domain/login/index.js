import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import { getCookie, getAllCookie } from '../../utils/Cookie';
import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';
import hashing from '../../utils/hasing';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [code_verifier, setCodeVerifier] = useState('');
  const [code_challenge, setCodeChallenge] = useState('');

  function onChangeId(e) {
    setId(e.target.value);
  }

  function onChangePw(e) {
    setPw(e.target.value);
  }

  async function onClick() {
    console.log('[Login][onClick]: id-' + id + ', pw-' + pw);

    await onAxiosAuthorize();
    await onAxiosRequest();
  }

  function onAxiosWeatherGet() {
    //let url = 'https://api.openweathermap.org/data/2.5/weather';
    let proxyURL = '/data/2.5/weather';
    axios
      .get(proxyURL, {
        params: {
          q: 'seoul',
          appid: '6426e356d0194ee19904be09402c8d50',
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(Error);
      })
      .then(function () {
        // 항상 실행
        console.log('onAxiosGet');
      });
  }

  function onAxiosWeatherPost() {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, Content-Length, X-Requested-With',
      'Access-Control-Allow-Credentials': true,
    };
    //let url = 'https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6426e356d0194ee19904be09402c8d50';
    let url =
      '/data/2.5/weather?q=seoul&appid=6426e356d0194ee19904be09402c8d50';
    axios
      .post(url, {}, { headers: headers })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(Error);
      })
      .then(function () {
        // 항상 실행
        console.log('onAxiosPost');
      });
  }

  function onFirebaseAuthGet() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCFbVeaK4_Yj5y1-Cs01NePaWMVi9Mxtp8',
      authDomain: 'asap-98138.firebaseapp.com',
      projectId: 'asap-98138',
      storageBucket: 'asap-98138.appspot.com',
      messagingSenderId: '594988140729',
      appId: '1:594988140729:web:9f1c6205b5dd3c1dd87368',
    };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'test@test.com', 'abcd1234')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  useEffect(() => {
    async function tempHashing() {
      let _code_plaintext = uuidv4() + new Date();
      console.log('[_CODE_PLAINTEXT]: ', _code_plaintext);
      let _code_verifier = await hashing(_code_plaintext);
      console.log('[_CODE_VERIFIER]: ', _code_verifier);
      let _code_challenge = await hashing(_code_verifier);
      console.log('[_CODE_CHALLENGE]: ', _code_challenge);

      setCodeVerifier(_code_verifier);
      setCodeChallenge(_code_challenge);
    }

    tempHashing();
  }, []);

  async function onAxiosAuthorize() {
    const cookies = new Cookies();

    console.log('[CODE_VERIFIER]: ', code_verifier);
    console.log('[CODE_CHALLENGE]: ', code_challenge);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies,
      withCredentials: true,
    };

    const url =
      '/authorize?client_id=6822d5d0-2962-11ec-95b8-eb147a04a73c&grant_type=authorization_code';
    const params = new URLSearchParams();

    params.append('signin_id', 'testuser');
    params.append('signin_pw', 'Yb5VqOL2tOFyM4vd8YTW2+4pyYhT4KBIXs7n8nua8LQ');
    params.append('code_challenge', code_challenge);
    params.append('code_challenge_method', 'sha256');

    await axios
      .post(url, params, headers)
      .then(function (response) {
        console.log(response.data);
        return response;
      })
      .catch(function (error) {
        console.log(Error);
      }); /* Cookie 못 읽어옴!!!
      .then(function () {
        console.log(cookies.getAll());
      });*/

    console.log('[onAxiosAuthorize] END');
  }

  async function onAxiosRequest() {
    console.log('[TOKEN][CODE_VERIFIER]: ', code_verifier);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies,
      withCredentials: true,
    };

    const proxyurl =
      '/token?client_id=6822d5d0-2962-11ec-95b8-eb147a04a73c&redirect_url=https://partners-api.gossok.com/hubs';
    const url =
      'https://login.gossok.com/token?client_id=6822d5d0-2962-11ec-95b8-eb147a04a73c&redirect_url=https://partners-api.gossok.com/hubs';
    const params = new URLSearchParams();
    params.append('code_verifier', code_verifier);

    await axios
      .post(proxyurl, params, headers)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(Error);
      });

    console.log('[onAxiosRequest] END');
  }

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Login</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Login</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      onChange={onChangeId}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                      onChange={onChangePw}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      id="inputRememberPassword"
                      type="checkbox"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inputRememberPassword"
                    >
                      Remember Password
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small">Forgot Password?</a>
                    <a className="btn btn-primary" onClick={onClick}>
                      Login
                    </a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <a>Need an account? Sign up!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
