$(".saveEvent").on("click", function() {
    buttonPressed = $(this).val();
    alert("You pressed the " + buttonPressed + " Save Button.")
    /*$("#operator").text($(this).text());  */

  });

  $(document).ready(function(){
      var currentDayEl = $("p.currentDay");
      currentDayEl.text(moment().format('MMMM Do YYYY'));
   });
