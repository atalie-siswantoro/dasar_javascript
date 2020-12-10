// Contoh penerapan penambahan data pada array objek 
let barang = [
    { nama : "Gula", harga : 6000},
    { nama : "Kapur", harga : 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------------------------");

// tambah data barang baru
barang.push(
    { nama : "Deterjen", harga : 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);