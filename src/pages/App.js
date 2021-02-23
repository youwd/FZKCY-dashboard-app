import React from 'react';
import './App.less';
import { Column } from '@ant-design/charts';
import Header from '@components/Header/Header';
import Dashboard from '@pages/dashboard/dashboard';

function App() {

  return (
    <div className="app">
      <Header />
      <div className='app-body'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
