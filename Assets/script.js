$(document).ready(function() {
    // Display today's date.
    var Today = moment().format("dddd, MMMM Do")
    $("#currentDay").text(Today);

    // Update hour color depending on time of day.
    function colorUpdater () {
        var currentTime = moment().hours();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"));
            console.log (timeBlock)

            if (timeBlock < currentTime) {
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    colorUpdater();

    // Save input to local storage on button click.
    $(".saveBtn").on("click", function() {
        var input = $(this).siblings(".description").val();
        var time = $(this).siblings().attr("id");
        localStorage.setItem(time, input);
    })

});