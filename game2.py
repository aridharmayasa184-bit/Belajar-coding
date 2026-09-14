def cek_tebakan(tebakan, rahasia):
    if tebakan == rahasia:
        return "benar"
    elif tebakan < rahasia:
        return "kecil"
    else:
        return "besar"

angka_rahasia = 7
tebakan = 0

while tebakan != angka_rahasia:2
    tebakan = input("coba tebak angkanya: ")
    tebakan = int(tebakan)
    hasil = cek_tebakan(tebakan, angka_rahasia)

    if hasil == "benar":
        print("selamat, tebakanmu benar!")
    elif hasil == "kecil":
        print("terlalu kecil!!, coba lagi")
    else:
        print("terlalu besar, coba lagi!")

print("KAMU BERHASIL MENEBAK!!")