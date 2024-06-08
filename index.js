let vitorias = 13
let derrotas = 12
let saldoPartidas = vitorias - derrotas

function caucRank() {
    if (saldoPartidas > 0){
        if (vitorias <= 10){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Ferro.`)
        }else if (vitorias <= 20){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Bronze.`)
        }else if (vitorias <= 50){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Prata.`)
        }else if (vitorias <= 80){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Ouro.`)
        }else if (vitorias <= 90){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Diamante.`)
        }else if (vitorias <= 100){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Lendario.`)
        }else if (vitorias > 100){
            console.log(`O Herói tem o saldo de ${saldoPartidas} e está no nivel Imortal.`)
        }
    } else {
        console.log(`O Aspirante a Herói tem mais derrotas do que vitórias e não está rankeado, se esforce mais e continue tentando!`)
    }
}
caucRank()