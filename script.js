let idade = parseInt(prompt("Quantos anos voce tem? "))
let ingresso = prompt("Voce tem ingresso? [S/N ").toLowerCase() //true

if (ingresso === "s") { // 21, s
    ingresso = true
    if(idade >= 18 && ingresso == true) {
        alert ("voce pode entrar!")
    } else {
        alert("voce nao pode entrar...")
    }
}  else if (ingresso === "n") {
    ingresso = false
}  else {
    alert("voce digitou algo errado. fim do programa.")
}