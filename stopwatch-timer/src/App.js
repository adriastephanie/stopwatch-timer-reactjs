import React, { Component} from 'react';
import cronometro from './assets/cronometro.png';
import './App.css';

class App extends Component{

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className='img'/>
        <a className='timer'>0.0</a>
        <div className='areaBtn'>
          <a className='btn'>START</a> <br />
          <a className='btn'>STOP</a>
        </div>
      </div>

    );
  }

}

export default App;
