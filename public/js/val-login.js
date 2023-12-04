window.addEventListener("load",()=>{
    const formLogin = document.querySelector(".form-login");
    //inputs
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    //errors
    const emailError = document.querySelector(".div-email");
    const passwordError = document.querySelector(".div-password");

    formLogin.addEventListener("submit", (e)=>{
        const error = [];
        let valid = /\S+@\S+\.\S+/
        
        if(email.value === ""){
            error.push(1);
            emailError.innerHTML += "<span> Debe ingresar un email </span>";
        }
        else if(!valid.test(email.value)){
            error.push(1);
            emailError.innerHTML += "<span> El email debe ser válido </span>";
        }

        if(password.value === ""){
            error.push(1);
            passwordError.innerHTML += "<span> Debe ingresar una contraseña </span>";
        }
        
        if(error.length>0){
            e.preventDefault();
        }
    })
})