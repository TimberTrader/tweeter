$(document).ready(function() {
    $(".new-tweet textarea").keyup(function (e) { 
        let length = 140 - ($(this).val().length)
        $(this).siblings(".counter").text(length);
        if (length >= 0) {
            $(this).siblings(".counter").removeClass("errColor")
        } else {
            $(this).siblings(".counter").addClass("errColor");
        }
        e.preventDefault();
        });
  });
  