var inputancelcius = document.getElementById('Celcius');
var konversi = document.getElementById('Konversi');
var reset = document.getElementById('Reset');
var Reverse = document.getElementById('Reverse');
var Fahrenheit = document.getElementById('Fahrenheit');
var CaraKalkulasi = document.getElementById('CaraKalkulasi');

console.log(konversi)
function rumus(value){
    var hasil=(value*(9/5))+32
    return hasil;
}

function Kalkulasi(value){
    var total=rumus (value)
    return value + "°C * (9/5) + 32 = "+total+"°F"
    
}

konversi.onclick = function (event) {
    var hasil = rumus(inputancelcius.value)
    Fahrenheit.value=hasil
    CaraKalkulasi.value=Kalkulasi (inputancelcius.value)

}
