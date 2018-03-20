$("#contactForm").submit(function(event) {
    event.preventDefault();
    submitForm();
});
function submitForm() {
    var name = $("#name").val();
    var phone = $("#phone").val();
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name=" + name + "&phone=" + phone,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            }

            function formSuccess() {
                $("#msgSubmit").removeClass("hidden");
                $("#dialogForm").addClass("hidden");

            }
        }
    })
}

    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() >300) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });




