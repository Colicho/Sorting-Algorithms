

function insertionSort(array, speed){
    let key = 0
    for(let i = 1;i<array.length;i++){
        key = array[i]
        for(let j=i-1;j>=0;j--){
            if (array[j] > key){
                array[j+1] = array[j]
            }
            else{
                array[j+1] = key
                break
            }
        }
    }
    return array
}

export default insertionSort