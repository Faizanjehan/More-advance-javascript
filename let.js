

// document.getElementById('conatantForm').addEventListener('click', function(event){
// event.preventDefault();


// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const message = document.getElementById('mesage').value;
    
// // Display confirmation message in an alert
// alert(`Thank you, ${name}! your message has been sent.\n\nMessage: ${message}`);

//   // Ask for confirmation to submit the form

//   const confirmSubmit = confirm('Do you wnat to submit the form?');

//   if(confirmSubmit){
//     document.getElementById('conatantForm').reset();
//     alert('Your form has been submit successfully.');

//   }else{

//     alert('Form submission his been canceled.');

//   }

// });


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display confirmation message in an alert
    alert(`Thank you, ${name}! Your message has been sent.\n\nMessage: ${message}`);

    // Ask for confirmation to submit the form
    const confirmSubmit = confirm("Do you want to submit the form?");

    if (confirmSubmit) {
        // If confirmed, clear the form
        document.getElementById('contactForm').reset();
        alert("Form has been submitted successfully!");
    } else {
        alert("Form submission has been canceled.");
    }
});
