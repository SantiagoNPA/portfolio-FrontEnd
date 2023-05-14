document.getElementById("btn__iniciar_sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click",register);
window.addEventListener("resize",anchopag);

//declarando variables
var contenedor__login_registre = document.querySelector(".contenedor__login-registre");
var formulario__login  = document.querySelector(".formulario__login");
var formulario__registrer  = document.querySelector(".formulario__registrer");
var caja_trasera_login = document.querySelector(".caja_t-login");
var caja_trasera_register = document.querySelector(".caja_t-register");
const parrafo = document.querySelector(".miParrafo");

function anchopag(){
    if(window.innerWidth>850){
        caja_trasera_login.style.display="block";
        caja_trasera_register.style.display="block";
    }else{
        caja_trasera_register.style.display="block";
        caja_trasera_register.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario__login.style.display="block";
        formulario__registrer.style.display="none";
        contenedor__login_registre.style.left="0px"
    }
}

function iniciarSesion(){ 
    if(window.innerWidth > 850){
        formulario__registrer.style.display = "none";
    contenedor__login_registre.style.left = "10px";
    formulario__login.style.display ="block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity="0";
    }else{
    formulario__registrer.style.display = "none";
    contenedor__login_registre.style.left = "0px";
    formulario__login.style.display ="block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display="none";
    }
    
}
function register(){ 
    if(window.innerWidth>850){
    formulario__registrer.style.display = "block";
    contenedor__login_registre.style.left = "410px";
    formulario__login.style.display ="none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity="1";
     }else{
        formulario__registrer.style.display = "block";
    contenedor__login_registre.style.left = "0px";
    formulario__login.style.display ="none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.opacity="1";
 
}
}