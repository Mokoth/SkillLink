const pwShowHide = document.querySelectorAll(".eye-icon");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });
  });
});

//Add submit listener on signupPage to Add User
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  // Validate fields are not empty
  if (!username || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
  }

  // Validate password length
  if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }

  // Validate passwords match
  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  // Get users from LocalStorage or initialize an empty array if none exist
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Add new user to the array
  users.push({ username, password });

  // Save updated users array back to LocalStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('User signed up successfully!');

  // Redirect to login page after 1 second
  setTimeout(() => {
      window.location.href = 'login.html';
  }, 1000);
});

//Add submit listener on login page to move to dashboard
document.getElementById('frm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate fields are not empty
  if (!username || !password) {
      alert('All fields are required.');
      return;
  }

  // Get users from LocalStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find user with matching username and password
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
      // Save logged in user info to LocalStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login successful!');

      // Redirect to home page after 1 second
      setTimeout(() => {
          window.location.href = 'index.html';
      }, 1000);
  } else {
      alert('Invalid username or password');
  }
});

