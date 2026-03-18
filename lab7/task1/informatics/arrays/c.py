numbers = list(map(int, input().split()))
even_numbers = [str(x) for x in numbers if x % 2 == 0]
print(' '.join(even_numbers))