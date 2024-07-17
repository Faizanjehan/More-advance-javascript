// const personName   ='faizan';
// let accountEmail ='Faizn@gmail.com';
// var accountpassworde ='0123456';
// accountCity ='Jaipur';


// personName = 'shayan';
// accountEmail ='Fa@gmail.com';
// accountpassworde='232323323';
// accountCity = 'haidrabad';

// console.table([personName, accountEmail, accountpassworde, accountCity]);

// creat a one page file 

// Example using var


document.getElementById('contantFrom').addEventListener('submit',function(event){
 event.preventDefault();

const name = document.getElementById('name').value;
const fname =document.getElementById('fname').value;
const email =document.getElementById('email').value;
const addres =document.getElementById('addres').value;

    // You can perform form validation or send the data to a server here
    // For this example, we'll just display a confirmation message

document.getElementById('formMassage').textContent =`Thank You, ${name}! Your massage have been sent.`;


    // Clear the form
    document.getElementById('contactForm').reset();

});