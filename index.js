// Your code goes here
const header = document.getElementById('text');
document.addEventListener("DOMContentLoaded", ()=>{
    header.textContent = "This is really cool!"
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

