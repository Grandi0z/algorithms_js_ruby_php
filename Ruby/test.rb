
def split(array)
    middle = (array.length/2).floor
    puts middle
    one = array[0..middle]
    two = array[middle...array.length]
    return one, two
end

one, two = split([1,2,3,4,5,9])
puts one.to_s
puts two.to_s