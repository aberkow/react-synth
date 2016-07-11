var tone = require('tone');

var sampler = new tone.Sampler({
  0: './studderSchool.wav'
}, {
  player: {
    loop: true,
  }
}).toMaster();

tone.Buffer.on('load', function(){
  waveform1.setBuffer(sampler._buffers[0]._buffer);
  waveform1.select(0, 500);
});

module.exports = waveformConfig;
