numbers = list(map(int, input().split()))
evens = [str(x) for x in numbers if x % 2 == 0]
print(' '.join(evens))
