var tone = require('tone');
//synth needs to be created outside of nx.onload.
//otherwise the synth won't release the note.
var synth = new tone.MonoSynth().toMaster();

nx.onload = function(){
  console.log('loaded');
  keyboard.on('*', function(data){
    console.log(data);
    //create a new synth
    // var synth = new tone.MonoSynth().toMaster();
    var frequency;
    if (data.on > 0){
      //convert the midi note to frequency
      frequency = nx.mtof(data.note);
      //trigger the synth at the frequency
      synth.triggerAttack(frequency);
    } else if (data.on === 0) {
      synth.triggerRelease();
    }
  });
}

module.exports = nx;
