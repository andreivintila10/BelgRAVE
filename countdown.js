// Set the date we're counting down to.
var countDownDate = new Date("June 9, 2017 20:00:00").getTime();
var demo, daysD, hoursD, minutesD, secondsD;


do {
  daysD = document.getElementById("days");
} while (daysD == null);

do {
  hoursD = document.getElementById("hours");
} while (hoursD == null);

do {
  minutesD = document.getElementById("minutes");
} while (minutesD == null);

do {
  secondsD = document.getElementById("seconds");
} while (secondsD == null);


// Update the count down every 1 second.
var x = setInterval(function() {
  // Get todays date and time.
  var now = new Date().getTime();

  // Find the distance between now an the count down date.
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo".
  // demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  daysD.innerHTML = days + "<p style=\"font-size:20px;\">d</p>";
  hoursD.innerHTML = hours + "<p style=\"font-size:20px;\">h</p>";
  minutesD.innerHTML = minutes + "<p style=\"font-size:20px;\">m</p>";
  secondsD.innerHTML = seconds + "<p style=\"font-size:20px;\">s</p>";

  // If the count down is finished, write some text.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);