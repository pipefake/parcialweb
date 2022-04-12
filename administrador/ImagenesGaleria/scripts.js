let listaArtista = new Array() || [];


class Artist{
    constructor(titulo,img,desc,lista){
        this.titulo= titulo;
        this.img=img;
        this.desc=desc;
    }

}


function insertarArtist(){
    let titulo = document.getElementById("nombre").value;
    let img = "fotosGaleria/"+ document.getElementById("img").files[0].name;
    let desc = document.getElementById("desc").value;
    const newArtista = new Artist(titulo,img,desc);
    listaArtista.push(newArtista);
    console.log(listaArtista);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}

function saveLocalStorage(){
    localStorage.setItem("Galeria", JSON.stringify(listaArtista));
}

function delet(i){
    listaArtista.splice(i,1);
    saveLocalStorage();
    leerLocalStorageArtist();
    location.reload();
}
function edit(i){
    let titulo = document.getElementById("nombreedit_"+i).value;
    let img = "fotosGaleria/"+ document.getElementById("imgedit_"+i).files[0].name;
    let desc = document.getElementById("descedit_"+i).value;
    const artistAux = new Artist(titulo,img,desc);
    
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



