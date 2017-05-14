// Set the date we're counting down to.
var countDownDate = new Date("June 9, 2017 20:00:00").getTime();
var demo, daysD, hoursD, minutesD, secondsD;
var now, distance, days, hours, minutes, seconds;


var daysDividedBy = 1000 * 60 * 60 * 24;
var hoursDividedBy = 1000 * 60 * 60;
var minutesDividedBy = 1000 * 60;


daysD = document.getElementById("days");
hoursD = document.getElementById("hours");
minutesD = document.getElementById("minutes");
secondsD = document.getElementById("seconds");


function format2DigitCounter(number) {
  if (number < 10)
    return "0" + number;

  return number;
}


// Update the count down every 1 second.
var x = setInterval(function() {

  // Get todays date and time.
  now = new Date().getTime();

  // Find the distance between now an the count down date.
  distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds.
  days = Math.floor(distance / daysDividedBy);
  hours = Math.floor((distance % daysDividedBy) / hoursDividedBy);
  minutes = Math.floor((distance % hoursDividedBy) / minutesDividedBy);
  seconds = Math.floor((distance % minutesDividedBy) / 1000);

  if (distance > 0) {
    daysD.innerHTML = format2DigitCounter(days);
    hoursD.innerHTML = format2DigitCounter(hours);
    minutesD.innerHTML = format2DigitCounter(minutes);
    secondsD.innerHTML = format2DigitCounter(seconds);
  }
  else {
    clearInterval(x);
    document.getElementById("title").innerHTML = "IT'S TIME TO PARTY!!!";
  }

}, 1000);