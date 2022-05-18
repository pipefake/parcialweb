leerLocalStorageArtist();


function leerLocalStorageArtist() {
    listaAux = localStorage.getItem("Galeria");
    if (listaAux != null) {
        listaArtista = JSON.parse(listaAux);
        console.log("si hay");
        for (i = 0; i < listaArtista.length; i++) {
            const contArtista = document.getElementById('contArtista');
            let HTMLString = `
            <div>
            <form action="#" style="flex-direction: row;
            width: auto;">
            <div>
            <label>Nombre</label>
            <h1>${listaArtista[i].titulo}</h1>
            <input id="nombreedit_${i}" name="nombreedit"  type="text" value="${listaArtista[i].titulo}" required>
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
            <button class="btn_edit" onclick="edit(${i})"> Editar </button>
            <button class="btn_remove" onclick="delet(${i})"> Eliminar </button>
            </div>
            </form>
            </div>
            `;
            contArtista.innerHTML += HTMLString;

        }
    } else {
        console.log("no hay");
    }
}