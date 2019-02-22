import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <section className="FilterableProductTable">
        <div>
          <SearchBar />
        </div>
        <div>
          <ProductTable />
        </div>
      </section>
    );
  }
}

export default FilterableProductTable;
