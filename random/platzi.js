var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOK==true){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        var count = aleatorio(5, 50);
        console.log(count);
        for (var i = 0; i < count; i++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            papel.drawImage(vaca.imagen, x*80, y*80);
        }
    }
}



function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

