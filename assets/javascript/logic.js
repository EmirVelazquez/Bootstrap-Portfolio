//Master function that will only execute after the DOM has loaded
$(document).ready(function () {
    //Custom Logic for Nav
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


    //Back to top button
    //Placed inside variable
    var topButton = $("#topButton");

    // User scrolls down 20px, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // topButton.style.display = "block";
            topButton.show();
        } else {
            // topButton.style.display = "none";
            topButton.hide();
        }
    };
    // User clicks button then code block executes topFunction
    $("#topButton").on("click", function () {
        topFunction();
        $("#navBar .navbar-nav").find("li.active").removeClass("active");
        $("#aboutLink").addClass("active");
    });

    // Function to scroll back to top 
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}); 