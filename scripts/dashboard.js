// scripts/dashboard.js
// Check user login status and load user data from Firebase

auth.onAuthStateChanged(user => {
  if (user) {
    // User is logged in
    const userId = user.uid;
    const userRef = database.ref('users/' + userId);

    userRef.once('value').then(snapshot => {
      const data = snapshot.val();
      document.getElementById('welcome').textContent = 
        `Welcome, ${data.username}! 👋`;
    });
  } else {
    // No user logged in → redirect to login page
    window.location.href = 'index.html';
  }
});

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
}
