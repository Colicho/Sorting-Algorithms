

function insertionSort(array, speed){
    let key = 0
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const doSomething = async () => {
        for(let i = 1;i<array.length;i++){
            key = array[i]
            for(let j=i-1;j>=0;j--){
                await sleep(speed)
                document.getElementById('bars').innerHTML = array
                if (array[j] > key){
                    array[j+1] = array[j]
                }
                else{
                    array[j+1] = key
                    break
                }
            }
        }
    }
    doSomething()
    return array
}

export default insertionSort