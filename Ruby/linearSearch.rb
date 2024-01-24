def linear_search(list, number)
    list.each_with_index do |elt, index|
       if elt == number
        return index
       end
    end
    return nil
end

def verrify_number(number)
    return "Not found" unless number
    "number exist on the index #{number}"
end

numbers = [1,2,3,4,5,6,7,8,9,10]
numb = linear_search(numbers, 14)
puts verrify_number(numb)