const form=document.getElementById('form')
const username=document.getElementById('username')
const Email=document.getElementById('Email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
function showError(input,message) {
  const formControl=input.parentElement
  formControl.className='form-control error'
  const small=formControl.querySelector('small')
  console.log(small);
  small.textContent=message
}
function showSuccess(input) {
  const formControl=input.parentElement
  formControl.className='form-control success'
}
//cheack e-mail is valid
const validateEmail = (email) => {
  const res= String(email.value.trim())
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (res) {
      showSuccess(email)

    } else {
      showError(email,` ${getFeildName(email)} is not valid`)

    }
};
function matchPassword(password,password2) {
  if(password.value.trim()!==password2.value.trim())
  showError(password,` ${getFeildName(password)} not match ${getFeildName(password2)}`)

}
function cheakRequired(inputArr) {
  inputArr.forEach(input => {
    if(input.value.trim()==='')
    {
      showError(input,`${getFeildName(input)} is required`)
    }
    else{
      showSuccess(input)
    }
  });
}
function cheakLength(input,min,max) {
  if(input.value.length<min){
    showError(input,`${getFeildName(input)} must be at least ${min}`)

  }
  else if(input.value.length>max){
    showError(input,`${getFeildName(input)} must be maxmum ${max}`)

  }
  else{
    showSuccess(input)

  }
}
function getFeildName(input) {
  return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}
form.addEventListener('submit', (e)=> {
  e.preventDefault()
  cheakRequired([username,Email,password,password2])
  cheakLength(username,3,15)
  cheakLength(password,5,26)
  validateEmail(Email)
  matchPassword(password,password2)

},)