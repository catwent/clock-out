//put day of week in hour hand
// const d = new Date();
//
// const weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//
// let day = weekday[d.getDay()];
// document.getElementById("hour").innerHTML = day;


// grab a reference of every hands

// hour hand
let hourHand = document.querySelector('.hour');
// second hand
let secondHand = document.querySelector('.second');

// function that rotates the hands
function rotate() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(rotate, 1000);
