leerLocalStorageArtist();


function leerLocalStorageArtist(){
    listaArtista = JSON.parse(localStorage.getItem("Artista"));
    console.log(listaArtista);
    if(listaArtista!=null){
        for(i = 0; i<listaArtista.length; i++){
            const contArtista = document.getElementById('contArtista');
	        let HTMLString = `
            <div>
            <form action="#">
            <input id="nombreedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].nombre}" required>
            <input id="listaedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].lista}" required>
            <img src="${listaArtista[i].img}">
            <input type="file" id="imgedit_${i}" name="fichero"  accept=".jpg, .jpeg, .png"  value="${listaArtista[i].img}" required>
            <input id="descedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].desc}" required>
            <button onclick="delet(${i})"> Eliminar </button>
            <button onclick="edit(${i})"> Editar </button>
            </form>
            </div>
            `;
	        contArtista.innerHTML += HTMLString;
        }
    }

}