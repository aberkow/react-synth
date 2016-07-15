import React from 'react';

//Components
import Keyboard from './Keyboard';
import SynthControls from './SynthControls/SynthControls';

//synth and config files
import duoSynth from '../../js/synth/duoSynth';
import filterTypeConfig from '../../js/synth/filterTypeConfig';
import harmonicityConfig from '../../js/synth/harmonicityConfig';
import qAndFreqConfig from '../../js/synth/qAndFreqConfig';
import vibratoConfig from '../../js/synth/vibratoConfig';
import voiceWaveConfig from '../../js/synth/voiceWaveConfig';

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
      //asdr envelopes
      asdr1.on('*', function(data){
        var envelope = duoSynth.voice0.envelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      asdr2.on('*', function(data){
        var envelope = duoSynth.voice1.envelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      //vibrato
      vibrato.on('*', function(data){
        vibratoConfig(data);
      });
      //harmonicity
      harmonicity.set({ value: 0.5 });
      harmonicity.on('*', function(data){
        harmonicityConfig(data);
      });
      //filter select
      filterType1.choices = filterTypeConfig.filterChoices;
      filterType1.init(); //call init() to populate the select boxes.
      filterType2.choices = filterTypeConfig.filterChoices;
      filterType2.init();
      filterType1.on('*', function(data){
        filterTypeConfig.filterTypeAssign0(data);
      });
      filterType2.on('*', function(data){
        filterTypeConfig.filterTypeAssign1(data);
      });
      //filter asdr
      filterAsdr1.on('*', function(data){
        var envelope = duoSynth.voice0.filterEnvelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      filterAsdr2.on('*', function(data){
        var envelope = duoSynth.voice1.filterEnvelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      //filter Q and frequency
      qAndFreq1.on('*', function(data){
        qAndFreqConfig.qFreq0(data);
      });
      qAndFreq2.on('*', function(data){
        qAndFreqConfig.qFreq1(data);
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
