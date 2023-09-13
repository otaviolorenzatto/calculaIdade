function calculadoraIdade() {
    let dataAtual= new Date().getFullYear();

    let anoNasceu = prompt("Qual ano você nasceu?")

    let calculoIdade = dataAtual - anoNasceu

    if (dataAtual > anoNasceu){
            return("Sua idade é de " + calculoIdade + " anos" )
    }else{
        ("Digite novamente o ano que você nasceu")
    }
}
console.log(calculadoraIdade())