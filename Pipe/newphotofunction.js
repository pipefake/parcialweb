
    leerLocalStorageArtist();




function leerLocalStorageArtist(){
    listaArtista = JSON.parse(localStorage.getItem("Artista"));
    console.log(listaArtista);
    if(listaArtista!=null){
        for(i = 0; i<listaArtista.length; i++){
            const contArtista = document.getElementById('contArtista');
	        let HTMLString = `
            <div>
            <h1>${listaArtista[i].nombre}</h1>
            </div>
            `;
	        contArtista.innerHTML += HTMLString;
        }
    }

}