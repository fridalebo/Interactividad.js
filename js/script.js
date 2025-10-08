var nombre = "frida";
let edad = 23;
const PI = Math.PI
const TAU = Math.PI * 2;

let esMAyorDeEdad = edad > edad >= 18;

nombre = "frida";
edad ="23";
console.log("hola " + nombre);

function saludar(_nombre="Mundo") {
    alert("hola " + _nombre);
}

saludar();
saludar(nombre);
saludar("Ana");