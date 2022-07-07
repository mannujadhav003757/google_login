import './App.css';

import LoginButton from './components/Login'
import LogoutButton from './components/Logout'
import { useEffect } from 'react'
import { useState } from 'react';
import { gapi } from 'gapi-script'
import Card from 'react-bootstrap/Card';

const clientId = '349925464986-6gqlvd5unbrne7cjrjimfubt4of7a7i0.apps.googleusercontent.com'

function App() {
  const [isLogin, setLogin] = useState(false);

  const [data, setUserData] = useState("");


  useEffect(() => {
    function start() {
      gapi.client.init('client:auth2',{
        clientId: clientId,
        scope: "",
         ux_mode: 'redirect',
        //  discoveryDocs:'https://developers.google.com/discovery/v1/using'
      })
    }

    gapi.load('client:auth2', start)
  },[])

  const setIsLogin = (data) => {

    setLogin(data);

    setUserData(JSON.parse(localStorage.getItem('userDetails')))
    console.log(setUserData)
  }


  const setIsLogout = (data) => {
    setIsLogin(data);

    console.log(data)
  }

  return (
    <div className="App">

      {
        isLogin ? <div id="userData">
          <h1 className='mb-4'>Example of Google Login</h1> 
          <div className='container mb-2' style={{marginLeft:'35%'}}>
          <Card style={{ width: '20rem',height:'15rem',backgroundColor:'grey' }}>
            <Card.Body className="mt-5">
              <Card.Title style={{color:"yellow"}}><b>Welcome {data.name} ....!!</b></Card.Title>
              <Card.Text style={{color:"blue"}}>
                <b>Email:{data.email}</b>
              </Card.Text>
              
            </Card.Body>
          </Card>
          </div>
        </div> : ''
      }

      {
        isLogin ? <LogoutButton getIsLogout={setIsLogout} /> : <LoginButton getIsLogin={setIsLogin} />
      }

    </div>
  );
}

export default App;
