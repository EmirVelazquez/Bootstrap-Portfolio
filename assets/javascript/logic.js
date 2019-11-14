//Master function that will only execute after the DOM has loaded
$(document).ready(function () {
    //Custom Logic for Nav
    $("#navBar .navbar-nav a").on("click", function () {
        $("#navBar .navbar-nav").find("li.active").removeClass("active");
        $(this).parent("li").addClass("active");
    });
}); 