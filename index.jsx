import React from 'react';
import ReactDOM from 'react-dom';

import Keyboard from './components/Keyboard';
import SynthControls from './components/SynthControls';
import Waveform from './components/Waveform';

import tone from 'tone';
import nx from './js/nxOnLoad';

class Container extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){
    console.log('componentWillMount');
    nx;
  }


  render(){
    return(
      <div className='container' >
        <h1>React Synth</h1>
        <Keyboard />
        <SynthControls />
        <Waveform />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container />, document.getElementById('app'));
});
