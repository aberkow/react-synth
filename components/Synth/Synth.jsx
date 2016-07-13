import React from 'react';

import Keyboard from './Keyboard';
import SynthControls from './SynthControls/SynthControls';

import duoSynth from '../../js/synth/duoSynth';
import voiceWaveConfig from '../../js/synth/voiceWaveConfig';
//import nxSynthOnLoad from '../../js/synth/nxSynthOnLoad';
//import nx from '../../js/nxOnLoad';

class Synth extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('nxSynthOnLoad from Synth');
    nx.onload = function(){
      keyboard.on('*', function(data){
        var frequency;
        if (data.on > 0){
          frequency = nx.mtof(data.note);
          duoSynth.triggerAttack(frequency);
        }
        else if (data.on === 0) {
          duoSynth.triggerRelease();
        }
      });
      //select waveforms for synthesizer
      voiceWave1.choices = voiceWaveConfig.waveChoices;
      voiceWave1.init(); //call init() to populate the select boxes. Doesn't work with react?
      voiceWave2.choices = voiceWaveConfig.waveChoices;
      voiceWave2.init();
      voiceWave1.on('*', function(data){
        voiceWaveConfig.voiceWaveAssign0(data);
      });
      voiceWave2.on('*', function(data){
        voiceWaveConfig.voiceWaveAssign1(data);
      });
    };
  }
  render(){
    return(
      <div>
        <Keyboard />
        <SynthControls />
      </div>
    );
  }
};

module.exports = Synth;
