angka_rahasia = 7
tebakan = 0

while tebakan != 7:
 tebakan = input("coba tebak angka nya:")
 tebakan = int(tebakan)


 if tebakan == 7:
        print("selamat tebakanmu benar")
 elif tebakan <= 7:
        print("telalu kecil!! cobaa lagi!!")
 else:
        print("terlalu besar ,, Coba lagi !!")

print("KAMU BERHASIL MENEBAK!!")