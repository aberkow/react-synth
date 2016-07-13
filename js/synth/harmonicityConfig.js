var duoSynth = require('./duoSynth');

var harmonicityConfig = function(data){
  var harmonicityRatio = nx.scale(data.value, 0.0, 1.0, 0.0, 2.0);
  duoSynth.harmonicity.value = harmonicityRatio;
}

module.exports = harmonicityConfig;
