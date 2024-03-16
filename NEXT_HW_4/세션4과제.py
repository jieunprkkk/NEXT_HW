maxnumber = int(input("숫자 게임 최대 값을 입력해 주세요:"))

print("\nMaximum number = ", maxnumber)
print("Instruction:")
print(" type '업' if ur number is higher")
print(" type '다운; if ur number is lower")
print(" type 'ㅇㅇ' if it is ur number\n")

guessingnumber = maxnumber/2
computerisguessing = True
highest = maxnumber
lowest = 0
while computerisguessing == True:

    print(guessingnumber)
    i = input("이 숫자 맞음?")

    if i == "업":
        lowest = guessingnumber
        guessingnumber = int((guessingnumber + highest) / 2)
        print(guessingnumber)

    elif i == "다운":
        highest = guessingnumber
        guessingnumber = int((lowest + guessingnumber) / 2)
        print(guessingnumber)

    elif i == "ㅇㅇ":
        print("맞음 ㅇㅇ")
        break