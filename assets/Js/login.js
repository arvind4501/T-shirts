const name = document.getElementById('username');
const pwd = document.getElementById('password');
const form = document.getElementById('login-form');
const rmCheck = document.getElementById('remember-me');
form.addEventListener('submit', (e) => {
  let messages = [];
  if(username.value.length < 6){
    e.preventDefault();
    alert('Please enter valid username(minimum 6 letters)');
  }
  if(password.value.length <= 6){
    e.preventDefault();
    alert('Password is too short!');
  }
  if(password.value.length >= 25){
    e.preventDefault();
    alert('Password is too big!');
  }
})
