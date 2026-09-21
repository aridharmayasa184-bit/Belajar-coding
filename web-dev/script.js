console.log("Halo dari JavaScript");

let nama = "Ari";
let umur = 28;

console.log("Nama saya ", nama);
console.log("Umur saya", umur, "tahun");

let elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Pesan ini sudah di ubah oleh JavaScript";
elemenPesan.style.color = "red";

let tombol = document.getElementById("Tombol-halo");
tombol.addEventListener("click", function(){
    alert("Tombol berhasil di klik!!");
})

let inputTugas = document.getElementById("input-tugas");
let tombolTambah = document.getElementById("tombol-tambah");
let daftarTugas = document.getElementById("daftar-tugas");



tombolTambah.addEventListener("click", function(){
    let teksTugas = inputTugas.value;

    let liBaru = document.createElement("li");
    liBaru.textContent = teksTugas;

    // BAGIAN BARU: buat tombol hapus untuk li ini
    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function() {
        liBaru.remove();   // menghapus elemen li ini dari halaman
    });

    liBaru.appendChild(tombolHapus);   // taruh tombol hapus DI DALAM li
    daftarTugas.appendChild(liBaru);
    inputTugas.value = "";
});