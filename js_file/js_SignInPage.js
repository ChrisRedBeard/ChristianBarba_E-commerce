
function signIn(){
    localStorage.setItem('name', document.getElementById("name").value);

    localStorage.setItem('surname',document.getElementById("surname").value);
    localStorage.setItem('e-mail',document.getElementById("e-mail").value);
    localStorage.setItem('password',document.getElementById("password").value);

    
   window.location.replace("/sito/loginPage.html");
    //window.open("/sito/loginPage.html");
    return false;
   /* se la pagina NON deve essere ricaricata ==> return false;*/
}