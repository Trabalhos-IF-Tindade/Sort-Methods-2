export class Quick {
  exec(arr) {
    let updates = 0;
    let comparisons = 0;

    const quickSort = (arr, start, end) => {
      if (start < end) {
        let pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1); // Chamada recursiva para a parte esquerda do pivô
        quickSort(arr, pivotIndex + 1, end);   // Chamada recursiva para a parte direita do pivô
      }
    };

    const partition = (arr, start, end) => {
      // Escolhe o elemento do meio como pivô
      let mid = Math.floor((start + end) / 2);
      let pivot = arr[mid];  // Pivô é agora o elemento do meio
      let i = start;         // Índice para a posição correta do pivô

      for (let j = start; j <= end; j++) {
        comparisons++; // Incrementa o contador de comparações
        if (arr[j] < pivot) {
          // Se o elemento atual for menor que o pivô, troca com o índice i
          if (i !== j) { // Evita troca desnecessária
            swap(arr, i, j);
          }
          i++; // Incrementa o índice i
        }
      }
      // Coloca o pivô na posição correta
      swap(arr, i, mid);
      return i; // Retorna a nova posição do pivô
    };

    const swap = (arr, firstIndex, secondIndex) => {
      updates++; // Incrementa o contador de trocas
      let temp = arr[firstIndex];
      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = temp;
    };

    let tempoInicial = performance.now();
    quickSort(arr, 0, arr.length - 1);
    let tempoFinal = performance.now();
    let tempoExecucao = +((tempoFinal - tempoInicial).toFixed(3));

    return { tempoExecucao, updates, comparisons };
  }
}