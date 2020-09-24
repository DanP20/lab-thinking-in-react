import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    productList: this.props.products.data,
    query: '',
    // create a new propriety for the checkbox value
    checkbox: false,
  };

  handleQuery = (newValue) => {
      this.setState({
        query: newValue,
      });
  };

  handleCheckbox = () => {
      this.setState({
        checkbox: !this.state.checkbox,
      });
  }

  // create a new function to update the value of the checkbox propriety

  render() {
    // console.log(this.props.products.data);
    return (
      <div>
        <SearchBar
          query={this.state.query}
          checkbox={this.state.checkbox}
          handleQuery={this.handleQuery}
          handleCheckbox={this.handleCheckbox}
          // send checkbox valeu and function as a props
        />
        <ProductTable
          query={this.state.query}
          checkbox={this.state.checkbox}
          productList={this.state.productList}
          // send checkbox valeu as a props
        />
      </div>
    );
  }
}
