def recursive_binary_search(list, target)
    if list.length == 0
        false #base case
    else
        middle = (list.length/2).floor
        if list[middle] == target
            true #base case
        elsif list[middle] < target
            new_list = list[(middle =+ 1)..(list.length - 1)]
            recursive_binary_search(new_list, target)
        else
            new_list = list[0...middle]
            recursive_binary_search(new_list, target)
        end
    end
end

list = [1,2,3,5,6,7,8,9]
puts recursive_binary_search(list, 9)

# We can use ... or .. to create a subarray or the slice methode