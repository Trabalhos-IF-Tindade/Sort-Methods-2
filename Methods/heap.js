export class Heap {

    exec(arr) {
        let tempoInicial = performance.now();
        let updates = 0;
        let comparisons = 0;

        var N = arr.length;

        // Build heap (rearrange array)
        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            comparisons += this.heapify(arr, N, i, updates); // Atualiza o número de comparações

        // One by one extract an element from heap
        for (var i = N - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            updates++; // Atualiza o contador de trocas

            // call max heapify on the reduced heap
            comparisons += this.heapify(arr, i, 0, updates); // Atualiza o número de comparações
        }

        let tempoFinal = performance.now();
        let tempoExecucao = +((tempoFinal - tempoInicial).toFixed(3));
        return { tempoExecucao, updates, comparisons };
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    heapify(arr, N, i, updates) {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        let localComparisons = 0; // Contador local para esta chamada

        // If left child is larger than root
        if (l < N) {
            localComparisons++; // Contagem de comparação
            if (arr[l] > arr[largest]) {
                largest = l;
            }
        }

        // If right child is larger than largest so far
        if (r < N) {
            localComparisons++; // Contagem de comparação
            if (arr[r] > arr[largest]) {
                largest = r;
            }
        }

        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            updates++; // Incrementa o contador de atualizações

            // Recursively heapify the affected sub-tree
            localComparisons += this.heapify(arr, N, largest, updates); // Acumula comparações
        }

        return localComparisons; // Retorna o número de comparações feitas
    }
}
