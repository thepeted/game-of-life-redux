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
        <div className="buttons">
          <Button
            handleClick={() => this.props.random()}
            title={'Randomise'}
            icon={'fa fa-random'}
          />
         <Button
            handleClick={() => this.clear()}
            title={'Clear'}
            icon={'fa fa-undo'}
          />
         <div className="button-group">
            <Button
              icon={this.props.playState.isRunning ? 'fa fa-pause' : 'fa fa-play' }
              handleClick={() => this.togglePlay()}
            />
            <Button
               handleClick={() => this.props.tick()}
               icon={'fa fa-step-forward'}
             />
          </div>
        </div>
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
