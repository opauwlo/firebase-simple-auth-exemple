let firebaseConfig = {
  apiKey: "AIzaSyABg6wcWBykjZ5LWFF6t-MgdnlbIzBbcQg",
  authDomain: "lateral-command-309316.firebaseapp.com",
  projectId: "lateral-command-309316",
  storageBucket: "lateral-command-309316.appspot.com",
  messagingSenderId: "485040018311",
  appId: "1:485040018311:web:5689a59e4b5f79365e3922",
  measurementId: "G-4976LLZZNS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  let notLoggedIn = document.getElementById("not-login");
  let loggedIn = document.getElementById("login");
  if (user) {
    // User is signed in.
    loggedIn.style.display = "block";
    notLoggedIn.style.display = "none";
  } else {
    // No user is signed in.
    loggedIn.style.display = "none";
    notLoggedIn.style.display = "block";
  }
});

function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(`Error SigIn,`, error.message);
      alert(error.message);
    })
    .then(function (user) {
      if (user) {
        alert(`LogdIn`);
      }
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}