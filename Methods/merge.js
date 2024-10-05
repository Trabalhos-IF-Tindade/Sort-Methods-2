export class Merge {

    exec(arr) {
        let updates = 0;
        let comparisons = 0;

        const sort = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }
            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);

            // Contabiliza comparações (ao dividir o array)
            comparisons += left.length + right.length;

            return this.merge(sort(left), sort(right));
        };

        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                comparisons++; // Comparando os elementos
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
                updates++; // Atualização do array resultante
            }

            // Concatena os elementos restantes (se houver)
            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };

        this.merge = merge; // Atualiza a função merge usada

        let tempoInicial = performance.now();
        sort(arr);
        let tempoFinal = performance.now();
        let tempoExecucao = +((tempoFinal - tempoInicial).toFixed(3));

        return { tempoExecucao, updates, comparisons };
    }
}
