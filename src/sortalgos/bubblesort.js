
function bubbleSort(array, speed){
    let n = array.length
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const doSomething = async () => {
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n-1-i; j++){
                await sleep(speed)
                document.getElementById('bars').innerHTML = array
                if (array[j] > array[j+1]){
                    let hold = array[j]
                    array[j] = array[j+1]
                    array[j+1] = hold
                }
            }
        }
    }
    doSomething()
    return array
}

export default bubbleSort