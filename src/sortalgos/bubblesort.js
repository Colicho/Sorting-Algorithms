
function bubbleSort(array){
    let n = array.length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-1-i; j++){
            if (array[j] > array[j+1]){
                let hold = array[j]
                array[j] = array[j+1]
                array[j+1] = hold
            }
        }
    }
    return array
}

export default bubbleSort