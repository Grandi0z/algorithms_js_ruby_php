def binary_search(list, target)
    start = 0
    last = list.length - 1
    while start <= last 
      middle = (start + last) // 2
      if target == list[middle]
        return middle
      elsif list[middle] > target
        last = middle -1
      else
        start = middle + 1
      end
    end
    return nil
end

def verrify_number(number)
    return "Not found" unless number
    "number exist on the index #{number}"
end

numbers = [1,2,3,4,5,6,7,8,9,10]
numb = binary_search(numbers, 14)
puts verrify_number(numb)