function imc (peso, altura) {
   const imc = peso / (altura ** 2);
    if(imc > 0 || imc <= 18.5){
        return  imc.toFixed(2) + ' Abaixo do peso!'
    } else if(imc <= 24.9){            //18.5 até 24.9 → Peso normal
        return imc.toFixed(2) + " Peso ideal!";
    } else {
        return  imc.toFixed(2) + " Sobrepeso!"
    }   

             
} 
let nome = ""
let peso = 105
let altura = 1.63
console.log("Digite seu nome:");
console.log(`${nome} ${peso}kg, ${altura} de altura. IMC = ${imc(peso, altura)}`);

/*
Peça:
nome
peso
altura
Calcule o IMC:

IMC=
altura
2
peso
	​
Mostre:
nome da pessoa
valor do IMC
classificação:
abaixo de 18.5 → Abaixo do peso
18.5 até 24.9 → Peso normal
25 até 29.9 → Sobrepeso*/