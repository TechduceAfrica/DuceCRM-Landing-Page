document.getElementById('emailInput').addEventListener('focus', function () {
    // Load the reCAPTCHA script when the input is focused
    loadReCAPTCHAScript();
});

function loadReCAPTCHAScript() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}


function submitForm() {
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    const recaptchaResponse = grecaptcha.getResponse();
    
    // Validate the email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const data = { email };

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Check email address for invalid input';
        successMessage.textContent = '';
        return;
    }

    if (!recaptchaResponse) {
        errorMessage.textContent = 'Please complete the reCAPTCHA';
        successMessage.textContent = '';
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Display a success message when
    successMessage.textContent = 'Correct email address';
    successMessage.style.color = 'green';

    // fetch('/api-endpoint-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             // Request was successful, handle the response here
    //             console.log('Data sent successfully.');
    //         } else {
    //             // Request failed, handle the error here
    //             console.error('Failed to send data, Check input.');
    //         }
    //     })
    //     .catch(error => {
    //         // Handle any network or other errors here
    //         console.error('An error occurred:', error);
    //     });
}
