function receba(){
    var paragrafo = document.getElementById('imc')
    var classefic = document.getElementById('class')
    var nome1 = document.getElementById('n')
    var ida = document.getElementById('i')
    var batimentos = document.getElementById('fc')
    var sexo = document.getElementById('s')
    var fcm = document.getElementById('fcmax')
    var classFC = document.getElementById('cls')

    var cintura = document.getElementById('cint')
    var quadril = document.getElementById('quad')
    var rqC = document.getElementById('rq')
    var riscoSaude = document.getElementById('risc')

    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')

    classefic.textContent = localStorage.getItem('classificacao')
    paragrafo.textContent =  localStorage.getItem('valor');

    nome1.textContent = localStorage.getItem('nick')
    ida.textContent = localStorage.getItem('id')
    batimentos.textContent = localStorage.getItem('bat')
    classefic.textContent = localStorage.getItem('classificacao')
    sexo.textContent = localStorage.getItem('genero')
    fcm.textContent = localStorage.getItem('max')
    classFC.textContent = localStorage.getItem('verifc')

    cintura.textContent = localStorage.getItem('cintura')
    quadril.textContent = localStorage.getItem('quadril')
    rqC.textContent = localStorage.getItem('rqc')
    riscoSaude.textContent = localStorage.getItem('risco')

    peso.textContent = localStorage.getItem('pes')
    altura.textContent = localStorage.getItem('alt')
}
