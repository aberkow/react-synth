var tone = require('tone');

var sampler = new tone.Sampler({
  0: '../js/waveform/studderSchool.wav'
}, {
  player: {
    loop: true,
  }
}).toMaster();

//loading samples needs to occur outside nx.onload but during componentWillMount
tone.Buffer.on('load', function(){
  waveform1.setBuffer(sampler._buffers[0]._buffer);
  waveform1.select(0, 500);
});

nx.onload = function(){
  //trigger the waveform sampler.
  toggle1.on('*', function(data){
    if (data.value === 1){
      sampler.triggerAttack('0');
    } else {
      sampler.triggerRelease();
    }
  });
  //control the length of the sampler loop.
  waveform1.on('*', function(data){
    sampler.player.setLoopPoints(data.starttime/1000, data.stoptime/1000);
  });
}

module.exports = nx;
