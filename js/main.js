$(".openBtn").click(function () {
    $(".sidenav").animate({width: '250px'}, 100);
    $(".openBtn").animate({marginLeft: '260px'}, 500);
})

$(".closeIcon").click(function () {
    $(".sidenav").animate({width: '0px'}, 100);
    $(".openBtn").animate({marginLeft: '10'}, 500);
})


$(".singer h2").click(function () {
    $(this).next().slideToggle(500);
    $(".singer p").not($(this).next()).slideUp(500);
})


window.onload = function() {
    countDown("01 january 2025");
}

function countDown(count) {
    let futureDate = new Date(count);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);

    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let minutes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${ minutes } M`);
    $('.seconds').html(`${ seconds} S`)

    setInterval(() => {countDown(count)}, 1000);
}

$("textarea").keyup(function () {
    let messageLength = $(this).val().length;
    $(".number").text(
        100 - messageLength == 0 ? "Your available character finished" : 100 - messageLength
    )
})
