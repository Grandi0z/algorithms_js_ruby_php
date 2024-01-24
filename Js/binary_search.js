const binary_search = (list, target) => {
    let begin = 0
    let end = list.length -1
    while (begin <= end) {
        let middle = Math.floor((begin + end)/2)
        if(target === list[middle]) {
            return middle
        } else if (list[middle] > target) {
            end = middle - 1
        } else {
            begin = middle + 1 
        }
    }
    return null
}

const verifyValue = (index) => {
    if(index) {
        return `Value exists on index ${index}`
    }
   return "Not found"

}

const numbers = [1,2,3,4,5,6,7,8,9,10]
const numb = binary_search(numbers, 3)
console.log(verifyValue(numb))