N = int(input())

cards = {
    "STRAWBERRY": 0,
    "BANANA": 0,
    "LIME": 0,
    "PLUM": 0
}

for i in range(N):
    key,value = input().split()
    cards[key]+= int(value)

if 5 in cards.values():
    print('YES')
else:
    print('NO')