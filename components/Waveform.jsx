import React from 'react';
//import waveformConfig from '../js/waveform/waveformConfig';
import tone from 'tone';

//import nxWaveformOnLoad from '../js/waveform/nxWaveformOnLoad';

//set sampler as a global variable. refactor to separate file later
//a la duoSynth.js
var sampler = new tone.Sampler({
  0: '../js/waveform/studderSchool.wav'
}, {
  player: {
    loop: true,
  }
}).toMaster();

class Waveform extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    //load the buffer with a sample
    tone.Buffer.on('load', function(){
      waveform1.setBuffer(sampler._buffers[0]._buffer);
      waveform1.select(0, 500);
    });
    //prepare the nx functions
    nx.onload = function(){
      //dial to control the pitch of the sampler
      // var samplerPitch;

      dial1.on('*', function(data){
        var samplerPitch = data.value.toString();
        return samplerPitch;
        console.log(samplerPitch, 'from dial');
      });

      //trigger the waveform sampler.
      toggle1.on('*', function(data){
        if (data.value === 1){
          sampler.triggerAttack('0');
          //sampler.triggerAttack(samplerPitch);
        } else {
          sampler.triggerRelease();
        }
      });
      //control the length of the sampler loop.
      waveform1.on('*', function(data){
        sampler.player.setLoopPoints(data.starttime/1000, data.stoptime/1000);
      });
    }
  }
  render(){
    return(
      <div className='waveform'>
        <canvas data-nx='toggle'></canvas>
        <canvas data-nx='waveform'></canvas>
        <canvas data-nx='dial' min='-12' max='12'></canvas>
      </div>
    );
  }
};

module.exports = Waveform;
