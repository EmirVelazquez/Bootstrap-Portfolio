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
    });




}); 