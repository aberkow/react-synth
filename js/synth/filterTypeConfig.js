var duoSynth = require('./duoSynth');

var filterTypeConfig = {
  filterChoices: ['lowpass', 'highpass', 'bandpass', 'low shelf', 'high shelf', 'notch', 'all pass', 'peaking'],
  filterTypeAssign0: function(data){
    duoSynth.voice0.filter._type = data.text;
  },
  filterTypeAssign1: function(data){
    duoSynth.voice1.filter._type = data.text;
  }
}

module.exports = filterTypeConfig;
