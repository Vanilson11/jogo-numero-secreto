window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//assim que a página carregar, o reconhecimento já estará disponível para ser usado. Para ativá-lo e fazer com que ele seja usado assim que a página carregar, é preciso ativá-lo com um var.start()
const elementoChute = document.querySelector('#chute')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak) //quando o recognition for executado, essa escutador de eventos vai verificar os resultados retornados do recognatio

function onSpeak(e){
    let chute = e.results[0][0].transcript
    console.log(e.target.lang)
    exibeChuteNaTela(chute)
    verficaChuteValido(chute)
    pararJogo(chute)
}

function exibeChuteNaTela(valorChute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${valorChute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) //quando o recognition acabar, quando ele parar, a função recognition.start será chamada, o que fará com que o recognition recomece.
