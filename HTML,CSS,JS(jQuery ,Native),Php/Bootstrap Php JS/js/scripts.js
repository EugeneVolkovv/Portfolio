$("#contactForm").submit(function(event) {
   event.preventDefault();
   validForm();
   submitForm(); 
});

function submitForm(){
	
 	var name = $("#name").val();
 	var email = $("#email").val();
 	var phone = $("#phone").val();
 
 $.ajax({
	 type: "POST",
	 url: "php/process.php",
	 data: "name="+ name + "&email="+ email + "&phone="+ phone,
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
 	var int_ = $("#phone").val();
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
     if (!re.test(int_))
     alert ('Введите номер телефона.Количесвто цифр от 6-11');
}

