window.addEventListener("load", ()=>{
    const formCreate = document.querySelector(".form-create");

    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    //const image = document.querySelector("#image");

    const nameError = document.querySelector(".div-name");
    const descriptionError = document.querySelector(".div-description");
    //const imageError = document.querySelector(".div-image");

    formCreate.addEventListener("submit",(e)=>{
        const error = [];

        if(name.value === ""){
            error.push(1);
            nameError.innerHTML += "<i> Debe ingresar un nombre </i>";
        }
        else if(name.value.length < 5){
            error.push(1);
            nameError.innerHTML += "<i> El nombre debe contener al menos 5 caracteres </i>";
        }
        
        if(description.value.length < 20){
            error.push(1);
            descriptionError.innerHTML += "<i> Debe contener al menos 20 caracteres </i>";
        }
        
        if(error.length > 0){
            e.preventDefault();
        }
        //Falta imagen.

    })
})