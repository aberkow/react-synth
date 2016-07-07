var tone = require('tone');

var duoSynth = new tone.DuoSynth().toMaster();

module.exports = duoSynth;
