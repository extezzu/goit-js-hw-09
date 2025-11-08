const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

// restore date on loading //
document.addEventListener('DOMContentLoaded', populateForm);

// input //
form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// submit //
form.addEventListener('submit', (e) => {
    e.preventDefault();
const { email, message } = formData;

if (!email || !message) {
    alert('Fill please all fields');
    return;
}
console.log('Submitted data:', formData);

localStorage.removeItem(STORAGE_KEY);
form.reset();
formData = { email: '', message: '' };
});

// restore data from localstorage //
function populateForm() {
const savedData = localStorage.getItem(STORAGE_KEY);
if (!savedData) return;

try {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
} catch (error) {
    console.error('Error parsing saved form data:', error);
}
}