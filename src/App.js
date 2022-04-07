import React from "react";
import "./style.css";
import Subscribers from "./components/subscribers";
import {Provider} from "react-redux";
import store from "./redux/store"
import Views from "./components/views";

export default function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Subscribers/>
      <Views/>
    </div>
    </Provider>
  );
}
