import React from "react";
import { Fragment } from "react";
import '../src/App.css'
import Calcu from './components/calculator'

function App() {
  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <Calcu />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
