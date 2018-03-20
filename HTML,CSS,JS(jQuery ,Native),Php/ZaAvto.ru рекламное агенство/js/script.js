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


// var anchors = [];
// var currentAnchor = -1;
// var isAnimating  = false;

// $(function(){
    
//     function updateAnchors() {
//         anchors = [];
//         $('.anchor').each(function(i, element){
//             anchors.push( $(element).offset().top );
//         });
//     }
    
//     $('body').on('mousewheel', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         if( isAnimating ) {
//             return false;
//         }
//         isAnimating  = true;
//         // Increase or reset current anchor
//         if( e.originalEvent.wheelDelta >= 0 ) {
//             currentAnchor--;
//         }else{
//             currentAnchor++;
//         }
//         if( currentAnchor > (anchors.length - 1) 
//            || currentAnchor < 0 ) {
//             currentAnchor = 0;
//         }
//         isAnimating  = true;
//         $('html, body').animate({
//             scrollTop: parseInt( anchors[currentAnchor] )
//         }, 500, 'swing', function(){
//             isAnimating  = false;
//         });
//     });

//     updateAnchors();   
    
// });

