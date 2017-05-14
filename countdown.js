// Set the date we're counting down to.
var countDownDate = new Date("June 9, 2017 20:00:00").getTime();
var demo, daysD, hoursD, minutesD, secondsD;
var now, distance, days, hours, minutes, seconds;


do {
  daysD = document.getElementById("d_d");
} while (daysD == null);

do {
  hoursD = document.getElementById("d_h");
} while (hoursD == null);

do {
  minutesD = document.getElementById("d_m");
} while (minutesD == null);

do {
  secondsD = document.getElementById("d_s");
} while (secondsD == null);


// Update the count down every 1 second.
var x = setInterval(function() {

  // Get todays date and time.
  now = new Date().getTime();

  // Find the distance between now an the count down date.
  distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds.
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance > 0) {
    daysD.innerHTML = days;
    hoursD.innerHTML = hours;
    minutesD.innerHTML = minutes;
    secondsD.innerHTML = seconds;
  }
  else {
    clearInterval(x);
    document.getElementById("title").innerHTML = "IT'S TIME TO PARTY!!!";
  }

}, 1000);