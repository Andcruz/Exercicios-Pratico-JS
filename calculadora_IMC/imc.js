function imc (peso, altura) {
   const imc = peso / (altura ** 2);
    if(imc > 0 && imc <= 18.5){
        return  imc.toFixed(2) + ' Abaixo do peso!'
    } else if(imc <= 24.9){            //18.5 até 24.9 → Peso normal
        return imc.toFixed(2) + " Peso ideal!";
    } else {
        return  imc.toFixed(2) + " Sobrepeso!"
    }   

             
} 

const prompt = require('prompt-sync')();

const nome = prompt("Digite seu nome: ");
let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

console.log(`${nome}, peso ${peso}kg, altura ${altura}m.`);
console.log(`IMC = ${imc(peso, altura)}`);
