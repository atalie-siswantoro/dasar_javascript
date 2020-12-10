// Menghapus data pada array

let siswa = ["Ana","Sulaiman","Putri","Gatot","Adit","Gico"]
console.log(siswa);
console.log("Jumlah data saat ini = " + siswa.length);

// hapus data
siswa.splice(2,1)
// params yang pertama ialah menunjukan start index yang akan dihapus
// params yang kedua ialah menunjukan jumlah yang akan dihapus

console.log(siswa);
console.log("Jumlah data saat ini = " + siswa.length);
