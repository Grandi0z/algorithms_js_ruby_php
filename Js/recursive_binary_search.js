const recursive_binary_search = (list, target) => {
    if(list.length === 0) {
        return false // breaking point
    } else {
        let middle = Math.floor(list.length/2)
        if(list[middle] === target) {
            return true
        } else if(list[middle] < target) {
            middle++  //+1 so the new array starts one step after the middle
            let newList = list.slice(middle)
            return recursive_binary_search(newList, target) //!Notice
        } else {
            const newList = list.slice(0, middle)
            return recursive_binary_search(newList, target)
        }
    }
}

const list = [1,2,3,4,5,6,7,8,9]
console.log(recursive_binary_search(list,0))

//!Notice : In JS we have to explicitly return the value 
// of the recursive call, unless the function returns 
//! undefine