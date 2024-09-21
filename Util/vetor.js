export class Vetor {

    constructor() { }

    criaVetorCrescente(tamanho) {
        let vetor = [];
        for (let c = 1; c <= tamanho; c++) {
            vetor.push(c);
        }

        return vetor;
    }

    criaVetorDecrescente(tamanho) {
        let vetor = [];
        for (let c = tamanho; c > 0; c--) {
            vetor.push(c);
        }

        return vetor;
    }

    criaVetorAleatorio(tamanho) {
        let vetor = [];
        for (let c = tamanho; c > 0; c--) {
            let newNumber = Math.floor(Math.random() * 1000000) + 1

            if (!vetor.find(elemento => elemento == newNumber)) {
                vetor.push(newNumber);
            }
        }

        return vetor;
    }

}