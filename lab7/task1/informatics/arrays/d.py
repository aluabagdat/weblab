numbers = list(map(int, input().split()))
result = []
for i in range(1, len(numbers) - 1):
    if numbers[i] > numbers[i-1] and numbers[i] > numbers[i+1]:
        result.append(str(numbers[i]))
print(' '.join(result))
