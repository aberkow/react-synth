import React from 'react';
//import waveformConfig from '../js/waveform/waveformConfig';
import tone from 'tone';

class Waveform extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='waveform'>
        <canvas data-nx='toggle'></canvas>
        <canvas data-nx='waveform'></canvas>
      </div>
    );
  }
};

module.exports = Waveform;
