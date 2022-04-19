/*function acceder()
{
    var clave, user;
    
    user= document.getElementById("user").value;
    clave= document.getElementById("password").value;
    console.log(user);
    console.log(password);
    if(user=="admin" && clave==="1234")
    {
        alert ("Bienvenido al panel administrativo");
        window.location="hola.html";
    }
   else
    {
    alert("Por favor ingrese nombre de usuario y contraseña correctos.")
    console.log("Contraseña incorrecta");
    }
}

function encriptarClave(clave)
{
    return btoa(clave);
}

function desencriptarClave(clave) {
    return atob(clave);
}


let claveEncriptada = encriptarClave("1234");
console.log(`Clave encriptada: ${claveEncriptada}`);

let claveDesencriptada = desencriptarClave(claveEncriptada);
console.log(`Clave desencriptada: ${claveDesencriptada}`);*/



function acceder()
{
    let claveAccesoEncriptada = encriptarClave("1234");
    var clave, user;
    
    user= document.getElementById("user").value;
    clave= document.getElementById("password").value;
    
    let claveUsuarioEncriptada = encriptarClave(clave);
    console.log(`Clave usuario encriptada ${claveUsuarioEncriptada}`);

    if(user=="admin" && claveUsuarioEncriptada===claveAccesoEncriptada)
    {
        alert ("Bienvenido al panel administrativo");
        window.location="hola.html";
    }
   else
    {
        alert("Por favor ingrese nombre de usuario y contraseña correctos.")
        console.log("Contraseña incorrecta");
    }
}

function encriptarClave(clave)
{
    return btoa(clave);
}

function desencriptarClave(clave) {
    return atob(clave);
}
