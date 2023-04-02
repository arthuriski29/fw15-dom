const nameInput = document.getElementById('username');
const nameAlert = nameInput.nextElementSibling;
const emailInput = document.getElementById('email');
const emailAlert = emailInput.nextElementSibling;
const password1 = document.getElementById('password1');
const passAlert1 = document.getElementById('pass1Err');
const password2 = document.getElementById('password2');
const passAlert2 = document.getElementById('pass2Err');


// console.log(emailInput);
// console.log(emailAlert);

//CHECKED FOR SUBMIT
let namePass = false;
let emailPass = false;
let passChecked = false;
let boxValue = false;






// NAMA

nameInput.addEventListener('keyup', function(event){
  
  if(event.target.value.trim() === '') {
    nameInput.setAttribute('style','border-color: #FFBA7B;')
    nameAlert.innerText = `field can't be empty`;
  } else{
      nameInput.removeAttribute('style')
      nameInput.setAttribute('style','border-color: #BAFF7B;');
      nameAlert.innerText = '';
      namePass = true;
    }
});

// EMAIL

emailInput.addEventListener('keyup', function(event){
  
  if(event.target.value.trim() === '') {
    emailInput.setAttribute('style','border-color: #FFBA7B;')
    emailAlert.innerText = `field can't be empty`;
  } else{
    
    if(!(event.target.value.includes('@'))) {
      
      emailInput.setAttribute('style','border-color: #FFBA7B;')
      emailAlert.innerText = 'Must contains @ at the field'; 
      
    } else{
      
      emailInput.removeAttribute('style')
      emailInput.setAttribute('style','border-color: #BAFF7B;');
      emailAlert.innerText = '';
      emailPass = true;
    }
  }
  
});

//PASSWORD
let passwordValue;

password1.addEventListener('keyup', function(event){
  passwordValue = event.target.value;

  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;

  for (let i = 0; i < passwordValue.length; i++) {  
    const char = passwordValue.charAt(i);

    if (char >= 'A' && char <= 'Z' ){
      hasUppercase = true;
    } else if (char >= 'a' && char <= 'z'){
      hasLowercase = true;
    } else if (char >= '0' && char <= '9'){
      hasDigit = true;
    }
  }

  // console.log(passwordValue)

  if(passwordValue.trim() === '') {
    password1.setAttribute('style','border-color: #FFBA7B;')
    passAlert1.innerText = `field can't be empty`;
    passAlert1.removeAttribute('style')
  } else{
    
    if ( (passwordValue.length < 8) || (passwordValue.length > 16) ){
      password1.setAttribute('style','border-color: #FFBA7B;')
      passAlert1.innerText = `Password must be 8 - 16 characters`;
      passAlert1.removeAttribute('style')
      
    } else{
      if(!hasUppercase) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast an UPPERCASE letter is expected`;
        passAlert1.removeAttribute('style')
      } else if (!hasLowercase) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast a lowercase letter is expected`;
        passAlert1.removeAttribute('style')
      } else if (!hasDigit) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast a number is expected`;
        passAlert1.removeAttribute('style')
      } else {
        password1.removeAttribute('style')
        password1.setAttribute('style','border-color: #BAFF7B;');
        passAlert1.setAttribute('style', 'color: #93C961;');
        passAlert1.innerText = 'Looks Good';
      }
    }
  }
});


//CONFIRM PASSWORD 
 


password2.addEventListener('keyup', function(event){
  
  const  confirmPassValue = event.target.value;

  console.log(confirmPassValue);

  // let passCheck;
  if(confirmPassValue.trim() === '') {
    password2.setAttribute('style','border-color: #FFBA7B;')
    passAlert2.innerText = `field can't be empty`;
    passAlert2.removeAttribute('style');
    passChecked = false;
  } else if ( passwordValue !== confirmPassValue ) {
    
    password2.setAttribute('style','border-color: #FFBA7B;')
    passAlert2.innerText = `Password doesn't match`;
    passAlert2.removeAttribute('style');
    passChecked = false;

  } else {
    password2.removeAttribute('style')
    password2.setAttribute('style','border-color: #BAFF7B;');
    passAlert2.setAttribute('style', 'color: #93C961; ');
    passAlert2.innerText = 'Password match';
    passChecked = true;
  }
  
});
// console.log(passChecked);


//CHECKBOX

const checkBox = document.getElementById('checkbox');
const cbChecked = checkBox.addEventListener('click', function(event) {
  if (event.target.checked) {
    boxValue = true;
  } else {
    boxValue = false;
  }
  // console.log(boxValue);
})

//SUBMITTING
const formInput = document.getElementById('form-login');
formInput.addEventListener('submit', function(event) {
  event.preventDefault();

  validateInputs();
})

//panggil alert submit
const notSubmit = document.getElementById('form-login-alert')

const validateInputs = () => {
  //1.Name
if(namePass !== true ||
  emailPass !== true ||
  passChecked !== true ||
  boxValue !== true ) {
  
  notSubmit.innerText = 'Enter correct input to the field'
  } else {
  window.location.href = 'home.html'
  }


  // 2.Email
  // 3. Password
  // 4. Cb






}




// checkBox.addEventListener('click', function(element) {
//   cbValue = true;
//   console.log(cbValue);
// })
// checkBox.addEventListener('change', function(element) {
//   cbValue = false;
//   console.log(cbValue);
// })




// detectCb(){
//   let cbValue= false;
//   if (checkBox.checked == true) {
//     cbValue = true;
//     console.log(cbValue);
//   } else {
//     cbValue = false;
//     console.log(cbValue);
//   }
// }














// // Cara Bertahap

// // 1. panggil element
// //form element
// const formLogin = document.getElementById('login-form');

// //inside form
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password1 = document.getElementById('password1');
// const password2 = document.getElementById('password2');

// //2. Buat Event
// formLogin.addEventListener('submit', e => {
//   e.preventDefault(); //mencegah form dari autosubmit

//   validateInputs();
// });

// const checkEmail = email => {
//   const emailChecked = email.includes('@');
//   return emailChecked;
// }

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');

// }

// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.success');

//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');


// };

// const validateInputs = () => {
//   const usernameValue = username.trim();
//   const emailValue = email.trim();
//   const password1Value = password1.trim();
//   const password2Value = password2.trim();

//   if(usernameValue ===''){
//     setError(username, 'Username is required');
//   } else {
//     setSuccess(username);
//   }

//   if(emailValue ===''){
//     setError(email, 'Email is required');
//   }else if (!checkEmail(emailValue)) {
//     setError(email, 'Email must use @');
//   }else {
//     setSuccess(email);
//   }

//   if(password1Value ===''){
//     setError(password1, 'Password is required');
//   } else if (password1Value.length < 8) {
//     setError(password1, 'Password must be at least 8 character');
//   }
//   else {
//     setSuccess(password1);
//   }

//   if(password2Value ===''){
//     setError(password2, 'Confirm Password is required');
//   } else if (password2Value !== password1Value) {
//     setError(password2, `Passwords doesn't match`)
//   } else {
//     setSuccess(password2);
//   }
// };
