

$(document).ready(function() {
    $('.blockitem').click(function () {
        $(".blockitem:not(this)").css({"display": "none"});
        $(this).css({"display": "block"});
        var url = $(this).children('a').attr('href');
        $.ajax({
            url: url,
            success: function (data) {
                $('#content').html(data);
                $('#content').css({"display": "block"});
            }
        });
        if (url != $(window.location).attr('href')) {
            window.history.pushState(null, null, url);
        }
        return false;
    });
    });



    $('#logo').mouseenter(function(){
        var arr = [ "#a71b3b","#1a48a6", "#a6781a", "#1ba768"];
        var rand = Math.floor( Math.random() * arr.length );
        color=arr[rand];
        console.log(color);
        $('#footer').css({"background-color":color});
        $('.blockitem__block__name').css({"background-color":color});
        $('#logo').mouseout(function(){
            $('#footer').css({"background-color":this.color});
            $('.blockitem__block__name').css({"background-color":this.color});
        });
      });
   
