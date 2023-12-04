window.addEventListener("load", ()=>{
    const formRegister = document.querySelector(".form-register");
    //inputs
    const name = document.querySelector("#name");
    const lastname = document.querySelector("#lastname");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    //errors
    const nameError = document.querySelector(".div-name");
    const lastnameError = document.querySelector(".div-lastname");
    const usernameError = document.querySelector(".div-username");
    const emailError = document.querySelector(".div-email");
    const passwordError = document.querySelector(".div-password");

    formRegister.addEventListener("submit",(e)=>{
        const error = [];
        let valid = /\S+@\S+\.\S+/ 

        if(name.value === ""){
            error.push(1);
            nameError.innerHTML += "<i> Debe ingresar un nombre </i>";
        }
        else if(name.value.length < 2){
            error.push(1);
            nameError.innerHTML += "<i> El nombre debe contener al menos 2 caracteres </i>";
        }

        if(lastname.value === ""){
            error.push(1);
            lastnameError.innerHTML += "<i> Debe ingresar un apellido </i>";
        }
        else if(lastname.value.length < 2){
            error.push(1);
            lastnameError.innerHTML += "<i> El apellido debe contener al menos 2 caracteres </i>";
        }

        if(username.value === ""){
            error.push(1);
            usernameError.innerHTML += "<i> Debe ingresar un nombre de usuario </i>";
        }
        else if(username.value.length < 2){
            error.push(1);
            usernameError.innerHTML += "<i> El nombre de usuario debe contener al menos 2 caracteres </i>";
        }        

        if(email.value === ""){
            error.push(1);
            emailError.innerHTML += "<i> Debe ingresar un email </i>";
        }
        else if(!valid.test(email.value)){
            error.push(1);
            emailError.innerHTML += "<i> El email debe ser válido </i>";
        }

        if(password.value === ""){
            error.push(1);
            passwordError.innerHTML += "<i> Debe ingresar una contraseña </i>";
        }
        else if(password.value.length < 8){
            error.push(1);
            passwordError.innerHTML += "<i> La contraseña debe contener al menos 8 caracteres </i>";

        } 

        if(error.length > 0){
            e.preventDefault();
        }
    })
})