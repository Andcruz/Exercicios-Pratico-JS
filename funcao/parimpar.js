function parimpar(n){
    if ( n % 2 == 0) {
    return 'Par!'
    } else {
        return 'Impar!'
    }
}
let num = 5
console.log(`O número ${num} é ${parimpar(num)}`)