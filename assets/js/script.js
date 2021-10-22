//Get current Date
var currentDate = moment().format("dddd, MMM Do YYYY");

//Get current time
var currentTime;
var getTimeStamp = setInterval(getTime, 1000);

function getTime() {
  currentTime = moment().format("h:mm:ss a");
  $("#currentDay").text(currentDate + " | " + currentTime);
}

//When I click the Edit Button a form is created inside the respective textbox
$(".timeEdit").click(enterSave);

function enterSave(e) {
  console.log(e.target.parentNode.id);
}
