var logo;

do {
  logo = document.getElementById("belgrave");
} while (logo == null);

var turn = 0;
var x = setInterval(function() {
  if (turn == 0) {
  	logo.style.width = "600px";
  	turn = 1;
  }
  else
  {
  	logo.style.width = "500px";
  	turn = 0;
  }

}, 230);