// let n = 0;
// let contador = 0;
// while (contador <= n) {
//     console.log(contador);
//     contador++;
// // }
// do{
//     console.log("?");
// }while(false){}
// for (let i = 1; i <= 20; i++) 
//     {
//         console.log(i * 2);
//     }
// let primos = 0;
// let i = 1;
// while(primos < 10)
// {    
//     let cont=0
//     for(let x = 1; x <= i; x++)
//     {
//         ix = i % x
//         if(ix === 0) cont++;
//     }
//     if(cont === 2) 
//     {
//         primos++;
//         console.log(`${primos}.${i}`);    
//     }
//     i++;
// }


// let numero = parseFloat(prompt(" ingrese el numero a evaluar: "))
// const esPrimo = (a) => {
//     try{
//         let primo = true;
//         if (a ==== 1) return false;
//         for (let i = 2; i =)
//     }
    

// }


// for (let i = 0; 1 < 10 ; i++){
//     if (i === 4) continue;
//     console.log(`Item ${i}`);
// }

// const numeros = [1,2,3,4];

// // let a = numeros[0];
// // let b = numeros[1];
// // let c = numeros[2];
// // let d = numeros[3];

// let [a,b,c,d,e = 25] = numeros;

// console.log(a,b,c,d,e);




// const persona = {
//     edad : 17,
//     nombre : "jefier stevan briceño vera",
//     username : "pepe2"
// }

// const { edad:edad2,nombre:nombre2,username="pepe" } = persona;

// console.log(edad2,nombre2,username)


// let caracter = persona.edad;
// let caracter2 = persona.nombre;

// console.log(persona);


// let n1 = 220;
// let n2 = 284;
// let sonAmigos = amigos(n1,n2);
// console.log(sonAmigos);


// const amigos = (n1,n2) => {
//     let cont1 = 0;
//     let cont2 = 0;
//     for( let a = 1; a < n1; a++){
//         if(n1 % a === 0) cont1 += a;        
//     }
//     for( let a = 1; a < n2; a++){
//         if(n2 % a === 0) cont2 += a;        
//     }
//     if(n1 === cont1 && n2 === cont2){
//         return true
//     }else{
//         return false
//     }
// }

