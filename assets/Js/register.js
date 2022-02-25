const username = document.getElementById('name');
const password = document.getElementById('pwd');
const email = document.getElementById('email');
const form = document.getElementById('register-form');
const confirm = document.getElementById('confirmpwd');
function validate(){
    form.addEventListener('submit', (e) => {
        if(username.value.length < 6){
            e.preventDefault();
            alert('Please enter valid username(minimum 6 letters)');
          }
        else if(password.value.length <= 8){
            e.preventDefault();
            alert('Password is too short!');
        }
        else if(password.value.length >= 25){
            e.preventDefault();
            alert('Password is too big!');
          }
        else if(password.value != confirm.value){
            alert('Password must be same');
        }
        else{
            alert("Your account has been created successfully!");
        }
    })
    
}
