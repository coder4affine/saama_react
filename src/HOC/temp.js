import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

export default (WrappedComponent) => {
  class temp extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.warn(this.el);

      //   ReactDOM.createPortal(<div>Hello</div>, this.el);
    }

    render() {
      return <WrappedComponent {...this.props} authenticated />;
    }
  }

  return temp;
};
