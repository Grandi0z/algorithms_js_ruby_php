class Node {
    constructor(data) {
         this.data = data
        this.nextNode = null
    }
    // Is it the way to create accessors
    nextNode = () => {
        return this.nextNode
    }

    setNextNode = (node) => {
        this.nextNode = node
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    toString = () => {
        let current = this.head
        let list = []
        while(current){
            if(current === this.head && this.head !== null){
                list.push(`head: ${current.data}`)
            } else if (current.nextNode === null) {
                list.push(`tail: ${current.data}`)
            } else {
                list.push(`${current.data}`)
            }
            current = current.nextNode
        }
        return list
    }

    isEmpty = () => {
         //! runtime O(1)
        return this.head === null
    }

    size = () => {
         //! runtime O(n)
        let current = this.head
        let count = 0
        while (current) {
            current = current.nextNode
            count = count + 1
        }
        return count
    }

    add = (value) => {
        //! runtime O(1)
        const new_node = new Node(value)
        const current = this.head
        new_node.setNextNode(current)
        this.head = new_node
    }

    search = (value) => {
        //! runtime O(n)
        let current = this.head
        while(current) {
            if(current.data == value) {
                return current
            } else {
                current = current.nextNode
            }
        }
        return null
    }

    insert = (value, index) => {
        // insertion runtime O(1)
        // founding the place to insert : runtime 0(n)
        //! overall runtime O(n)
        if(index === 0) {
            //! how to call self
            self.add(value)
        } else if (index > 0) {
            let current = this.head
            let position = index
            const new_node = new Node(value)
            while(position > 1) {
                current = current.nextNode
                position -= 1
            }
            const prev_node = current
            const next_node = current.nextNode
            prev_node.nextNode = new_node
            new_node.nextNode = next_node
        }
    }

    remove = (value) => {
        //! runtime O(n)
        let current = this.head
        let prev_node = null
        let found = false
        while(current && !found){ // we have two criteria that can break the code
            if(value === current.data && current === this.head) {
                found = true
                this.head = current.nextNode
            } else if(current.data === value) {
                found = true
                prev_node.nextNode = current.nextNode
            } else {
                prev_node = current
                current = current.nextNode
            }
        }
        return current
    }
}


let list = new LinkedList()
list.add(3)
list.add(5)
list.insert(2,1)
console.log(list.remove(2))
console.log(list.toString())