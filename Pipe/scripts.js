let listaArtista = new Array() || [];


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
    let img = "../iconos/"+ document.getElementById("img").files[0].name;
    
    let desc = document.getElementById("desc").value;
    const newArtista = new Artist(nombre,lista,img,desc);
    listaArtista.push(newArtista);
    console.log(listaArtista);
    saveLocalStorage();
    
}

function saveLocalStorage(){
    localStorage.setItem("Artista", JSON.stringify(listaArtista));
}

function delet(i){
    listaArtista.splice(i,1);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}
function edit(i){
    let nombre = document.getElementById("nombreedit_"+i).value;
    let lista = document.getElementById("listaedit_"+i).value;
    let img = "../iconos/"+ document.getElementById("imgedit_"+i).files[0].name;
    let desc = document.getElementById("descedit_"+i).value;
    const artistAux = new Artist(nombre,lista,img,desc);
    
    listaArtista.splice(i,1,artistAux);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}


