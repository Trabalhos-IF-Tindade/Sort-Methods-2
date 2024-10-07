import { Vetor } from './Util/vetor.js'
import { Heap } from './Methods/heap.js'
import { Merge } from './Methods/merge.js'
import { Quick } from './Methods/quick.js';



let vetor = new Vetor();
let heap = new Heap();
let merge = new Merge();
let quick = new Quick();


function obterDados(method, order) {
    let resultados = [];
    console.log(order)

    let vetorAleatorio = vetor.criaVetorAleatorio(50000)

    for (let tamanhoVetor = 1000; tamanhoVetor <= 50000; tamanhoVetor += 5000) {
    
        let vector = []

        if (order == "crescente") {
            vector = vetor.criaVetorCrescente(tamanhoVetor);
        } else if (order === "decrescente") {
            vector = vetor.criaVetorDecrescente(tamanhoVetor);
        } else if (order === "aleatoria") {
            vector = vetorAleatorio.slice(0, tamanhoVetor);
        } else {
            console.log("Tipo de ordenação inexistente!")
            return
        }

        // Executar o algoritmo capturar o resultado
        let { updates, comparisons, tempoExecucao } = method.exec(vector);

        // Armazenar os dados para exibir na tabela
        resultados.push({
            Tamanho: tamanhoVetor,
            TempoExecucao: tempoExecucao,  // Tempo formatado
            Trocas: updates,
            Comparações: comparisons
        });
        if(tamanhoVetor == 1000){
            tamanhoVetor = 0
        }
    }

    // Exibir os dados em formato de tabela
    console.table(resultados);
}

console.log("Quick:")
obterDados(quick, "crescente")

console.log("Merge:")
obterDados(merge, "crescente")

console.log("Heap:")
obterDados(heap, "crescente")

// console.log("Inserction:")
// obterDados(insercao, "crescente")