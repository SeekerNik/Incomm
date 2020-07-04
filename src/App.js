import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";

function Hatpage() {
  return (
    <div>
      <h1>Hat's pages</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop/hatpage" component={Hatpage} />
    </div>
  );
}

export default App;
