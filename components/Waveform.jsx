import React from 'react';
//import waveformConfig from '../js/waveform/waveformConfig';
import tone from 'tone';

class Waveform extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    //refactor this into waveformConfig.js later.
    // var sampler = new tone.Sampler({
    //   0: '../js/waveform/studderSchool.wav'
    // }, {
    //   player: {
    //     loop: true,
    //   }
    // }).toMaster();
    //
    // tone.Buffer.on('load', function(){
    //   waveform1.setBuffer(sampler._buffers[0]._buffer);
    //   waveform1.select(0, 500);
    // });
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
