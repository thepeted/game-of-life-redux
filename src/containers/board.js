import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleAlive } from '../actions/';
import Cell from '../components/cell';

class Board extends Component {
  render(){
    return (
      <div>
        <table>
          <tbody>
            {this.props.board.map((row,i) =>
              <tr key={i}> {row.map((cell,j) =>
                  <Cell
                    key={j}
                    alive={cell.status}
                    newBorn={cell.newBorn}
                    handleClick={() => this.props.toggleAlive(i,j)}
                     />)}
              </tr> )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ board }) => {
  return { board } ;
}

const mapDispatchToProps = (dispatch) => {
  return { toggleAlive: (x,y) => dispatch(toggleAlive(x,y)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
