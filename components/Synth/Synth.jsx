import React from 'react';

//Components
// import Keyboard from './Keyboard';
//import SynthControls from './SynthControls/SynthControls';

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
    //this.loadOnce = this.loadOnce.bind(this);
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
    //window.addEventListener('load', nx.onload());
  }
  // loadOnce(){
  //   window.location.hash.reload();
  // } onLoad={this.loadOnce}
  render(){

    return(
      <div>
        <h2>Load Test</h2>
          
          <div className='keyboard'>
            <canvas id="keyboard" className='keyboard__ui nx' data-nx='keyboard'  height="150" width="600"></canvas>
          </div>
          <div className='voiceWave__wrapper'>
            <canvas className='synthControls__waves' data-nx='select' id='voiceWave1'></canvas>
            <canvas className='synthControls__waves' data-nx='select' id='voiceWave2'></canvas>
          </div>
          <div>
            <canvas className='synthControls__envelope' data-nx='envelope' id='asdr1'></canvas>
            <canvas className='synthControls__envelope' data-nx='envelope' id='asdr2'></canvas>
          </div>
          <div>
            <canvas className='position' data-nx='position' id='vibrato'></canvas>
            <canvas className='synthControls__dial' data-nx='dial' id='harmonicity'></canvas>
          </div>
          <div>
            <canvas className='synthControls__filters' data-nx='select' id='filterType1'></canvas>
            <canvas className='synthControls__filters' data-nx='select' id='filterType2'></canvas>
          </div>
          <div>
            <canvas class="synthControls__envelope" data-nx='envelope' id="filterAsdr1"></canvas>
            <canvas class="synthControls__envelope" data-nx='envelope' id="filterAsdr2"></canvas>
          </div>
          <div>
            <canvas id="qAndFreq1" data-nx='position' class="position"></canvas>
            <canvas id="qAndFreq2" data-nx='position' class="position"></canvas>
          </div>
      </div>
    );
  }
};

// <Keyboard />
// <SynthControls />

module.exports = Synth;
