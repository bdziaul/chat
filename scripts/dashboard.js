// Check user login status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('welcomeText').innerText = `Welcome, ${user.email}! 👋`;
    document.getElementById('userEmail').innerText = `Your UID: ${user.uid}`;
  } else {
    // No user logged in, redirect to login page
    window.location.href = "index.html";
  }
});

// Logout button
document.getElementById('logoutBtn').addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    alert("You have been logged out!");
    window.location.href = "index.html";
  });
});
