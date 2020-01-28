//Master function that will only execute after the DOM has loaded
$(document).ready(function () {
    //============================NAV LOGIC BELOW=====================================//
    //This block adds and removes active state on links
    $("#navBar .navbar-nav a").on("click", function () {
        $("#navBar .navbar-nav").find("li.active").removeClass("active");
        $(this).parent("li").addClass("active");
    });
    //This block revomes active state from all links if my name is clicked
    $("#navName").on("click", function () {
        $("#navBar .navbar-nav").find("li.active").removeClass("active");
        $("#aboutLink").addClass("active");
    });
    //============================NAV LOGIC ABOVE=====================================//

    //=======================BACK TO TOP BUTTON BELLOW================================//
    //Place jQuery reference button in variable
    var topButton = $("#topButton");

    // User clicks button then code block executes topFunction
    topButton.on("click", function () {
        topFunction();
        $("#navBar .navbar-nav").find("li.active").removeClass("active");
        $("#aboutLink").addClass("active");
    });

    // User scrolls down 20px, show the button
    window.onscroll = function () { scrollFunction() };

    // Helper function for displaying button
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // topButton.style.display = "block";
            topButton.show();
        } else {
            // topButton.style.display = "none";
            topButton.hide();
        }
    };
    // Helper function to handle scrolling to top animation
    function topFunction() {
        $("html, body").animate(
            {
                scrollTop: $("#topPage").offset().top
            }, "1000"
        );
    };
    //=======================BACK TO TOP BUTTON ABOVE=================================//
}); 