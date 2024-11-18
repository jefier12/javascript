var saludo = "hola";
let adso = "2894667";
const dni = "1092341877";
const numero = [];
console.log(saludo);
console.log(adso);

{
    let adso = "victor";
    var saludo = "muchachos";
    // adso = "jefier"
    console.log(adso);
    console.log(saludo);
}

console.log(adso);
console.log(saludo);
console.log(window.saludo);
console.log(window.adso);
console.log(window);
console.clear();

let nombre = "jefier stevan";
let apellidos = "briceño vera";
console.log(nombre.length);
console.log(nombre[7]);
let completo = nombre + "" + apellidos;
console.log(completo.toUpperCase());
console.log(completo.includes("fredy"));
console.log(completo.split(""));
console.clear();

let item1 = "item 1";
let item2 = "item 1";
let item3 = "item 1";
let item4 = "item 1";
let item5 = "item 1";

let lista = `<ul>
    <li>${item1}</li>
    <li>${item2}</li>
    <li>${item3}</li>
    <li>${item4}</li>
    <li>${item5}</li>
    </ul>`; // ` = permite hacer saltos y interpolar

console.log(lista);
console.clear();


//se declaran numeros normalmento o con un objeto
let entrada = prompt("ingrese un numero")
let uno = 5;
let dos = new Number(2);
let tres = "3.5";
console.log(dos);
let flotante = 7.1542;
console.log(flotante);
console.log(flotante.toFixed(1));
console.log(tres * uno);
let nuevo = parseFloat(tres);
if(typeof tres === "number"){
    console.log(tres * uno);
}
else{
    console.log("no");  
}

console.log(typeof entrada);


console.log(typeof tres === "number");

let respuesta = confirm("¿quieren salir a comer?")

alert(respuesta)





