// var tone = require('tone');
// var studderSchool = './studderSchool.wav';
//
// var sampler = new tone.Sampler({
//   0: studderSchool
// }, {
//   player: {
//     loop: true
//   }
// }).toMaster();
//
// var waveformConfig = tone.Buffer.on('load', function(){
//   waveform1.setBuffer(sampler._buffers[0]._buffer);
//   waveform1.select(0, 500);
// });
//
// sampler.exports = sampler;
// waveformConfig.exports = waveformConfig;



// module.exports = {
//   sampler: new tone.Sampler({
//     0: './studderSchool.wav'
//   }, {
//     player: {
//       loop: true
//     }
//   }),
//   loadSampler: tone.Buffer.on('load', function(){
//     waveform1.setBuffer(sampler._buffers[0]._buffer);
//     waveform1.select(0, 500);
//   })
// };
//


// var tone = require('tone');
//

//turn this into a function that can be exported


// var sampler = new tone.Sampler({
//   0: './studderSchool.wav'
// }, {
//   player: {
//     loop: true,
//   }
// }).toMaster();
//
