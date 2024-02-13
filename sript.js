$(document).ready(function() {
    $('.slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  });
  
  $(document).ready(function() {
    $('.slider2').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  });
  
  
  
  function submitForm() {
    var form = document.getElementById("estimateForm");
    if (form.checkValidity()) {
      // Form is valid, you can submit it here
      alert("Form submitted successfully!");
    } else {
      // Form is invalid, handle the errors
      alert("Please fill in all required fields and correct any errors.");
    }
  }