import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRandomGrid, tick, startPlaying, stopPlaying, clear } from '../actions/';

import Button from '../components/button'

class Control extends Component {
  componentDidMount(){
    this.props.random();
    this.togglePlay();
  }
  render(){
    return (
      <div className="controls">
        <Button
          handleClick={() => this.props.random()}
          title={'Randomise'}
        />
       <Button
          handleClick={() => this.clear()}
          title={'Clear'}
        />
       <Button
          handleClick={() => this.props.tick()}
          title={'Step'}
        />
        <Button
          title={'Play / Pause'}
          handleClick={() => this.togglePlay()}
        />
      </div>
    );
  }
  togglePlay(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    } else {
      let interval = setInterval(this.props.tick,100);
      this.props.startPlaying(interval);
    }
  }
  clear(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    }
      this.props.clear();
  }
}


const mapStateToProps = ({playState}) => {
  return { playState };
}

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(makeRandomGrid()),
    tick: () => dispatch(tick()),
    startPlaying: (timerId) => dispatch(startPlaying(timerId)),
    stopPlaying: () => dispatch(stopPlaying()),
    clear: () => dispatch(clear())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Control)
