console.log("Halo dari JavaScript");

let nama = "Ari";
let umur = 28;

console.log("Nama saya ", nama);
console.log("Umur saya", umur, "tahun");

let elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "I Wayan Ari Dharma Yasa|📍 Denpasar, Bali, Indonesia|📧 waynaiengineer@gmail.com|🔗 LinkedIn: linkedin.com/in/wayn-yasa-automation";
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

let inputAngka1 = document.getElementById("angka1");
let inputAngka2 = document.getElementById("angka2");
let hasilElemen = document.getElementById("hasil-kalkulator");

document.getElementById("tombol-tambah-kalkulator").addEventListener("click", function() {
    let a = Number (inputAngka1.value);
    let b = Number (inputAngka2.value);
    hasilElemen.textContent = "Hasil: " + (a + b);
})

document.getElementById("tombol-kurang-kalkulator").addEventListener("click", function() {
    let a = Number (inputAngka1.value);
    let b = Number (inputAngka2.value);
    hasilElemen.textContent = "Hasil: " + (a - b);
})

document.getElementById("tombol-bagi-kalkulator").addEventListener("click", function() {
    let a = Number (inputAngka1.value);
    let b = Number (inputAngka2.value);
    hasilElemen.textContent = "Hasil: " + (a / b);
})

document.getElementById("tombol-kali-kalkulator").addEventListener("click", function() {
    let a = Number (inputAngka1.value);
    let b = Number (inputAngka2.value);
    hasilElemen.textContent = "Hasil: " + (a * b);
})


let dataCuaca = {
    lokasi: {
        kota: "Denpasar",
        negara: "Indonesia"
    },
    current: {
        suhu: 30,
        kelembapan: 70
    }
};
 
console.log(dataCuaca.lokasi.kota);
console.log(dataCuaca.current.suhu);

async function cekCuaca() {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=-8.65&longitude=115.22&current_weather=true";
    let response = await fetch(url);
    let data = await response.json();
    
    console.log(data);   // lihat dulu struktur datanya di Console
    
    let suhu = data.current_weather.temperature;
    document.getElementById("hasil-cuaca").textContent = "Suhu di Denpasar: " + suhu + "°C";
}

document.getElementById("tombol-cek-cuaca").addEventListener("click", cekCuaca);