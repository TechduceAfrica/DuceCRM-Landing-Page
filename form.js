function submitForm() {
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    // Validate the email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const data = { email };

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Check email address for invalid input';
        successMessage.textContent = '';
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Display a success message when
    successMessage.textContent = 'Correct email address';
    successMessage.style.color = 'green';

    fetch('/api-endpoint-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                // Request was successful, handle the response here
                console.log('Data sent successfully.');
            } else {
                // Request failed, handle the error here
                console.error('Failed to send data, Check input.');
            }
        })
        .catch(error => {
            // Handle any network or other errors here
            console.error('An error occurred:', error);
        });
}