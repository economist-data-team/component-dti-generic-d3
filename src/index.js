import d3 from 'd3';
import React from 'react';
import parseMarginArray from '@economist/utility-dti-parsemarginarray';

export default class D3Component extends React.Component() {
  constructor(...args) {
    super(...args);
    this.selectRef = this.selectRef.bind(this);
  }
  get containerElement() {
    return this.props.inSVG ? 'g' : 'svg';
  }
  get margin() {
    return parseMarginArray(this.props.margin);
  }
  selectRef(refName) {
    if (Object.keys(this.refs).includes(refName)) {
      return d3.select(React.findDOMNode(this.refs[refName]));
    }
    return null;
  }
  render() {
    return React.createElement(
      this.containerElement,
      {
        className: 'd3-container',
        ref: 'd3-container',
      }
    );
  }
  componentDidMount() {
    this.d3render();
  }
  componentDidUpdate() {
    this.d3render();
  }
  d3render() {
    console.log('You should extend this function in your subclass'); // eslint-disable-line no-console
  }
}

if (process.env.NODE_ENV !== 'production') {
  D3Component.propTypes = {
  };
}
