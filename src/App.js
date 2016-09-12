import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){
    super(props)

    this.state={
      board:['','','','','','','','',''],
      playerOne:'X',
      playerTwo:'Y',
      turn: 'X'
    }
  }

  clickHandler(index){
    if(this.state.board[index]===''){
      this.state.board[index] = this.state.turn
      this.setState({
        board: this.state.board,
        turn: this.state.turn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
      })
      this.checkForWinner();
    }
  }

  checkForWinner(){
    let winner = (this.state.board[0] === this.state.board[1] && this.state.board[1] === this.state.board[2]) ? true:false
    console.log(winner);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <div className='board'>
          {this.state.board.map((square,index) =>{
            return <div className='square' onClick={()=>this.clickHandler(index)} data-cell-id={index}>{this.state.board[index]}</div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
