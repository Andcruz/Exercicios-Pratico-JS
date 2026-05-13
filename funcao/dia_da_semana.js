function semana(semana) {
    switch (semana) {
        case (1):
            return 'Domingo'
        case (2):
            return 'Segunda-Feira'
        case (3):
            return 'Terça-Feira'
        case (4):
            return 'Quarta-Feira'
        case (5):
            return 'Quinta-Feira'
        case (6):
            return 'Sexta-Feira'
        case (7):
            return 'Sábado'
        default:
            return 'Digite de 1 a 7!'
    }
}
console.log(semana(2))

/*
  Use return Quando a função precisa devolver um valor.
    A função calcula algo. 
    Outro código vai usar o resultado.

   Use console.log() Quando você só quer mostrar algo na tela (teste ou debug).
    ✔  Apenas imprime.
    ❌ Não retorna valor.
  */