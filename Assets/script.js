$(document).ready(function() {
    // Display today's date.
    var Today = moment().format("dddd, MMMM Do")
    $("#currentDay").text(Today);

    // Update hour color depending on time of day.
    function colorUpdater () {
        var currentTime = moment().hours();
        console.log(currentTime)

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"))
            console.log(timeBlock)

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
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

    // Save input to local storage on button click.
    $(".saveBtn").on("click", function() {
        agendaText = $(this).siblings(".description").val();
        console.log(agendaText);
        agendaTime = $(this).parent().attr("id");
        console.log(agendaTime);
        localStorage.setItem(agendaTime, agendaText);
    });

    // Load data from local storage to render on refresh.
    $("#block1 .description").val(localStorage.getItem("block1"));
    $("#block2 .description").val(localStorage.getItem("block2"));
    $("#block3 .description").val(localStorage.getItem("block3"));
    $("#block4 .description").val(localStorage.getItem("block4"));
    $("#block5 .description").val(localStorage.getItem("block5"));
    $("#block6 .description").val(localStorage.getItem("block6"));
    $("#block7 .description").val(localStorage.getItem("block7"));
    $("#block8 .description").val(localStorage.getItem("block8"));
    $("#block9 .description").val(localStorage.getItem("block9"));
});