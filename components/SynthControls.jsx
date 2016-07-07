import React from 'react';
var SynthVoiceWave = require('./SynthVoiceWave');

class SynthControls extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='synthControls'>
        <h2 className='synthControls__title'>Synth Controls</h2>
        <SynthVoiceWave />
      </div>
    );
  }
};

module.exports = SynthControls;
