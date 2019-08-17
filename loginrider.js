$("#signup").click(function() {
$("#first").fadeOut("fast", function() {
$("#second").fadeIn("fast");
});
});

$("#signin").click(function() {
$("#second").fadeOut("fast", function() {
$("#first").fadeIn("fast");
});
});



   /*      $(function() {
           $("form[name='login']").validate({
             rules: {

               email: {
                 required: true,
                 email: true
               },
               password: {
                 required: true,

               }
             },
              messages: {
               email: "Please enter a valid email address",

               password: {
                 required: "Please enter password",

               }

             },
             submitHandler: function(form) {
               form.submit();
             }
           });
         });


*/
$(function() {

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      age: "required",
      license: {
        required: true,
        minlength: 10
      },
      password: {
        required: true,
        minlength: 5
      }
    },

    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      age: "Please enter your age"
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      license: "Please enter a valid license number"
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});
