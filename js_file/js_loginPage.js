const inputIcon = document.querySelector('.input__icon')
			const inputPassword = document.querySelector('.input__field')

			inputIcon.addEventListener('click', () => {
				inputIcon.classList.toggle('ri-eye-off-line')
				inputIcon.classList.toggle('ri-eye-line')
				inputPassword.type =
					inputPassword.type === 'password' ? 'text' : 'password'
			})
//login function
function logIn(){
     
    let mail=document.getElementById("e-mail").value;
    let psw=document.getElementById("password").value;
    if(mail==localStorage.getItem('e-mail', document.getElementById("e-mail").value)){
       if(psw==localStorage.getItem('password', document.getElementById("psw").value)){
          document.getElementById("effettuato").value="Accesso effettuato";
		  window.location.replace("/sito/index.html");

		  return false;
       }else{
		document.getElementById("psw").value="Password errata";

	   }
    }

    
}