import React, { Component} from 'react';
import cronometro from './assets/cronometro.png';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Start'
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

  }

  start() {

    let state = this.state; 

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    }else{
      this.timer = setInterval(() =>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100 );
      state.botao = 'PAUSE';
    }
    this.setState(state)
  }

  stop(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'START';
    this.setState(state);

  }

  render(){
    return(
      <div data-testid='form-field' className='container'>
        <img src={cronometro} className='img'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <button data-testid='button-field-start' className='btn' onClick={this.start}>{this.state.botao} </button> <br />
          <button data-testid='button-field-stop' className='btn' onClick={this.stop}>STOP</button>
        </div>
      </div>

    );
  }

}

export default App;
