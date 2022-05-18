let listaArtista = new Array() || [];


class Artist{
    constructor(nombre,img,desc,lista){
        this.nombre= nombre;
        this.img=img;
        this.desc=desc;
        this.lista=lista;
    }

}


function insertarArtist(){
    let nombre = document.getElementById("nombre").value;
    let img = "fotosArtistas/"+ document.getElementById("img").files[0].name;
    let desc = document.getElementById("desc").value;
    let lista = document.getElementById("lista").value;
    const newArtista = new Artist(nombre,img,desc,lista);
    listaArtista.push(newArtista);
    console.log(listaArtista);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
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
    let img = "fotosArtistas/"+ document.getElementById("imgedit_"+i).files[0].name;
    let desc = document.getElementById("descedit_"+i).value;
    let lista = document.getElementById("listaedit_"+i).value;
    const artistAux = new Artist(nombre,img,desc,lista);
    
    listaArtista.splice(i,1,artistAux);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}
function remove(){
    listaArtista.splice(0,listaArtista.length);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}



