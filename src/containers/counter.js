import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render(){
    return (
      <div className="counter">
        Generations: {this.props.generations}
      </div>
    );
  }
}

const mapStateToProps = ({counter}) => {
  return { generations: counter }
};

export default connect(mapStateToProps)(Counter);
