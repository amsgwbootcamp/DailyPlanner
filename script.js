function loadTextFields()
{
  var getText1 = localStorage.getItem("9"); 
  if (getText1 !== null)
  {
    var timeSlot = $(".nineInfo");
    timeSlot.val(getText1);
  }
  else
  {
    var timeSlot = $(".nineInfo");
    timeSlot.val("");
  }

  var getText2 = localStorage.getItem("10");
  if (getText2 !== null)
  {
    var timeSlot = $(".tenInfo");
    timeSlot.val(getText2);
  }
  else
  {
    var timeSlot = $(".tenInfo");
    timeSlot.val("");
  }

  var getText3 = localStorage.getItem("11");
  if (getText3 !== null)
  {
    var timeSlot = $(".elevenInfo");
    timeSlot.val(getText3);
  }
  else
  {
    var timeSlot = $(".elevenInfo");
    timeSlot.val("");
  }

  var getText4 = localStorage.getItem("12");
  if (getText4 !== null)
  {
    var timeSlot = $(".twelveInfo");
    timeSlot.val(getText4);
  }
  else
  {
    var timeSlot = $(".twelveInfo");
    timeSlot.val("");
  }

  var getText5 = localStorage.getItem("1");
  if (getText5 !== null)
  {
    var timeSlot = $(".oneInfo");
    timeSlot.val(getText5);
  }
  else
  {
    var timeSlot = $(".oneInfo");
    timeSlot.val("");
  }

  var getText6 = localStorage.getItem("2");
  if (getText6 !== null)
  {
    var timeSlot = $(".twoInfo");
    timeSlot.val(getText6);
  }
  else
  {
    var timeSlot = $(".twoInfo");
    timeSlot.val("");
  }

  var getText7 = localStorage.getItem("3");
  if (getText7 !== null)
  {
    var timeSlot = $(".threeInfo");
    timeSlot.val(getText7);
  }
  else
  {
    var timeSlot = $(".threeInfo");
    timeSlot.val("");
  }

  var getText8 = localStorage.getItem("4");
  if (getText8 !== null)
  {
    var timeSlot = $(".fourInfo");
    timeSlot.val(getText8);
  }
  else
  {
    var timeSlot = $(".fourInfo");
    timeSlot.val("");
  }

  var getText9 = localStorage.getItem("5");
  if (getText9 !== null)
  {
    var timeSlot = $(".fiveInfo");
    timeSlot.val(getText9);
  }
  else
  {
    var timeSlot = $(".fiveInfo");
    timeSlot.val("");
  }
}

function saveEvent (event) 
{
  buttonPressed = $(event).val();
  
  switch(buttonPressed)
  {
    case "9":
      var timeSlot = $(".nineInfo");
      localStorage.setItem("9",timeSlot.val());
      break;
    case "10":
      var timeSlot = $(".tenInfo");
      localStorage.setItem("10",timeSlot.val());
      break;
    case "11":
      var timeSlot = $(".elevenInfo");
      localStorage.setItem("11",timeSlot.val());
      break;
    case "12":  
      var timeSlot = $(".twelveInfo");
      localStorage.setItem("12",timeSlot.val());
      break;
    case "13":  
      var timeSlot = $(".oneInfo");
      localStorage.setItem("1",timeSlot.val());
      break;
    case "14":  
      var timeSlot = $(".twoInfo");
      localStorage.setItem("2",timeSlot.val());
      break;    
    case "15":  
      var timeSlot = $(".threeInfo");
      localStorage.setItem("3",timeSlot.val());
      break;
    case "16":  
      var timeSlot = $(".fourInfo");
      localStorage.setItem("4",timeSlot.val());
      break;      
    case "17":  
      var timeSlot = $(".fiveInfo");
      localStorage.setItem("5",timeSlot.val());
      break;    
  }
}

$(".saveEvent").on("click", function() {
    saveEvent(this);
    loadTextFields();
  });

  $(".reset").on("click", function() {
    localStorage.clear();
    loadTextFields();
  });  

$(document).ready(function(){
    
  var currentDayEl = $("p.currentDay");
  var currDate = moment().format('MMMM Do YYYY');
  var currDay = moment().format('dddd');
  currentDayEl.text(currDay + " " + currDate);
  console.log( moment({h:0, m:0, s:0, ms:0}).format('YYYY-MM-DD HH:mm:ss') )
  var hourCheck = moment().format('HH');
  var row = $(".row");
  for (var i = 0; i < row.length; i++) 
  {
    if (hourCheck === row[i].id)
    {
      var col = $(".col");
      row[i].style.backgroundColor = "red";
      row[i].style.color = "black";
    }
    else if (parseInt(hourCheck) < parseInt(row[i].id))
    {
      row[i].style.backgroundColor = "gray";
      row[i].style.color = "black";
    }
    else
    {
      row[i].style.backgroundColor = "green";
      row[i].style.color = "black";
    }
  }
     
  loadTextFields();
    
});
