leerLocalStorageArtist();


function leerLocalStorageArtist(){
    listaAux = localStorage.getItem("Artista");
    if(listaAux != null){
        listaArtista = JSON.parse(listaAux);
        console.log("si hay");
        for(i = 0; i<listaArtista.length; i++){
            const contArtista = document.getElementById('contArtista');
	        let HTMLString = `
            <div class="contenedorArt" id="contenedorArt">
            <img class="imgArtista" src="../administrador/artistas/${listaArtista[i].img}">
            <h1>${listaArtista[i].nombre}</h1>
            <p>${listaArtista[i].desc}</p>
            <div id="frameplaylist">
            ${listaArtista[i].lista}
            </div>
            </div>
            `;
	        contArtista.innerHTML += HTMLString;
            
        }
    }else{
        console.log("no hay");
    }
    console.log(document.getElementsByClassName('af').style.backgroundColor);

}
