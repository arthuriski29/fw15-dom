
const emailInput = document.getElementById('email');
const emailAlert = emailInput.nextElementSibling;

//CHECKED FOR SUBMIT

let emailPass = false;





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
if(emailPass !== true) {
  
  notSubmit.innerText = 'Enter correct input to the field'
  } else {
  window.location.href = 'sign-in.html'
  }
}
