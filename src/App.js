import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat CurrentChannelName="General 1"/>
    </div>
  );
}

export default App;
