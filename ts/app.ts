function Caixa(entrada, saida, caixa){
    this.entrada = entrada
    this.saida = saida
    this.caixa = caixa

    this.entradas = function(valor){
        this.caixa += valor
        console.log('R$: ' + valor + '  Pagos')        
    }
    this.saidas = function(valor){
        if (this.caixa>= valor) {
            this.caixa -= valor
            console.log('R$ '+ valor + '  Retirado');
        }
        else{
            console.log('Caixa com puca grana');
        }
    }


}

let dia1 = new Caixa('Vinicius','Id 007', 500)
console.log('Caixa atualizado  '+ dia1.caixa);
console.log('-------Recebidos-------');
dia1.entradas(100)
console.log('Caixa atualizado'+ dia1.caixa);
console.log('-------Pagamentos-------');
dia1.saidas(250)
console.log('Caixa atualizado  '+dia1.caixa);