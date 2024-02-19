def merge_sort(array)
    # O(n log n)  
    # Sort a list in ascendeing order
    # Return s anew sorted list

    # Divide: Find the midpoint of the list and divide into sublists
    # Conquer: recursively sort the sublists created in prev step
    # Combine: Merge the sorted sublistss created in prev step
  if array.length <= 1
      return array #base case
  end
  left_half, right_half = split(array)
  left = merge_sort(left_half) # recursive until we get one elt array
  right = merge_sort(right_half)

  return merge(left, right)
end

def split(array)
    # O(log n) time
    # Devide the unsorted array at midpoint into subarrays
    # Returns two subarrays -left and right
    middle = (array.length/2).floor
    left = array[0..middle-1]
    right = array[middle...array.length]
    return left, right
end

def merge(left, right)
    # O(n)
    # Merges two arrays, sortign them in the process
    # Returns a new merged array
    l = []
    i = 0
    j = 0
    while i < left.length && j < right.length
        if left[i] < right[j]
            l << left[i]
            i+=1
        else
            l << right[j]
            j+=1
        end
    end
    while i < left.length
        # In case left side is>the right one
        l << left[i]
        i+=1
    end
    while j < right.length
        # In case lest side is<the right one
        l << right[j]
        j+=1
    end
    return l
end

def verify_list(list)
    if list.length <= 0
        true
    end
    newList = list[1...list.length-1]
    if (list[0] < list[1] && verify_list(newList))
        true
    end
    false
end

list = [3,45,7,21,200,50,32,20]
l = merge_sort(list)
puts verify_list(list)
puts verify_list(l)

