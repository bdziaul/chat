// scripts/login.js

// Login Form Submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();

  if (!username || !password) {
    alert("Please enter both Username and Password!");
    return;
  }

  // Find this user in Firebase Realtime Database
  firebase.database().ref("users/" + username).once("value")
    .then(snapshot => {
      if (snapshot.exists()) {
        const userData = snapshot.val();

        if (userData.password === password) {
          // Login Success
          localStorage.setItem("username", username);
          alert("Login successful! Redirecting...");
          window.location.href = "dashboard.html";
        } else {
          alert("Incorrect password!");
        }

      } else {
        alert("Username not found!");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Something went wrong!");
    });
});
