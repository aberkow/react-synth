import tone from 'tone';

nx.onload = function(){
  console.log('loaded');
  keyboard.on('*', function(data){
    console.log(data);
  });
}

module.exports = nx;
