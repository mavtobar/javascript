var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


class Pakiman{
    constructor(nombre, vida, ataque){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        
        this.imagen.src = imagenes[this.nombre];
    }

    hablar(){
        alert(this.nombre);
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br / >");
        document.write("Ataque: " + this.ataque + "<hr />");
        document.write("</p>");
    }
}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 10));
coleccion.push(new Pakiman("Pokacho", 80, 15));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var p of coleccion){
    p.mostrar();
}