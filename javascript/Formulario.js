var boton = document.getElementById('Botoncito')
var boton2 = document.getElementById('Botoncito2')

boton.addEventListener("click", obtenerDatos)
boton.addEventListener("click", determianrUbicacion)
boton.addEventListener("click", calcularDescuento)
boton.addEventListener("click", MostrarCosto)
boton.addEventListener("click", ValidarNumBoletas)

const CodDesc = "MUSIC50"
var Pdescuento = 0.30
var descuentoFinal = 0

var ValorBoleta = 0
var ValorAMostrar
var CostoTotal
var nBoletas
var descuento

var Validacionubicacion
var ValidacionDatos

var DatosCorrectos

function ValidarNumBoletas()
{


}

function MostrarCosto()
{
    ValorAMostrar = document.getElementById('CPB') 
    CostoTotal = document.getElementById('CT') 
    nBoletas =  document.getElementById('Boletas').value
    descuento = calcularDescuento()
    
    var ubicacion = document.getElementById('Ubicacion').value
    var numBoletas = document.getElementById('Boletas').value

    var MasAvisos

   
        if(numBoletas === "..." || ubicacion === "...")
        {
        
        console.log("hasta aqui ")

        if( ubicacion === "..." && MasAvisos != "No")
        {
            alert("Debes seleccionar una ubicacion")
        
            console.log("Debes seleccionar la ubicacion")

            MasAvisos = "No"


        }

        if(numBoletas === "..." && MasAvisos != "No" )
        {
            alert("Debes seleccioanr una cantidad de boletas")

            console.log("Debes seleccionar el numero de boletas")

            MasAvisos = "No"
        }

    }else
    {
        ValidacionDatos = "ok" 
    }
     

    if (ValidacionDatos=== "ok")
    {
        ValorAMostrar = "Costo por boleta: $" + (ValorBoleta - (descuento*ValorBoleta))
        CostoTotal = "Valor total: $" + ((ValorBoleta - (descuento*ValorBoleta)) * nBoletas) 
        
        if(Pdescuento == 0.50)
        {
            document.getElementById('NotificacionDesc').innerHTML= "🎉🎉🎉Felicitaciones, por el codigo MUSIC50 has recibido un 50% de descuento en tus entradas"
        }
        else{
            document.getElementById('NotificacionDesc').innerHTML=""
        }
       
        document.getElementById('CPB').innerHTML= ValorAMostrar
        document.getElementById('CT').innerHTML= CostoTotal

        console.log("Valor Boleta a mostrar: " + ValorBoleta )

    }

        

    
    
   
}


function determianrUbicacion()
{
    //var dialogo = document.getElementById('ms')
    //var aviso = document.getElementsById('CPB')
    
   
    if(document.getElementById('Ubicacion').value === "Diamante")
    {
        ValorBoleta = 2000000
    }
    else
    {
        if(document.getElementById('Ubicacion').value === "Platino")
        {
            ValorBoleta = 1200000            
        }
        else
        {
            if (document.getElementById('Ubicacion').value === "Oro")
            {
                ValorBoleta = 800000
            }
            else
            {
                if (document.getElementById('Ubicacion').value === "Bronce")
                {
                    ValorBoleta = 400000
                }
            }
        }
    }
    


    
    return ValorBoleta

}

function calcularDescuento()
{

    if (document.getElementById('Descuento').value === CodDesc)
    {
        Pdescuento = 0.50
    }
    else{

        Pdescuento = 0 
    }

    descuentoFinal = ValorBoleta  - (Pdescuento*ValorBoleta)
    console.log(descuentoFinal)
    console.log("Descuento: " + (Pdescuento * 100) + "%")
    console.log("Valor Boleta: $" + descuentoFinal)
    return Pdescuento
    
}
function obtenerDatos()
{
    var nombre = document.getElementById('Name').value
    var apellido = document.getElementById('LName').value
    var correo = document.getElementById('Mail').value
    var telefono = document.getElementById('Telefono').value
    var descuento = document.getElementById('Descuento').value

   
    console.log(nombre)
    console.log(apellido)
    console.log(correo)
    console.log(telefono)
    console.log (descuento)

    console.log (ubicacion)
    console.log(numBoletas)
    

}

