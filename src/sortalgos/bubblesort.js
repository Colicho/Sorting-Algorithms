
function bubbleSort(array, speed, size){
    let n = array.length
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const doSomething = async () => {
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n-1-i; j++){
                await sleep(speed)
                if (array[j] > array[j+1]){
                    let hold = array[j]
                    array[j] = array[j+1]
                    array[j+1] = hold
                }
                document.getElementById('sort').innerHTML = null
                for(let l = 0; l < n; l++){
                    let value = array[l]
                    let square = document.createElement('d');
                    square.setAttribute("id", l);
                    document.getElementById('sort').appendChild(square)
                    if (l == j + 1)  {
                        document.getElementById(l).style.backgroundColor = '#A93226  '
                    }
                    else {
                        document.getElementById(l).style.backgroundColor = 'black'
                    }
                    document.getElementById(l).style.height = value*2 + "px"
                    document.getElementById(l).style.paddingRight = 1.2 + "%"
                    document.getElementById(l).style.marginTop = -20 + "px"
                }
            }
        }

    }
    doSomething()
    return array
}

export default bubbleSort