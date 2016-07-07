var duoSynth = require('./duoSynth');

var voiceWaveConfig = {
  waveChoices: ['sine', 'sawtooth', 'square', 'triangle'],
  voiceWaveAssign0: function(data){
    duoSynth.voice0.oscillator.type = data.text;
  },
  voiceWaveAssign1: function(data){
    duoSynth.voice1.oscillator.type = data.text;
  }
}

module.exports = voiceWaveConfig;
