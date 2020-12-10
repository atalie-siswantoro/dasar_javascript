// Percabangan If, If..Else..

let tahun = 2020
if(tahun % 4 == 0){
    console.log(tahun + " adalah tahun kabisat");
}
else{
    console.log(tahun + " bukan tahin kabisat");
}

// Percabangan If..Else If..Else..

let nilai = 80
if(nilai > 80){
    console.log("Excelent");
}
else if(nilai <= 80 && nilai > 70){
    console.log("Good");
}
else if(nilai <= 70 && nilai >60 ){
    console.log("Not bad");
}
else{
    console.log("So bad");
}