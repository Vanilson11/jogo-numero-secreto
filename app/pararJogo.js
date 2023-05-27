function pararJogo(chute){
    if(chute === 'pare'){
        document.body.style.backgroundColor = '#CD1818';
        document.body.innerHTML = `
            <h2>Game Over</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
}