import math

a = int(input())
b = int(input())

start = math.isqrt(a)
if start * start < a:
    start += 1

end = math.isqrt(b)

squares = [str(i * i) for i in range(start, end + 1)]

if squares:
    print(' '.join(squares))