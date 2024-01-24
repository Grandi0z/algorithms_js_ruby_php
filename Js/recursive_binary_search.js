const recursive_binary_search = (list, target) => {
    if(list.length == 0) {
        return false
    } else {
        middle = Math.floor(list.length/2)
        if(list[middle] === target) {
            return true
        } else if(list[middle] < target) {
            // we should split the list
            recursive_binary_search(list[middle+1])
        }
    }
}