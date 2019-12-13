let todaysDate = document.querySelector("#todaysDate");
const saveBtn = document.querySelectorAll(".saveBtn");

// sets the moment 
let now = moment();

// set todaysDate and format using moment JS
todaysDate = now.format("dddd, MMMM Do"); 
// append todaysDate to the page
$("#todaysDate").append(todaysDate);

let currentHour = now.hour();
console.log(currentHour)


    // grab the inputs
    const inputs = $('.form-control')

    // loop through all of the inputs
    for (let i = 0; i < inputs.length; i++) {

        // Get all elements that contain a data-hour attribute
        let dataId = ($(inputs[i]).siblings(".input-group-text").attr("data-hour"))
        console.log(dataId)

        if(dataId < currentHour){
            // if the input value is less than the current hour
            $(".input-group-text").addClass("past");
        } else if (dataId === currentHour){
            // if the input value is equal to the current hour
            $(".input-group-text").addClass("present");
        } else if (dataId > currentHour){
            // if the input value is greater than the current hour
            $(".input-group-text").addClass("future");
        }
    }


// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

function saveText () {

    if (inputs !== ""){
        // key : value to save input text
        const hour = {
            hour9: $("#hour9").val(),
            hour10: $("#hour10").val(),
            hour11: $("#hour11").val(),
            hour12: $("#hour12").val(),
            hour13: $("#hour13").val(),
            hour14: $("#hour14").val(),
            hour15: $("#hour15").val(),
            hour16: $("#hour16").val(),
            hour17: $("#hour17").val()
        };

        console.log(hour)

        // sets the key "hour" and stringifies the object - hour
        localStorage.setItem("hour", JSON.stringify(hour));
    }
}

// gets the "hour" from localstorage and parse (into object)
let hourEvent = JSON.parse(localStorage.getItem("hour"));

console.log(hourEvent)

// sets the value of each input to local storage value (to keep the text on the page on reload)
$("#hour9").val(hourEvent.hour9);
$("#hour10").val(hourEvent.hour10);
$("#hour11").val(hourEvent.hour11);
$("#hour12").val(hourEvent.hour12);
$("#hour13").val(hourEvent.hour13);
$("#hour14").val(hourEvent.hour14);
$("#hour15").val(hourEvent.hour15);
$("#hour16").val(hourEvent.hour16);
$("#hour17").val(hourEvent.hour17);

// click event on the save button
$(".saveBtn").on("click", saveText);
