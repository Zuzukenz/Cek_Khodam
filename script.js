let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

tombol.addEventListener("click", cekkhodam);

function cekkhodam() {

    if (input.value.trim() === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    // Tampilkan nama user
    nama.innerHTML = input.value;

    // Ambil angka random
    let angkarandom = Math.floor(Math.random() * namakhodam.length);

    // Tampilkan hasil khodam
    hasil.innerHTML = namakhodam[angkarandom];
}

const namakhodam = [
"Bayu Kelam",
"Raga Tanpa Bayang",
"Lintang Hitam",
"Api Senyap",
"Guntur Patah",
"Singa Malam",
"Ular Perak",
"Langit Retak",
"Batu Bernapas",
"Awan Berdarah",
"Cakar Subuh",
"Naga Sunyi",
"Rembulan Pucat",
"Jejak Arwah",
"Taring Angin",
"Bayangan Timur",
"Kilat Suram",
"Pohon Berbisik",
"Embun Hitam",
"Sumpah Senja",

"Tulang Besi",
"Serigala Kabut",
"Mata Bara",
"Jubah Kelabu",
"Petir Terpenjara",
"Sayap Patah",
"Lembah Sunyi",
"Mahkota Debu",
"Roh Tanpa Nama",
"Pedang Bayang",
"Keris Berduri",
"Bintang Gugur",
"Topeng Arang",
"Sosok Tanpa Wajah",
"Bisikan Batu",
"Sisik Malam",
"Darah Dingin",
"Akar Terlarang",
"Singa Kabut",
"Rantai Gaib",

"Tebing Hitam",
"Cahaya Redup",
"Gema Kosong",
"Hujan Abu",
"Napas Badai",
"Raga Kabur",
"Tapak Arwah",
"Putra Senyap",
"Induk Bayang",
"Rembulan Retak",
"Api Arwah",
"Bayu Berduri",
"Wajah Senja",
"Lidah Petir",
"Kepak Sunyi",
"Duri Langit",
"Sangkar Angin",
"Mata Kabut",
"Nadi Gelap",
"Sumpah Batu",

"Gigi Halilintar",
"Roh Purnama",
"Serdadu Senja",
"Putri Kabut",
"Taring Subuh",
"Jantung Hutan",
"Laut Kelam",
"Raja Bayangan",
"Cakar Angin",
"Selendang Hitam",
"Tombak Sunyi",
"Gong Malam",
"Awan Terbelah",
"Sisik Arwah",
"Pintu Senja",
"Cermin Retak",
"Sayap Kelabu",
"Jejak Kabut",
"Badai Timur",
"Api Purnama",

"Rantai Bayang",
"Mahkota Duri",
"Pilar Gelap",
"Sungai Arang",
"Sumpah Halilintar",
"Taring Kabut",
"Darah Senja",
"Lentera Pucat",
"Bayangan Abadi",
"Serigala Senyap",
"Guntur Hitam",
"Topan Kelam",
"Roh Berduri",
"Putra Arang",
"Indra Malam",
"Nafas Hampa",
"Pedang Purnama",
"Tapak Duri",
"Sosok Senyap",
"Mahkota Kabut",

"Kilat Arang",
"Batu Berdarah",
"Lembayung Gelap",
"Cakar Purnama",
"Singa Arwah",
"Ular Senja",
"Raga Berduri",
"Langit Arang",
"Jejak Purnama",
"Awan Senyap",
"Tulang Kabut",
"Serdadu Bayang",
"Putri Senja",
"Gema Arwah",
"Rantai Senyap",
"Api Kelabu",
"Naga Kabut",
"Sumpah Arang",
"Bintang Kelam",
"Topeng Senja",
];