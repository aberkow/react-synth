var tone = require('tone');
var duoSynth = require('./synth/duoSynth');

var voiceWaveConfig = require('./synth/voiceWaveConfig');
//synth needs to be created outside of nx.onload.
//otherwise the synth won't release the note.
// var synth = new tone.MonoSynth().toMaster();

nx.onload = function(){
  console.log('nx loaded');
  keyboard.on('*', function(data){
    //create a new synth
    // var synth = new tone.MonoSynth().toMaster();
    var frequency;
    if (data.on > 0){
      //convert the midi note to frequency
      frequency = nx.mtof(data.note);
      //trigger the synth at the frequency
      duoSynth.triggerAttack(frequency);
    } else if (data.on === 0) {
      duoSynth.triggerRelease();
    }
  });
  //select waveforms for synthesizer
  voiceWave1.choices = voiceWaveConfig.waveChoices;
  // voiceWave1.init(); //call init() to populate the select boxes.
  voiceWave2.choices = voiceWaveConfig.waveChoices;
  // voiceWave2.init();
  voiceWave1.on('*', function(data){
    voiceWaveConfig.voiceWaveAssign0(data);
  });
  voiceWave2.on('*', function(data){
    voiceWaveConfig.voiceWaveAssign1(data);
  });
}

module.exports = nx;
