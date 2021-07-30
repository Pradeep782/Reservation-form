
// when window loads the below functions will execute.
$(document).ready(function() {
    
    // Regular expression for the email pattern.
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    //  Regular expression for the phone pattern.
    var phonePattern = /^(\d{3})-+(\d{3})-+(\d{4})$/; 
        
//   adding  event listener on the submit button
    $("#form-reservation").submit(event =>{
    
        var arrivalDate = $("#arriving-date").val().trim();
        var nights = $("#nights").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        
        var correct = true;

       
        
        $(".error_statement").remove();
        
        // using if statement to evluate the user entered inputs.
        if(arrivalDate=="")
            {
                // if user enters the invalid input the below error will be executed.
                 $('#arriving-date').after('<span class="error_statement">Enter date in valid format.</span>');
                
                 correct = false;
            }
       
         // using if statement to evluate the user entered inputs.
         if(nights=="" || isNaN(nights))
            {
                // if user enters the invalid input the below error will be executed.
             $('#nights').after('<span class="error_statement">Enter night value in number.</span>');
                
                correct = false;
            }
        


        // using if statement to evluate the user entered inputs.
          if(name=="")
            {
                 // if user enters the invalid input the below error will be executed.
                 $('#name').after('<span class="error_statement">Enter your name.</span>');
                
                correct = false;
            }
         // using if statement to evluate the user entered inputs.
           if(email=="" || !emailPattern.test(email))
            {
                // if user enters the invalid input the below error will be executed.
                 $('#email').after('<span class="error_statement">Enter email-id in proper format</span>');
                
                correct = false;
            }
        // using if statement to evluate the user entered inputs.
        if(phone=="" || !phonePattern.test(phone))
            {
                // if user enters the invalid input the below error will be executed.
                 $('#phone').after('<span class="error_statement">Enter valid phone Number</span>');
                
                correct = false;
            }
        
        if(!correct)
            {
                event.preventDefault();
            }
        });
			
        // using focus method to shift the focus on the arriving date
		$('#arriving-date').focus();
    
});