function verficaChuteValido(chute){
    const numero = +chute //o +chute transforma o número que está em formato de string para um número inteiro 

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido.</div>`
        return
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML +=`
          <div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}.</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}. </h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor //vai verificar se o número é maior que o maiorValor ou se é menor que o menorValor e irá retornar true ou flase
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload(); //faz a página recarregar
    }
})

