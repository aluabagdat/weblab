a = int(input())
b = int(input())
evens = [str(i) for i in range(a, b + 1) if i % 2 == 0]
print(' '.join(evens))