const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email || '';
      messageInput.value = parsedData.message || '';
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';
    } catch (error) {
      console.error('Parsing error localStorage:', error);
    }
  }
});
form.addEventListener('input', event => {
  if (event.target.name) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form data:', formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
