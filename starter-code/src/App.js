import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FilterableProductTable from "./components/FilterableProductTable.js";

class App extends Component {
  render() {
    return (
      <section className="App">
        <header>
          <h1>IronStore</h1>
        </header>
        <FilterableProductTable />
      </section>
    );
  }
}

export default App;
