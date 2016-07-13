var duoSynth = require('./duoSynth');

var qAndFreqConfig = {
  qFreq0: function(data){
    var qValue = nx.scale(data.x, 0.0, 1.0, 0.0, 18.0);
    var freqValue = nx.scale(data.y, 0.0, 1.0, 30.0, 22000.0);
    duoSynth.voice0.filter.Q.input.value = qValue;
    duoSynth.voice0.filter.frequency.input.value = freqValue;
  },
  qFreq1: function(data){
    var qValue = nx.scale(data.x, 0.0, 1.0, 0.0, 18.0);
    var freqValue = nx.scale(data.y, 0.0, 1.0, 30.0, 22000.0);
    duoSynth.voice1.filter.Q.input.value = qValue;
    duoSynth.voice1.filter.frequency.input.value = freqValue;
  }
}

module.exports = qAndFreqConfig;
