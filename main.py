import random

t = []

for i in range(10_000_000):
    # print(random.randint(0, 10))
    n = random.randint(0, 10)
    t.append(n)

print(len(t))
print(t)