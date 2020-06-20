






def main():
    print(bubbleSort([1,2,7,4,5,2,6,2,31,64,1,52,86,52,43]))

def bubbleSort(lista):
    ja = True
    while ja:
        count = 0
        for i in range(len(lista)):
            if i != len(lista)-1:
                if lista[i] > lista[i+1]:
                    lista [i], lista[i+1] = lista [i+1], lista[i]
                    count += 1
        if count == 0:
            ja = False
    return lista



if __name__ == '__main__':
    main()