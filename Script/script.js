function signUp() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (!username || !password) {
      showMessage("Please enter a username and password.");
      return;
    }

    if (localStorage.getItem(username)) {
      showMessage("Username already exists.");
    } else {
      localStorage.setItem(username, password);
      showMessage("Sign up successful!");
    }
  }

  function logIn() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    showMessage("Username not found.");
  } else if (storedPassword === password) {
    // ✅ Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    showMessage("Incorrect password.");
  }
}

  function showMessage(msg) {
    document.getElementById("message").textContent = msg;
  }

  