// Background animation
const bgAnimation = document.getElementById('bgAnimation');
for (let i = 0; i < 20; i++) {
    const circle = document.createElement('div');
    circle.className = 'floating-circle';
    const size = Math.random() * 150 + 50;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.left = Math.random() * 100 + '%';
    circle.style.top = Math.random() * 100 + '%';
    circle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    circle.style.animationDelay = (Math.random() * 5) + 's';
    bgAnimation.appendChild(circle);
}

// API Configuration
const API_BASE_URL = 'https://quiz-api-9mpw.onrender.com';

// Handle form submission
function handleSubmit() {
    console.log('Form submission started...');
    
    const userName = document.getElementById('userName').value.trim();
    const civilizationName = document.getElementById('civilizationName').value.trim();
    const languageSystem = document.getElementById('languageSystem').value.trim();
    const newWords = document.getElementById('newWords').value.trim();

    console.log('Form Data:', { userName, civilizationName, languageSystem, newWords });

    // Validation
    if (!userName || !civilizationName) {
        alert('Please fill in at least your name and civilization name!');
        return;
    }

    // Show loading message
    const successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = `
        <svg style="width: 60px; height: 60px; margin-bottom: 15px;" viewBox="0 0 24 24" fill="none" stroke="#B6761C" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <strong style="color: #7B532F; font-size: 1.2em;">Creating Your Civilization...</strong><br>
        <span style="color: #7B532F; opacity: 0.8; font-size: 0.95em;">Please wait while we forge your linguistic legacy</span>
    `;
    successMessage.classList.add('show');
    successMessage.style.backgroundColor = '#F0F0CE';
    successMessage.style.color = '#7B532F';
    successMessage.style.border = '3px solid #D5BF86';

    // Disable button while sending
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating...';

    // Prepare data matching backend schema
    const civilizationData = {
        name: userName,
        civilization: civilizationName,
        linguistic_system: languageSystem,
        new_words: newWords
    };

    // Send POST request to backend
    console.log('Sending to:', API_BASE_URL + '/civilizations/');
    console.log('Data:', civilizationData);
    
    fetch(API_BASE_URL + '/civilizations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(civilizationData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => Promise.reject(error));
        }
        return response.json();
    })
    .then(data => {
        // Success response with themed design
        successMessage.innerHTML = `
            <div style="margin-bottom: 20px;">
                <svg style="width: 70px; height: 70px;" viewBox="0 0 24 24" fill="none" stroke="#B6761C" stroke-width="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <div style="width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #B6761C, transparent); margin: 15px auto;"></div>
            <strong style="color: #7B532F; font-size: 1.4em; display: block; margin-bottom: 15px;">
                Congratulations, ${userName}!
            </strong>
            <div style="color: #7B532F; line-height: 1.8; font-size: 1.05em;">
                Your civilization <strong style="color: #B6761C;">"${civilizationName}"</strong> has been successfully created!
                <div style="margin-top: 12px; font-style: italic; opacity: 0.85; font-size: 0.95em;">
                    Your linguistic legacy begins now...
                </div>
            </div>
        `;
        successMessage.classList.add('show');
        successMessage.style.backgroundColor = '#F0F0CE';
        successMessage.style.color = '#7B532F';
        successMessage.style.border = '3px solid #B6761C';
        successMessage.style.boxShadow = '0 8px 25px rgba(182, 118, 28, 0.3)';

        // Clear form
        document.getElementById('userName').value = '';
        document.getElementById('civilizationName').value = '';
        document.getElementById('languageSystem').value = '';
        document.getElementById('newWords').value = '';

        // Hide message after 6 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 6000);

        console.log('Civilization Created Successfully:', data);
    })
    .catch(error => {
        // Error handling with themed design
        let errorMsg = 'Unknown error occurred';
        
        if (error.detail) {
            if (Array.isArray(error.detail)) {
                errorMsg = error.detail.map(e => e.msg).join(', ');
            } else {
                errorMsg = error.detail;
            }
        } else if (error.message) {
            errorMsg = error.message;
        }
        
        successMessage.innerHTML = `
            <div style="margin-bottom: 20px;">
                <svg style="width: 70px; height: 70px;" viewBox="0 0 24 24" fill="none" stroke="#8B4513" stroke-width="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </div>
            <div style="width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #8B4513, transparent); margin: 15px auto;"></div>
            <strong style="color: #5D3A1A; font-size: 1.3em; display: block; margin-bottom: 15px;">
                Creation Failed
            </strong>
            <div style="color: #5D3A1A; line-height: 1.6; font-size: 1em;">
                ${errorMsg}
                <div style="margin-top: 12px; font-style: italic; opacity: 0.8; font-size: 0.9em;">
                    Please check your information and try again
                </div>
            </div>
        `;
        successMessage.classList.add('show');
        successMessage.style.backgroundColor = '#F5E6D3';
        successMessage.style.color = '#5D3A1A';
        successMessage.style.border = '3px solid #8B4513';
        successMessage.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.3)';

        setTimeout(() => {
            successMessage.classList.remove('show');
            successMessage.style.backgroundColor = '';
            successMessage.style.border = '';
        }, 6000);

        console.error('❌ Error:', error);
    })
    .finally(() => {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create My Civilization';
    });
}

// Add event listener to submit button
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

// Optional: Allow Enter key to submit in text inputs
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
});