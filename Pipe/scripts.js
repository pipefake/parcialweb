let listaArtista = new Array();

class Artist{
    constructor(nombre,lista,img,desc){
        this.nombre= nombre;
        this.lista=lista;
        this.img=img;
        this.desc=desc;
    }

}
function insertarArtist(){
    let nombre = document.getElementById("nombre").value;
    let lista = document.getElementById("lista").value;
    let img = document.getElementById("img").value;
    let desc = document.getElementById("desc").value;
    const newArtista = new Artist(nombre,lista,img,desc);
    listaArtista.push(newArtista);
    console.log(listaArtista);
    saveLocalStorage();
}

function saveLocalStorage(){
    localStorage.setItem("Artista", JSON.stringify(listaArtista));
}

function insertArtist(){
}


