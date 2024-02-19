const runHello = (value) => {
    while (value > 1) {
        console.log("hello, ")
        value-=1
    }
}

//runHello(0)
const split = (list) => {
    // Divide the unsorted array at midpoint into subarray
    // Returns two subarray -left and right
    const middle = Math.floor(list.length/2)
    const left = list.slice(0, middle)
    const right = list.slice(middle)
    return [left, right]
}

const [one, two] = split([1,2,3,4,5,6,7,8,9])
console.log(`one :${one} || two: ${two}`)
console.log(`${[1,5,7]}`)