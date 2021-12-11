import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo == 'preco') {
        //mask para o preço
        SimpleMaskMoney.setMask(input, {   
            prefix: 'R$ ',  
            fixed: true, 
            fractionDigits: 2 , 
            DecimalSeparator: ',' , 
            ThousandsSeparator: '.', 
            cursor : 'end' 
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})