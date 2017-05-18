var logo = document.getElementById("logo");
var turn = 0;


logo.onclick = function() {
  window.location.href = "index.html";
}


var turn = 0;
var x = setInterval(function() {
  if (turn == 0) {
    logo.style.width = "650px";
    turn = 1;
  }
  else {
    logo.style.width = "550px";
    turn = 0;
  }

}, 230);