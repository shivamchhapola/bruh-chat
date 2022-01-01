import React, { useEffect, useState}from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { onAuthStateChanged} from "firebase/auth";
import { getUser, auth} from './firebase';

function App() {

  const [user, setUser] = useState(getUser());

  useEffect(() => {
    onAuthStateChanged(auth, (authuser) => {
      authuser ? setUser(authuser) : setUser(null);
      console.log(authuser);
    })
  }, [])


  return (
    <div className="app">
      {
        user ? <><Sidebar user={user} /><Chat user={user} CurrentChannelName="General 1" /></>
          : <><Login /></>
      }
    </div>
  );
}

export default App;