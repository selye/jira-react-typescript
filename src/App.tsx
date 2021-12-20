import React from 'react';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { ReactHookTest } from 'screens/reactHookTest';
import { LoginScreens } from 'screens/login';

function App() {
  return (
    <div className="App">
     {/* <ProjectListScreen /> */}
     {/* <ReactHookTest /> */}
     <LoginScreens />
    </div>
  );
}

export default App;
