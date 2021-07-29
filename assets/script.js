// todays date

var currentTime = $("#currentDay");

currentTime.text(moment().format("dddd, MMM Do: hh:00:00 a"));


for (let i = 9; i <= 17; i++) {
  var mainContainer = $(".container");
  var newDiv = $("<div>");
  var newP = $("<p>");
  var newTextArea = $("<textarea>");
  var newBtn = $("<button>");
  var newI = $("<i>");

  
  mainContainer.append(newDiv);
  newDiv.addClass("time-block row");

  newDiv.append(newP);
  newP.addClass("hour col-2 col-md-1 pt-3 pl-1 text-uppercase");
  newP.text(i + "00");

  newDiv.append(newTextArea);
  newTextArea.addClass("description col-8 col-md-10 p-2");
  newTextArea.attr("id", `textArea${i}`);

  newDiv.append(newBtn);
  newBtn.addClass("saveBtn col-2 col-md-1");
  newBtn.attr("id", `save${i}`);

  newBtn.append(newI);
  newI.addClass("fas fa-save");

  var saveID9 = $(`#save9`);
  var textArea9 = $(`#textArea9`);

  var time900 = localStorage.getItem("time900");
  textArea9.text(time900);
  saveID9.on("click", function () {
    localStorage.setItem("time900", textArea9.val());
  });

  var saveID10 = $(`#save10`);
  var textArea10 = $(`#textArea10`);

  var time1000 = localStorage.getItem("time1000");
  textArea10.text(time1000);
  saveID10.on("click", function () {
    localStorage.setItem("time1000", textArea10.val());
  });

  var saveID11 = $(`#save11`);
  var textArea11 = $(`#textArea11`);

  var time1100 = localStorage.getItem("time1100");
  textArea11.text(time1100);
  saveID11.on("click", function () {
    localStorage.setItem("time1100", textArea11.val());
  });

  var saveID12 = $(`#save12`);
  var textArea12 = $(`#textArea12`);

  var time1200 = localStorage.getItem("time1200");
  textArea12.text(time1200);
  saveID12.on("click", function () {
    localStorage.setItem("time1200", textArea12.val());
  });

  var saveID13 = $(`#save13`);
  var textArea13 = $(`#textArea13`);

  var time1300 = localStorage.getItem("time1300");
  textArea13.text(time1300);
  saveID13.on("click", function () {
    localStorage.setItem("time1300", textArea13.val());
  });

  var saveID14 = $(`#save14`);
  var textArea14 = $(`#textArea14`);

  var time1400 = localStorage.getItem("time1400");
  textArea14.text(time1400);
  saveID14.on("click", function () {
    localStorage.setItem("time1400", textArea14.val());
  });

  var saveID15 = $(`#save15`);
  var textArea15 = $(`#textArea15`);

  var time1500 = localStorage.getItem("time1500");
  textArea15.text(time1500);
  saveID15.on("click", function () {
    localStorage.setItem("time1500", textArea15.val());
  });

  var saveID16 = $(`#save16`);
  var textArea16 = $(`#textArea16`);

  var time1600 = localStorage.getItem("time1600");
  textArea16.text(time1600);
  saveID16.on("click", function () {
    localStorage.setItem("time1600", textArea16.val());
  });

  var saveID17 = $(`#save17`);
  var textArea17 = $(`#textArea17`);

  var time1700 = localStorage.getItem("time1700");
  textArea17.text(time1700);
  saveID17.on("click", function () {
    localStorage.setItem("time1700", textArea17.val());
  });


  var time = new Date().getHours();
  console.log(time);

  function changeColor() {
    schedulerTime = 9;
    if (schedulerTime == time) {
      textArea9.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea9.css("background-color", "lightgreen");
    } else {
      textArea9.css("background-color", "lightgray");
    }

    schedulerTime = 10;
    if (schedulerTime == time) {
      textArea10.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea10.css("background-color", "lightgreen");
    } else {
      textArea10.css("background-color", "lightgray");
    }

    schedulerTime = 11;
    if (schedulerTime == time) {
      textArea11.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea11.css("background-color", "lightgreen");
    } else {
      textArea11.css("background-color", "lightgray");
    }

    schedulerTime = 12;
    if (schedulerTime == time) {
      textArea12.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea12.css("background-color", "lightgreen");
    } else {
      textArea12.css("background-color", "lightgray");
    }

    schedulerTime = 13;
    if (schedulerTime == time) {
      textArea13.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea13.css("background-color", "lightgreen");
    } else {
      textArea13.css("background-color", "lightgray");
    }

    schedulerTime = 14;
    if (schedulerTime == time) {
      textArea14.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea14.css("background-color", "lightgreen");
    } else {
      textArea14.css("background-color", "lightgray");
    }

    schedulerTime = 15;
    if (schedulerTime == time) {
      textArea15.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea15.css("background-color", "lightgreen");
    } else {
      textArea15.css("background-color", "lightgray");
    }

    
    schedulerTime = 16;
    if (schedulerTime == time) {
      textArea16.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea16.css("background-color", "lightgreen");
    } else {
      textArea16.css("background-color", "lightgray");
    }

    schedulerTime = 17;
    if (schedulerTime == time) {
      textArea17.css("background-color", "#ff00008c");
    } else if (schedulerTime > time) {
      textArea17.css("background-color", "lightgreen");
    } else {
      textArea17.css("background-color", "lightgray");
    }
  }
  changeColor();
}
