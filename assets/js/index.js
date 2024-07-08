document.querySelectorAll('.toggle-password').forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
      const passwordInput = eyeIcon.previousElementSibling;
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('bi-eye-slash', 'bi-eye');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('bi-eye', 'bi-eye-slash');
      }
    });
  });
  
  document.getElementById('create-password').addEventListener('input', () => {
    const createPasswordInput = document.getElementById('create-password');
    const passwordStrength = checkPasswordStrength(createPasswordInput.value);
    
    if (passwordStrength === 'strong') {
      createPasswordInput.classList.add('is-valid');
      createPasswordInput.classList.remove('is-invalid');
    } else {
      createPasswordInput.classList.add('is-invalid');
      createPasswordInput.classList.remove('is-valid');
    }
  });
  
  document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const createPasswordInput = document.getElementById('create-password');
    const retypePasswordInput = document.getElementById('retype-password');
  
    if (createPasswordInput.value !== retypePasswordInput.value) {
      retypePasswordInput.setCustomValidity('Passwords do not match');
      retypePasswordInput.classList.add('is-invalid');
    } else {
      retypePasswordInput.setCustomValidity('');
      retypePasswordInput.classList.remove('is-invalid');
      retypePasswordInput.classList.add('is-valid');
      
      // Submit the form or handle further form submission logic here
    }
  });
  
  function checkPasswordStrength(password) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (strongPasswordPattern.test(password)) {
      return 'strong';
    } else {
      return 'weak';
    }
  }
  