leerLocalStorageArtist();


function leerLocalStorageArtist(){
    listaAux = localStorage.getItem("Artista");
    if(listaAux != null){
        listaArtista = JSON.parse(listaAux);
        console.log("si hay");
        for(i = 0; i<listaArtista.length; i++){
            const contArtista = document.getElementById('contArtista');
	        let HTMLString = `
            <div>
            <form action="#" style="width: AUTO;flex-direction: ROW;">
            <div>
            <label>Nombre</label>
            <h1>${listaArtista[i].nombre}</h1>
            <input id="nombreedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].nombre}" required>
            </div>
            <div>
            <label>Imagen</label>
            <img src="${listaArtista[i].img}">
            <input type="file" id="imgedit_${i}" name="fichero"  accept=".jpg, .jpeg, .png"  placeholder="${listaArtista[i].img}" required>
            </div>
            <div>
            <label>Descripción</label>
            <h2>${listaArtista[i].desc}</h2>
            <input id="descedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].desc}" required>
            </div>
            <div>
            <label>Playlist</label>
            <div id="frameplaylist">
            ${listaArtista[i].lista}
            </div>
            <input id="listaedit_${i}" name="nombreedit"  type="text" value="" required>
            </div>
            <button class="btn_edit" onclick="edit(${i})"> Editar </button>
            <button class="btn_remove" onclick="delet(${i})"> Eliminar </button>
            </form>
            </div>
            `;
	        contArtista.innerHTML += HTMLString;
            
        }
    }else{
        console.log("no hay");
    }
}