var pantalla = document.querySelector("canvas");
var empezar = document.querySelector("button");
var reempezar = document.querySelector(".restart");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1000, 800);

var radio = 10;
var xAleatorio;
var yAleatorio;

var gun = document.getElementById("gunshot");
var counter = 0; 

function disenharCircunferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpiarPantalla() {

    pincel.clearRect(0, 0, 1000, 800);

}

var x = 0;
var y = 0;

function actualizarPantalla() {

    limpiarPantalla();
    xAleatorio = sortear(1000);
    yAleatorio = sortear(800);
    objetivo(xAleatorio, yAleatorio);
    x++;

    

}

function objetivo(x, y) {

    disenharCircunferencia(x, y, radio + 20, "red");
    disenharCircunferencia(x, y, radio + 10, "white");
    disenharCircunferencia(x, y, radio, "red");
}

function sortear(maximo) {
    return Math.floor(Math.random() * maximo);
}

xAleatorio = sortear(1000);
yAleatorio = sortear(800);

//setInterval(actualizarPantalla, 1000);
//setInterval(actualizarPantalla,10);

function disparar(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    
    sound();

    if ((x < xAleatorio + radio) && (x > xAleatorio - radio) && (y < yAleatorio + radio) && (y > yAleatorio - radio)) {
        //alert("Has acertado");
        counter = counter +1;
        document.getElementById("count").innerHTML = counter;
        actualizarPantalla();

    }
}

function counterZero(){
    actualizarPantalla();
    counter = 0;
    document.getElementById("count").innerHTML = counter;
}

function sound(){
    gun.play();
}
pantalla.onclick = disparar;
empezar.onclick = actualizarPantalla;


