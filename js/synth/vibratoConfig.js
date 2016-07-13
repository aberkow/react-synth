var duoSynth = require('./duoSynth');

var vibratoConfig = function(data){
  var vibratoRate = nx.scale(data.x, 0.0, 1.0, 0.0, 20.0);
  duoSynth.vibratoAmount.input.value = data.y;
  duoSynth.vibratoRate.input.value = vibratoRate;
};

module.exports = vibratoConfig;
