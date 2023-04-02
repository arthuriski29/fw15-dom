const nameInput = document.getElementById('username');
const nameAlert = nameInput.nextElementSibling;
const emailInput = document.getElementById('email');
const emailAlert = emailInput.nextElementSibling;
const password1 = document.getElementById('password1');
const passAlert1 = document.getElementById('pass1Err');
// const password2 = document.getElementById('password2');
// const passAlert2 = document.getElementById('pass2Err');


// console.log(emailInput);
// console.log(emailAlert);

//CHECKED FOR SUBMIT
let namePass = false;
let emailPass = false;
// let passChecked = false;
// let boxValue = false;
let makePassValue = false;





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
    passAlert1.removeAttribute('style');
    makePassValue = false;
  } else{
    
    if ( (passwordValue.length < 8) || (passwordValue.length > 16) ){
      password1.setAttribute('style','border-color: #FFBA7B;')
      passAlert1.innerText = `Password must be 8 - 16 characters`;
      passAlert1.removeAttribute('style');
      makePassValue = false;
      
    } else{
      if(!hasUppercase) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast an UPPERCASE letter is expected`;
        passAlert1.removeAttribute('style')
        makePassValue = false;
      } else if (!hasLowercase) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast a lowercase letter is expected`;
        passAlert1.removeAttribute('style')
        makePassValue = false;
      } else if (!hasDigit) {
        password1.setAttribute('style','border-color: #FFBA7B;')
        passAlert1.innerText = `atleast a number is expected`;
        passAlert1.removeAttribute('style')
        makePassValue = false;
      } else {
        password1.removeAttribute('style')
        password1.setAttribute('style','border-color: #BAFF7B;');
        passAlert1.setAttribute('style', 'color: #93C961;');
        passAlert1.innerText = 'Looks Good';
        makePassValue = true;
      }
    }
  }
});


// //CONFIRM PASSWORD 
 


// password2.addEventListener('keyup', function(event){
  
//   const  confirmPassValue = event.target.value;

//   console.log(confirmPassValue);

//   // let passCheck;
//   if(confirmPassValue.trim() === '') {
//     password2.setAttribute('style','border-color: #FFBA7B;')
//     passAlert2.innerText = `field can't be empty`;
//     passAlert2.removeAttribute('style');
//     passChecked = false;
//   } else if ( passwordValue !== confirmPassValue ) {
    
//     password2.setAttribute('style','border-color: #FFBA7B;')
//     passAlert2.innerText = `Password doesn't match`;
//     passAlert2.removeAttribute('style');
//     passChecked = false;

//   } else {
//     password2.removeAttribute('style')
//     password2.setAttribute('style','border-color: #BAFF7B;');
//     passAlert2.setAttribute('style', 'color: #93C961; ');
//     passAlert2.innerText = 'Password match';
//     passChecked = true;
//   }
  
// });
// // console.log(passChecked);


// //CHECKBOX

// const checkBox = document.getElementById('checkbox');
// const cbChecked = checkBox.addEventListener('click', function(event) {
//   if (event.target.checked) {
//     boxValue = true;
//   } else {
//     boxValue = false;
//   }
//   // console.log(boxValue);
// })

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
  makePassValue !== true) {
  
  notSubmit.innerText = 'Enter correct input to the field'
  } else {
  window.location.href = 'home.html'
  }
}
console.log(makePassValue);
