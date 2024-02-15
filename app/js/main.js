//valid
function handleFormSubmit(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var nameInput = document.getElementById('name');
    var messageInput = document.getElementById('text');
    if (emailInput.checkValidity() && nameInput.checkValidity() && messageInput.checkValidity()) {
        alert('Form submitted successfully!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}
