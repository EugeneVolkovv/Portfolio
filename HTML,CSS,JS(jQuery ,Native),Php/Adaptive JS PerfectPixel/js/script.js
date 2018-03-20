var photos = document.querySelectorAll('.photo');

function delActiveClass() {
    for (var i = 0; i < photos.length; i++) {
        photos[i].classList.remove('showed');
        }
    }

$(document).ready(function(){
	$('#btnM').click(function () {
		delActiveClass();
		$('.mfoto').addClass('showed');
	});
});

$(document).ready(function(){
	$('#btnL').click(function () {
		delActiveClass()
		$('.lfoto').addClass('showed');
	});
});

$(document).ready(function(){
	$('#btnXL').click(function () { 
		delActiveClass();
		$('.xlfoto').addClass('showed');
	});
});

$(document).ready(function(){
	$('#btnXXL').click(function () {
		delActiveClass();
		$('.xxlfoto').addClass('showed');
	});
});

