// Example of form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you can implement actual submission later)
    alert(`Thank you for your message, ${name}!`);
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form
    document.getElementById('contactForm').reset();
});
