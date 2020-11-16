import React from "react";
import "./App.css";
import Google from "./Google";
import Home from "./Home";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <h1>Login Google - FaceBook</h1>
      { !user ? (
        <Google />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
