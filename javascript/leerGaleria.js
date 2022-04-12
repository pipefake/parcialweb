leerLocalStorageArtist();


function leerLocalStorageArtist(){
    listaAux = localStorage.getItem("Galeria");
    if(listaAux != null){
        listaGaleria = JSON.parse(listaAux);
        console.log("si hay");
        for(i = 0; i<listaGaleria.length; i++){
            const contGaleria = document.getElementById('contGaleria');
	        let HTMLString = `
            <div class="contenedorArt" id="contenedorArt">
            <img class="imgArtista" src="../administrador/ImagenesGaleria/${listaGaleria[i].img}">
            <h1>${listaGaleria[i].titulo}</h1>
            <p>${listaGaleria[i].desc}</p>
      
            </div>
            `;
	        contGaleria.innerHTML += HTMLString;
            
        }
    }else{
        console.log("no hay");
    }
    console.log(document.getElementsByClassName('af').style.backgroundColor);

}
