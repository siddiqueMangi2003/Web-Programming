let hello  = "siddique muhammad"

console.log("Hello " + hello);


let isLoggedIn = true; // Change to false to simulate logged-out state
let message = "";

if (isLoggedIn) {
  message = `<div><h1>Welcome, ${hello}!</h1><a href="/logout">Logout</a></div>`;
} else {
  message = `<div><a href="/login">Login</a></div>`;
}

console.log(message);
