orang = {
    "nama": "Ari",
    "Umur": 28
}

print(orang["nama"])

orang["kota"] = "Denpasar"
print(orang)

orang["zodiak"] = "pisces"
print(orang)

orang["hobi"] = "bernyanyi"
print(orang)

orang["Umur"] = 29
print(orang)

for key in orang:
    print(key, ":", orang[key])