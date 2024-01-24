const linearSearch = (list, index) => {
    for(let i=0; i<=list.length; i++) {
        if (index === list[i]){
            return i
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
const numb = linearSearch(numbers, 42)
console.log(verifyValue(numb))