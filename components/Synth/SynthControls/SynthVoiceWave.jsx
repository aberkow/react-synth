import React from 'react';

class SynthVoiceWave extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='voiceWave__wrapper'>
        <canvas className='synthControls__waves' data-nx='select' id='voiceWave1'></canvas>
        <canvas className='synthControls__waves' data-nx='select' id='voiceWave2'></canvas>
      </div>
    );
  }
};

module.exports = SynthVoiceWave;
