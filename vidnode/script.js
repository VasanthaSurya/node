class video {
    constructor() {
  
    }
  
  }
  // var fs = require('fs');
  // var files = fs.readdirSync('.');
  // var files = document.getElementById("get-files");
  // console.log(files.value);
  var vid = document.getElementsByClassName("mv");
  var vid2 = document.getElementsByClassName("vid2");
  // console.log(vid);
    function Play() {
      // console.log(vid);
      for (var i = 0; i < 12; i++) {
        vid[i].play();
      }
      // vid[0].play();
    }

    function Play2() {
        for (var i = 0; i < 6; i++) {
          vid2[i].play();
        }
    }
  
    function Pause() {
      for (var i = 0; i < 12; i++) {
        vid[i].pause();
      }
    }

    function Pause2() {
        for (var i = 0; i < 6; i++) {
          vid2[i].pause();
        }
      }
    
    function seekF() {
        for (var i = 0; i < 12 ;i++){
            vid[i].currentTime += 10
        }
    }
  
    function seekF5() {
        var j = 1;
        for (var i = 0; i < 6 ;i++){
            vid2[i].currentTime += j;
            j+=0.5
        }
    }

    function seekF10() {
        var j = 1;
        for (var i = 0; i < 6 ;i++){
            vid2[i].currentTime += j;
            j+=1
        }
    }

    function seekB() {
        for (var i = 0; i < 12 ;i++){
            vid2[i].currentTime -= 10
        }
    }

    function seekB5() {
        var j = 1;
        for (var i = 0; i < 6 ;i++){
            vid2[i].currentTime -= j;
            j+=0.5;
        }
    }

    function seekB10() {
        var j = 1;
        for (var i = 0; i < 6 ;i++){
            vid2[i].currentTime -= j;
            j+=1;
        }
    }

    function seekstart(){
        for (var i = 0 ; i < 12 ; i++){
            vid[i].currentTime = 0
        }
    }
  
    function seekstart2(){
        for (var i = 0 ; i < 6 ; i++){
            vid2[i].currentTime = 0
        }
    }

    function seektoM() {
      var tm = document.getElementById('st').value;
      // console.log(tm);
        for (var i = 0; i < 12 ;i++){
            vid[i].currentTime = tm*60;
        }
    }

    function seektoM2() {
        var tm = document.getElementById('st2').value;
        // console.log(tm);
        var t = 1;
          for (var i = 0; i < 6 ;i++){
              vid2[i].currentTime = tm*60+t;
              t+=1.5;
          }
      }
  
    function seektoS() {
      var ts = parseInt(document.getElementById('sts').value);
      // console.log(tm);
        for (var i = 0; i < 12 ;i++){
            console.log(vid[i].currentTime);
            vid[i].currentTime += ts;
        }
    }
  
    function playspd() {
      // console.log(vid);
      for (var i = 0; i < 12; i++) {
        if (vid[i].playbackRate === 1){
          vid[i].playbackRate = 1.5;
        }
        else if (vid[i].playbackRate === 1.5) {
          vid[i].playbackRate = 2.0;
        }
        else if (vid[i].playbackRate === 1.5) {
            vid[i].playbackRate = 2.0;
          }
          else if (vid[i].playbackRate === 2.0) {
            vid[i].playbackRate = 0.5;
          }
        else {
          vid[i].playbackRate = 1;
        }
      }
    }
    function playspd2() {
        // console.log(vid);
        for (var i = 0; i < 6; i++) {
          if (vid2[i].playbackRate === 1){
            vid2[i].playbackRate = 1.5;
          }
          else if (vid2[i].playbackRate === 1.5) {
            vid2[i].playbackRate = 2.0;
          }
          else if (vid2[i].playbackRate === 1.5) {
              vid2[i].playbackRate = 2.0;
            }
            else if (vid2[i].playbackRate === 2.0) {
              vid2[i].playbackRate = 0.5;
            }
          else {
            vid2[i].playbackRate = 1;
          }
        }
      }
    function seekcurrent() {
        for (var i = 0; i < 12 ;i++){
          if (vid[i].paused === false) {
                vid[i].currentTime += 10
                console.log(vid[i]);
          }
        }
    }
  