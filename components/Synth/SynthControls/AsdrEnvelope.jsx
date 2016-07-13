import React from 'react';
//import duoSynth from '../../../js/synth/duoSynth';

class AsdrEnvelope extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
          <canvas className='synthControls__envelope' data-nx='envelope' id='asdr1'></canvas>
          <canvas className='synthControls__envelope' data-nx='envelope' id='asdr2'></canvas>
        </div>
    );
  }
};

module.exports = AsdrEnvelope;
