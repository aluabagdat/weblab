s = input()

result = ' '.join(word.capitalize() for word in s.split())

print(result)