const formLogin = document.getElementById('login-form')

formLogin.addEventListener('submit', function(event){
  event.preventDefault()

  //targetting value
  const name = event.target.name.value 
  
  // const password = event.target.e.value 
  // const password = event.target.password.value
  if(name === null || name === '' ){
    const alertName = document.getElementById('name-alert')
    alertName.style.color = 'red'
    alertName.style.fontSize = '10px'
    alertName.innertext = 'Nama tidak boleh kosong' 
  } else {}

  const email = event.target.email.value 
  if(email === null || email === ''){
    const alertEmail = document.getElementById('email-alert')
    alertEmail.style.color = 'red'
    alertEmail.style.fontSize = '10px'
    alertEmail.innertext = 'Email tidak boleh kosong'
  }else {}

  const pass = event.target.password.value 
  if(pass === null || pass === ''){
    const alertEmail = document.getElementById('email-alert')
    alertEmail.style.color = 'red'
    alertEmail.style.fontSize = '10px'
    alertEmail.innertext = 'Email tidak boleh kosong'
  }else {}

  const cnfrmPass = event.target.email.value 
  if(cnfrmPass === null || cnfrmPass === ''){
    const alertEmail = document.getElementById('email-alert')
    alertEmail.style.color = 'red'
    alertEmail.style.fontSize = '10px'
    alertEmail.innertext = 'Email tidak boleh kosong'
  }else{}

})