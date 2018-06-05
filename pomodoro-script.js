var h1 = document.getElementsByTagName('h1')[0],
    switchToSession = true,
    switchToBreak = false,
    sessionLength = 25,
    breakLength = 5,
    seconds = 0,
    minutes = 0,
    t;

function add() {
    seconds++;
    if (switchToSession === true) {
      if (minutes < sessionLength) {
        if (seconds >= 60) { 
            seconds = 0;
            minutes++;
        }
      h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
      } else {
          seconds = 0,
          minutes = 0,
          h1.textContent = "00:00";
          switchToSession = false;
          switchToBreak = true;
          $("#clock").css("color", "#006401");
      }
    } else if (switchToBreak === true) {
       if (minutes < breakLength) {
          if (seconds >= 60) { 
            seconds = 0;
            minutes++;
        }
        h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        } else {
          seconds = 0,
          minutes = 0,
          h1.textContent = "00:00";
          switchToSession = true;
          switchToBreak = false;
          $("#clock").css("color", "black");
        }
      }
}

function timer() {
    t = setInterval(add, 1000);
}

$("#startButton").click(function() {
  timer();
  document.getElementById("startButton").disabled = true;
  document.getElementById("pauseButton").disabled = false;
});   
$("#pauseButton").click(function() {
  clearInterval(t);
  document.getElementById("startButton").disabled = false;
  document.getElementById("pauseButton").disabled = true;
});  
$("#resetButton").click(function() {
  clearInterval(t);
  seconds = 0,
  minutes = 0,
  h1.textContent = "00:00";
  document.getElementById("startButton").disabled = false;
});  


$("#pomPlus").click(function() {
  if (sessionLength < 60) {
    sessionLength++;
    $("#pomLength").html(sessionLength);
  }
});
$("#pomMinus").click(function() {
  if (sessionLength > 1) {
    sessionLength--;
    $("#pomLength").html(sessionLength);
  }
});

$("#breakPlus").click(function() {
  if (breakLength < 60) {
    breakLength++;
    $("#breakLength").html(breakLength);
  }
});
$("#breakMinus").click(function() {
  if (breakLength > 1) {
    breakLength--;
    $("#breakLength").html(breakLength);
  }
});