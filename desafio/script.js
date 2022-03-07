var vetor = []
var qpares = 0
function incluir(){
    let num = document.querySelector('input#num') // receberá o número
    vetor.push(Number(num.value)) // colocando valor no vetor
    num.value =' ' // limpa a caixa de entrada
    num.focus() // coloca a barra de escrita na caixa de entrada
    vetor.sort()//ordena o

}
function pares(){ // função para acessar o vetor em duas opções 
    let dif = document.querySelector('input#dif')
    var resp = document.querySelector('p#resp')
    
    for (let n = 0; n < vetor.length; n++)  { 
        for(let y = 0; y < vetor.length ; y++){
            if(conpares(vetor[n],vetor[y]) == true){
                resp.innerHTML += `[${vetor[n]} , ${vetor[y]} ]` // mostra os pares dentro do critério diferença
            }
        }
        
    }

    resp.innerHTML += `<br>A quantidade de pares ${qpares}`
    resp.innerHTML += `<br>Com a diferença ${Number(dif.value)}`


    function conpares(x,y) { // função para analisar a diferença dos pares
        if(x-y == Number(dif.value)){
            qpares++
            return true // retorna verdadeiro para cada par dentro da diferença
        }
    }

}