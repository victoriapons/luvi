for (let i=3; i>0; i--) {
    alert (i);
    
}alert ("¡Bienvenido/a a nuestra web!");

let news = prompt ("¿Te gustaría suscribirte a nuestro nesletter? Ingrese si o no");
    if (news=="si"){
        let email = prompt ("Ingrese su correo");
        alert ("Su correo "+ email + " ¡ha sido registrado!")
    }else {
        console.log ("El usuario no se ha registrado.")
    }

