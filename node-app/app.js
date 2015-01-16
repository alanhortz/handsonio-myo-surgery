var Myo = require("Myo");
var console = require("console");



var myMyo = Myo.create();

myMyo.on('connected', function(){
  myMyo.streamEMG(true);
});

myMyo.on('emg', function(data){ 
  console.log(data);
}); 

myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    console.log('Hello Myo!');
    myMyo.vibrate();
});

myMyo.on('pose', function(pose_name, edge){
    if(pose_name != 'rest' && edge){
        console.log('Started ', pose_name);
    }
});