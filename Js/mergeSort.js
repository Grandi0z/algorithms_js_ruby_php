const mergeSort = (list) => {
    // O(n log n)
    // Sort a list in ascending order
    // Return s anew sorted list

    // Divide: Find the midpoint of the list and divide into subarray
    // Conquer: recursively sort the subarray created in prev step
    // Combine: Merge the sorted subarray created in prev step
    if(list.length <= 1) {
        return list
    }

    const [left_half, right_half] = split(list)
    const left = mergeSort(left_half)
    const right = mergeSort(right_half)

    return merge(left, right)
}

const split = (list) => {
    // O(log n) time
    // Divide the unsorted array at midpoint into subarray
    // Returns two subarray -left and right
    const middle = Math.floor(list.length/2)
    const left = list.slice(0, middle)
    const right = list.slice(middle)
    return [left, right]
}

const merge = (left, right) => {
    // O(n)
    // Merges two arrays, sorting them in the process
    // Returns a new merged array
    const l = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            l.push(left[i])
            i+=1
        } else {
            l.push(right[j])
            j+=1
        }
    }

    while(i < left.length) {
        //In case left side is > the right one
        l.push(left[i])
        i+=1
    }
    while(j < right.length) {
        //In case left side is < the right one
        l.push(right[j])
        j+=1
    }
    return l;
}

const verifyList = (list) => {
    if(list.length <= 1) {
        return true // base case
    }
    const newList = list.slice(1) //form the second elt to...
    if(list[0] < list[1] && verifyList(newList)) {
        return true
    }
    return false
}

const list = [3,45,0,7,21,200,50,32,20]
const l = mergeSort(list)
console.log(verifyList(list))
console.log(verifyList(l))