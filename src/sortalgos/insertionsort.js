

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
                if (array[j] > key){
                    array[j+1] = array[j]
                }
                else{
                    array[j+1] = key
                    break
                }
                document.getElementById('sort').innerHTML = null
                for(let l = 0; l < array.length; l++){
                    let value = array[l]
                    let square = document.createElement('d');
                    square.setAttribute("id", l);
                    document.getElementById('sort').appendChild(square)
                    if (j == l) {
                        document.getElementById(l).style.backgroundColor = '#A93226  '
                    }
                    else {
                        document.getElementById(l).style.backgroundColor = 'black'
                    }
                    document.getElementById(l).style.height = value*2 + "px"
                    document.getElementById(l).style.paddingRight = 10 + "px"
                    document.getElementById(l).style.marginTop = -20 + "px"
                }
            }
        }
    }
    doSomething()
    return array
}

export default insertionSort