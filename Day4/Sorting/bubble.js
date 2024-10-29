//push the larget to the last by adjacent swaps

//for (i = n-1; i >=1;i++):
//    for (j = 0; j <= i -1; j++):
//        if a[j] > a[j+1]: swap

function bubbleSort(arr){
    n = arr.length;
    for (i = n-1; i >= 1; i--){
        // console.log("runs: ", n -i);
        let didSwap = 0
        for (j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didSwap = 1;
            }
        }
        if (didSwap === 0){
            break;
        }
    }
} // O(n^2), best - O(n)

function recursiveBubbleSort(){
    
}


arr = [1,2,3,4,5];
console.log(arr);
bubbleSort(arr);
console.log(arr);