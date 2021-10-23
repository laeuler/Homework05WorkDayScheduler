//======================================= Get current Date & Time
//Current Date
var currentDate = moment().format("dddd, MMM Do YYYY");

//Current Time (updated every second)
var currentTime;
setInterval(getTime, 1000); //every second

function getTime() {
  currentTime = moment().format("h:mm:ss a");
  $("#currentDay").text(currentDate + " | " + currentTime);
}

//======================================= Save and load plans from local storage
//Save value for respective time slot
$(".timeEdit").click(save);

function save(e) {
  //console.log(this);
  //save text in item to local storage
  var plans = $(this).siblings(".timePlans").val();
  var timeOfPlans = $(this).parent().attr("id");
  //console.log(plans);
  //save Plans in the respective time slot
  if ($(this).text() === "SAVE") {
    console.log("you can save it");
    localStorage.setItem(timeOfPlans, plans); //creates object of time and respective plans
  } else {
    alert("Slot is already in the past");
  }
}

//Load all available values for respective time slot
$(".timePlans").each(function () {
  var timeGet = $(this).parent().attr("id");
  //console.log(timeGet);
  $(this).val(localStorage.getItem(timeGet));
});

//======================================= Color Coding about the hour of the day
//Wrapping function to be called on start and each hour
function assignColor() {
  //Get the current hour
  var currentTimeSlot = moment().hour();
  //console.log(currentTimeSlot);

  //Get the hour out of the IDs we assigned through parsing
  $(".timeSlot").each(function () {
    //console.log($(this).attr("id"));
    var hourSlot = parseInt($(this).attr("id").split(["time"])[1]);
    //console.log(hourSlot);

    //apply color Coding for differnt case
    if (hourSlot < currentTimeSlot) {
      //console.log("slot is in the past");
      $(this).children(".timePlans").addClass("past");
      $(this).children(".timePlans").removeClass("future");
      $(this).children(".timePlans").removeClass("present");
      $(this).children(".timeEdit").text("✓");
    } else if (hourSlot === currentTimeSlot) {
      //console.log("slot is now");
      $(this).children(".timePlans").addClass("present");
      $(this).children(".timePlans").removeClass("past");
      $(this).children(".timePlans").removeClass("future");
      $(this).children(".timeEdit").text("SAVE");
      $(this).children(".timeHour").css("color", "crimson");
    } else {
      //console.log("slot is in the future");
      $(this).children(".timePlans").addClass("future");
      $(this).children(".timePlans").removeClass("past");
      $(this).children(".timePlans").removeClass("present");
      $(this).children(".timeEdit").text("SAVE");
    }
  });
}

assignColor();
