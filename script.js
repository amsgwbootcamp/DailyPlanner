var nineInfo = "";
var tenInfo = "";
var elevenInfo = "";
var twelveInfo = "";
var oneInfo = "";
var twoInfo = "";
var threeInfo = "";
var fourInfo = "";
var fiveInfo = "";

$(".saveEvent").on("click", function() {
    buttonPressed = $(this).val();
    alert("You pressed the " + buttonPressed + " Save Button.");
    var timeSlot = $(".nineInfo");
    alert(timeSlot.val());
    
  });

  $(document).ready(function(){
      var currentDayEl = $("p.currentDay");
      var currDate = moment().format('MMMM Do YYYY');
      var currDay = moment().format('dddd');
      currentDayEl.text(currDay + " " + currDate);
   });
