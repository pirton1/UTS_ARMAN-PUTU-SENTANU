const form = document.getElementById('formMahasiswa');
const tbody = document.querySelector('#tabelMahasiswa tbody');

let dataMahasiswa = [
  { nama: "arya febrian", nim: "2411102441131", prodi: "TI", semester: 3, email: "aryasinggan@mail.com" },
];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const semester = document.getElementById('semester').value;
  const prodi = document.getElementById('prodi').value;
  const email = document.getElementById('email').value.trim();

  const dataBaru = { nama, nim, semester, prodi, email };
  dataMahasiswa.push(dataBaru);

  console.log("Data Mahasiswa Saat Ini:", dataMahasiswa);
  console.log("Data baru berhasil ditambahkan:", dataBaru);

  tampilkanData();
  form.reset();
});

function tampilkanData() {
  tbody.innerHTML = "";
  dataMahasiswa.forEach((mhs, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${mhs.nama}</td>
      <td>Prodi: ${mhs.prodi}<br>Semester: ${mhs.semester}</td>
    `;
    tbody.appendChild(tr);
  });
}

tampilkanData();
