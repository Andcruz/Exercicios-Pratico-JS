/*let sinal ='*'
for(let i = 0; i < 5; i++){
    console.log(sinal)
    sinal += '*'
}*/


let sinal = '*****' 

for(let i = 1; i <= 5; i++){
    console.log(sinal)
    sinal = sinal.slice(0 , -1 )
}
