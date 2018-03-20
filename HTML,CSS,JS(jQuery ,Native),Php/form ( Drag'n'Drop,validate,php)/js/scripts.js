$("#contactForm").submit(function(event) {
   event.preventDefault();
   validForm();
   submitForm(); 
});

function submitForm(){
	
 	var name = $("#name").val();
 	var lastName = $("#lastName").val();
 	var log = $("#log").val();
    var sel2 = $("#sel2").val();
    var country = $("#country").val();

 $.ajax({
	 type: "POST",
	 url: "php/process.php",
	 data: "name="+ name + "&lastname="+ lastName + "log"+ log+"City"+sel2+"country"+country,
	 success : function(text){
		 if(text == "success") {
		 	formSuccess();
		 }
		}
 });
}

function  formSuccess(){
 $( "#msgSubmit").removeClass( "hidden");
 $("#contactForm").addClass("hidden");
}

function validForm(){ 
 	var textInfo = $("#pass").val();
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
     if (!re.test(textInfo))
     alert ('Введите пароль.Строчные и прописные латинские буквы, цифры.');
}

$('.move').click(function(){
    $('#'+$(this).data('to')).append($('#'+$(this).data('from')+' option:selected'));
});

