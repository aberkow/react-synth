var tone = require('tone');
var duoSynth = require('./duoSynth');
var voiceWaveConfig = require('./voiceWaveConfig');

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

module.exports = nx;
