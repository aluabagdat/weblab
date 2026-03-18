def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
        else:
            if not skip:
                total += num
            else:
                skip = False
    return total