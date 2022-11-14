function imc(){
    //IMC

    var altura = document.getElementById('estatura').value
    var peso = document.getElementById('peso').value
    var imc = (peso / (altura*altura)).toFixed(1)
    var classe

    if(imc < 18.5){
        classe = 'Abaixo do Peso Ideal'
    } else if (imc >= 18.5 && imc < 25){
        classe = 'Peso Ideal'
    } else if(imc >= 25 && imc < 30 ){
        classe = 'Sobrepeso'
    } else if(imc >= 30 && imc < 35){
        classe = 'Obesidade Grau 1'
    } else if(imc >= 35 && imc < 40){
        classe = 'Obesidade Grau 2'
    } else if(imc >= 40){
        classe = 'Obesidade Grau 3'
    }

    localStorage.setItem('classificacao', classe)
    localStorage.setItem('valor', imc)

    //Informações pesoais

    var nome = document.getElementById('name').value
    var idade = document.getElementById('idade').value
    var sexo = document.getElementById('sexo').value

    localStorage.setItem('nick', nome)
    localStorage.setItem('id', idade)
    localStorage.setItem('genero', sexo)

    //FC

    var numBatimentos = document.getElementById('numBat').value
    var batMin = numBatimentos * 6
    var verificacao
    var fcMax 

    if(batMin >= 60 && batMin <= 80){
        verificacao = 'Valor Normal'
    } else {
        verificacao = 'Valor Fora da Escala'
    }

    if(sexo == 'masculino' || sexo == 'Masculino' || sexo == 'MASCULINO'){
        fcMax = 220 - idade
    } else if(sexo == 'feminino' || sexo == 'Feminino' || sexo == 'FEMININO'){
        fcMax = 226 - idade
    }
    localStorage.setItem('verifc', verificacao)
    localStorage.setItem('bat', batMin)
    localStorage.setItem('max', fcMax)

    //RQC

    var cintura = document.getElementById('cint').value
    var quadril = document.getElementById('quad').value
    var rqc = (cintura / quadril).toFixed(2)
    var risco

    if(sexo == 'masculino' || sexo == 'Masculino' || sexo == 'MASCULINO'){
        if(rqc < 0.95){
            risco = 'Baixo'
        } else if(rqc >= 0.96 && rqc <= 1){
            risco = 'Moderado'
        } else if(rqc > 1){
            risco = 'Alto'
        }
    } else if (sexo == 'feminino' || sexo == 'Feminino' || sexo == 'FEMININO'){
        if(rqc < 0.80){
            risco = 'Baixo'
        } else if(rqc >= 0.81 && rqc <= 0.85){
            risco = 'Moderado'
        } else if(rqc > 0.86){
            risco = 'Alto'
        }
    }

    localStorage.setItem('cintura', cintura)
    localStorage.setItem('quadril', quadril)
    localStorage.setItem('rqc', rqc)
    localStorage.setItem('risco', risco)

    //Peso, Altura

    localStorage.setItem('pes', peso)
    localStorage.setItem('alt', altura)
}
            
    
           
                
            