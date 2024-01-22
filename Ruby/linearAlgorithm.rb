def linear_search(list, number)
    list.each_with_index do |index, elt|
        if elt == number
            index
        end
      nil
    end
end

def verrify_number(number)
    return "Not found" unless number
      return "number exist on the index #{number}"
    end
end

numbers = [1,2,3,4,5,6,7,8,9,10]
numb = linear_search(numbers, 3)
puts verrify_number(3)