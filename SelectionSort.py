def selectionSort(unsortedList):
    for x in range(len(unsortedList)):
        foundSmaller = False
        smallestElement = unsortedList[x]
        smallestElementIndex = x
        for y in range(x+1,len(unsortedList)):
            if unsortedList[y] < smallestElement:
                smallestElement = unsortedList[y]
                smallestElementIndex = y
                foundSmaller = True
        if foundSmaller:
            unsortedList[smallestElementIndex], unsortedList[x] = unsortedList[x], unsortedList[smallestElementIndex]
    return unsortedList

def main():
    while(True):
        userInput = input("Write integers!").split()
        try:
            [int(x) for x in userInput]
            print(selectionSort(userInput))
            break
        except ValueError as val:
            print(val)

if __name__ == '__main__':
    main()