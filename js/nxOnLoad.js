var tone = require('tone');
var duoSynth = require('./synth/duoSynth');

var voiceWaveConfig = require('./synth/voiceWaveConfig');

//synth and sampler need to be created outside of nx.onload.
//otherwise the synth won't release the note.


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
  voiceWave1.init(); //call init() to populate the select boxes. Doesn't work with react?
  voiceWave2.choices = voiceWaveConfig.waveChoices;
  voiceWave2.init();
  voiceWave1.on('*', function(data){
    voiceWaveConfig.voiceWaveAssign0(data);
  });
  voiceWave2.on('*', function(data){
    voiceWaveConfig.voiceWaveAssign1(data);
  });

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
