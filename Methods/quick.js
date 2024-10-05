class quick{
    constructor(){
        this.exec([4,3,2,1])
    }
    exec(arr){   
        const quickSort = (arr) => {
        let start = 0
        let end = arr.length - 1

          if(start < end) {
        
            // Você pode aprender sobre como o valor do pivô é derivado nos comentários abaixo
            let pivot = partition(arr, start, end);
        
            // Certifique-se de ler os comentários abaixo para entender por que pivô - 1 e pivô + 1 são usados
            // Estas são as chamadas recursivas do quickSort
            quickSort(arr, start, pivot - 1);
            quickSort(arr, pivot + 1, end);
          } 
        
        }
        
        const partition = (arr, start, end) => { 
          let pivot = end;
          // Defina i como start - 1 para que ele possa acessar o primeiro índice no caso de o valor em arr[0] ser maior que arr[pivot]
          // Os comentários abaixo explicarão o comentário acima
          let i = start - 1,
              j = start;
        
          // Incrementar j até o índice anterior ao pivô
          while (j < pivot) {
        
            // If the value is greater than the pivot increment j
            if (arr[j] > arr[pivot]) {
              j++;
            }
        
            // Quando o valor em arr[j] for menor que o pivô:
            // incremente i (arr[i] será um valor maior que arr[pivot]) e troque o valor em arr[i] e arr[j]
            else {
              i++;
              swap(arr, j, i);
              j++;
            }
        
          }
        
          //O valor em arr[i + 1] será maior que o valor de arr[pivot]
          swap(arr, i + 1, pivot);
        
          //Você retorna i + 1, pois os valores à esquerda dele são menores que arr[i+1], e os valores à direita são maiores que arr[i + 1]
          // Dessa forma, quando os quicksorts recursivos são chamados, os novos sub-arrays não incluirão este valor pivô usado anteriormente
          return i + 1;
        }
        
        const swap = (arr, firstIndex, secondIndex) => {
          let temp = arr[firstIndex];
          arr[firstIndex] = arr[secondIndex];
          arr[secondIndex] = temp;
        }
        
        quickSort(arr, 0, arr.length - 1);
        console.log(arr);
    }
}
