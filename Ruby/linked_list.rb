class Node
    attr_accessor :nextNode
    attr_reader :data
    def initialize(data)
        @data = data
        @nextNode = nil
    end

    def to_s
        "[Node: {data:#{@data}}]"
    end
end

class LinkedList
    attr_accessor :head
    def initialize
        @head = nil
    end
    def to_s
        current = @head
        list = []
        while current
            if current == @head && @head != nil
                list << "head: #{current.data}"
            elsif current.nextNode == nil
                list << "tail: #{current.data}"
            else
                list << "#{current.data}"
            end
            current = current.nextNode
        end
        # array to string ->
        list.to_s
    end
    def empty?
        # runtime O(1)
        @head == nil
    end

    def size
        # runtime O(n)
        current = @head
        count = 0
        while current
            current = current.nextNode
            count+=1
        end
        count
    end

    def add(value)
        # runtime O(1)
        new_node = Node.new(value)
        current = @head
        new_node.nextNode = current
        @head = new_node
    end

    def search(value)
        # runtime 0(n)
        current = @head
        while current
            if value == current.data
                return current
            else
                current = current.nextNode
            end
        end
        nil
    end

    def insert(value, index)
        # insertion runtime O(1)
        # founding the place to insert : runtime 0(n)
        # overall runtime O(n)
        if(index == 0)
            self.add(value)
        elsif(index > 0)
            new_node = Node.new(value)
            position = index
            current = @head
            while position > 1
                #count the number of iteration we have to
                # do before founding the place we have to 
                # add the new node. We count be decreasing
                # >1 so if we want to add to the index 1
                # it will not enter in the loop
                current = current.nextNode
                position -= 1
            end
            prev_node = current
            next_node = current.nextNode
            prev_node.nextNode = new_node
            new_node.nextNode = next_node
        end
    end

    def remove(value) 
        # runtime 0(n)
        current = @head
        found = false
        prev_node = nil
        while current && !found
            if (current.data == value && current == @head)
                found = true
                @head = current.nextNode
            elsif(current.data == value)
                found = true
                prev_node.nextNode = current.nextNode
            else
                prev_node = current
                current = current.nextNode
            end
        end
        current
    end
end

list = LinkedList.new
list.add(4)
list.add(8)
list.insert(2,0)
puts list.remove(2)
puts list
