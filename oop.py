class Orang:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur

    def sapa(self):
        print("halo, nama saya", self.nama)

    def ulang_tahun(self):
            self.umur = self.umur + 1
            print("Selamat ulang tahun,", self.nama, " sekarang umurmu", self.umur)

orang1 = Orang("Ari", 28)
orang1.ulang_tahun()
orang2 = Orang("Budi", 50)
orang2.ulang_tahun()