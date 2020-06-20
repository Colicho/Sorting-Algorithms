def main():
    while(True):
        userInput = input("Write integers!").split()
        try:
            intUserInput = [int(x) for x in userInput]
            print(bubbleSort(intUserInput))
            break
        except ValueError as val:
            print(val)

def bubbleSort(unsortedList):
    for x in range(len(unsortedList)):
        for y in range(0, len(unsortedList)-x - 1):
            if unsortedList[y] > unsortedList[y+1]:
                unsortedList[y], unsortedList[y+1] = unsortedList[y+1], unsortedList[y]
    return unsortedList

if __name__ == '__main__':
    main()