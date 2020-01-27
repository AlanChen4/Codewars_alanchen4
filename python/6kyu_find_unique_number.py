def find_uniq(arr):
    # determine the "standard" number
    standard_num = max(set(arr[:4]), key = arr.count)
    reduced_list = list(set((arr)))
    
    if reduced_list[0] == standard_num:
        return reduced_list[1]
    else:
        return reduced_list[0]