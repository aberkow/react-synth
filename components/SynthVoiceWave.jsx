import React from 'react';

class SynthVoiceWave extends React.Component{
  constructor(props){
    super(props);
  }
  // componentDidMount(){
  //   voiceWave1.init();
  //   voiceWave2.init();
  // }
  render(){
    return(
      <div className='voiceWave__wrapper'>
        <canvas className='synthControls__waves' nx='select' id='voiceWave1'></canvas>
        <canvas className='synthControls__waves' nx='select' id='voiceWave2'></canvas>
      </div>
    );
  }
};

module.exports = SynthVoiceWave;
