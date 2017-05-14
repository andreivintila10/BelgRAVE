var logo = document.getElementById("belgrave");
var turn = 0;

logo.onclick = function() {
  window.location.href = "belgrave.html";
}


setInterval(function() {
  if (turn == 0) {
  	logo.style.width = "600px";
  	turn = 1;
  }
  else {
  	logo.style.width = "500px";
  	turn = 0;
  }

}, 230);