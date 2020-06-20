




def selectionSort(lista):
    for x in range(len(lista)):
        foundSmaller = False
        smallestElement = lista[x]
        smallestElementIndex = x
        for y in range(x+1,len(lista)):
            if lista[y] < smallestElement:
                smallestElement = lista[y]
                smallestElementIndex = y
                foundSmaller = True
        if foundSmaller:
            lista[smallestElementIndex], lista[x] = lista[x], lista[smallestElementIndex]
    return lista



def main():
    print(selectionSort([1,2,7,4,5,2,6,2,31,64,1,52,86,52,43]))


if __name__ == '__main__':
    main()