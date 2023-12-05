const A = prompt("masukan angka pertama:");
const B = prompt("masukan angka kedua:");


const nomorA = parseInt(A);
const nomorB = parseInt(B);


if (!isNaN(nomorA) && !isNaN(nomorB)) {
  const Hasil = nomorA + nomorB;


  alert(`Hasil pertambahan Adalah: ${Hasil}`);
} else {
  alert("input salah.");
}
