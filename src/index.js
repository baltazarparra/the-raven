import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.png';
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Suspense fallback={<h1 style={{color:'white',position:'absolute',zIndex:'10'}}>loading...</h1>}>
      <Canvas shadows>
        <App />
      </Canvas>
      </Suspense>
  </React.StrictMode>
);
