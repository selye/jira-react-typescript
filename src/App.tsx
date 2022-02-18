import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenicatedApp } from "authenticcated-app";
import { UnauthenticatedApp } from "unauthnticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenicatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
