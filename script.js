// script.js
document.getElementById('bondRequestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    let bondType = document.getElementById('bondType').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Add more fields as needed

    // Process the form data
    console.log('Bond Type:', bondType);
    console.log('Name:', name);
    console.log('Email:', email);

    // Add more processing logic as needed
});
