function validar(){
    var nombre
    var apellidos
    var correo
    var usuario
    var pass
    var telefono

    nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    
    apellidos = document.getElementById("apellidos").value;

    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.length>80){
        alert("Los apellidos son muy largos");
        return false;
    }
    
    correo = document.getElementById("correo").value;

    if (correo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (correo.length>100){
        alert("Su dirección de correo es muy larga");
        return false;
    }
    
    usuario = document.getElementById("usuario").value;

    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (usuario.length>20){
        alert("El nombre de usuario es muy largo");
        return false;
    }
    
    pass = document.getElementById("pass").value;

    if (pass === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    
    telefono = document.getElementById("telefono").value;

    if (telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (telefono.length>15){
        alert("El numero de telefono es muy largo");
        return false;
    }
        alert("Bienvenid@" + " " + nombre + "," + " " + "te recordamos que tus datos de registro son:" + " " + "Usuario:" + " "+ usuario + " " + "Contraseña:" + " " + pass);
}

// function validar(){
//     var nombre
//     nombre = document.getElementById("nombre").value;

//     if (nombre === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (nombre.length>30){
//         alert("El nombre es muy largo");
//         return false;
//     }
//     var apellidos
//     apellidos = document.getElementById("apellidos").value;

//     if (apellidos === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (apellidos.length>80){
//         alert("Los apellidos son muy largos");
//         return false;
//     }
//     var correo
//     correo = document.getElementById("correo").value;

//     if (correo === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (correo.length>100){
//         alert("Su dirección de correo es muy larga");
//         return false;
//     }
//     var usuario
//     usuario = document.getElementById("usuario").value;

//     if (usuario === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (usuario.length>20){
//         alert("El nombre de usuario es muy largo");
//         return false;
//     }
//     var pass
//     pass = document.getElementById("pass").value;

//     if (pass === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     var telefono
//     telefono = document.getElementById("telefono").value;

//     if (telefono === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (telefono.length>15){
//         alert("El numero de telefono es muy largo");
//         return false;
//     }
//         alert("Bienvenid@" + " " + nombre + "," + " " + "te recordamos que tus datos de registro son:" + " " + "Usuario:" + " "+ usuario + " " + "Contraseña:" + " " + pass);
// }

// funcion Saludo
// function Saludo(){
//     alert("Hello" + " " + nombre + ", welcome to D-Coding");
// }

// function validar(){
//     var nombre
//     nombre = document.getElementById("nombre").value;

//     if (nombre === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (nombre.length>30){
//         alert("El nombre es muy largo");
//         return false;
//     }

//     alert(saludo);
// }

// function validar(){
//     var apellidos
//     apellidos = document.getElementById("apellidos").value;

//     if (apellidos === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (apellidos.length>80){
//         alert("Los apellidos son muy largos");
//         return false;
//     }

//     alert(saludo);
// }

// function validar(){
//     var correo
//     correo = document.getElementById("correo").value;

//     if (correo === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (correo.length>100){
//         alert("Su dirección de correo es muy larga");
//         return false;
//     }

//     alert(saludo);
// }

// function validar(){
//     var usuario
//     usuario = document.getElementById("usuario").value;

//     if (usuario === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (usuario.length>20){
//         alert("El nombre de usuario es muy largo");
//         return false;
//     }

//     alert(saludo);
// }

// function validar(){
//     var telefono
//     usuario = document.getElementById("telefono").value;

//     if (telefono === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (telefono.length>15){
//         alert("El numero de telefono es muy largo");
//         return false;
//     }

//     alert(saludo);
// }