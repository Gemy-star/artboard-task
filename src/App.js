import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css'
import AppLayout from './HOC/AppLayout';
import Home from './Containers/Home';
function App() {
  return (
    <AppLayout>
      <Home/>
    </AppLayout>
  );
}

export default App;
