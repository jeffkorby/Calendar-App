// Display today's date.
var Today = moment().format("dddd, MMMM Do")
$("#currentDay").text(Today);

function colorUpdater () {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));
        console.log (timeBlock)

        if (timeBlock < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

colorUpdater();