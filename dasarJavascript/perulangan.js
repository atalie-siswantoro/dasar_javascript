// For Loop
for(let index = 1; index <= 10; index ++){
    console.log("Perulangan ke- " + index);
}
console.log("---------------------------------");

// For atau In Loop
let siswa = {
    nama : "Kusuma Seta",
    gender : "Wanita",
    jurusan : "RPL",
    usia : "300",
    alamat : "Ngantru"
}

for(key in siswa){
    console.log(key);
}

console.log("---------------------------------");

// For atau Of Loop
let presiden = ["Soekarna","Soeharto","Habibie","Gus Dur","Megawati","Jokowi"]
for(pres of presiden){
    console.log(pres);
}

console.log("---------------------------------");

//While Loop
let laptop = ["Lenovo","HP","Acer","Asus"]
let i = 0 
while(laptop[i]){
    console.log(laptop[i]);
    i++
}

console.log("---------------------------------");

//Do.. While Loop
let gadget = ["Xiaomi","Samsung","Motorola","Sony Ericson"]
let x = 0
do{
    console.log(gadget[x]);
    x++
}while(gadget[x])