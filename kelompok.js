function submission(event) {
    event.preventDefault();
  
    // binding element
    var namaEl = document.getElementById('nama');
    var roleEl = document.getElementById('role');
    var AvailabilityEl = document.getElementById('Availability');
    var usiaEl = document.getElementById('usia');
    var lokasiEl = document.getElementById('lokasi');
    var yearsEl = document.getElementById('years');
    var emailEl = document.getElementById('email');
    
    var tampilNamaEl = document.getElementById('tampilNama');
    var tampilRoleEl = document.getElementById('tampilRole');
    var tampilAvailabilityEl = document.getElementById('tampilAvailability');
    var tampilusiaEl = document.getElementById('tampilUsia');
    var tampillokasiEl = document.getElementById('tampilLokasi');
    var tampilyearsEl = document.getElementById('tampilyears');
    var tampilemailEl = document.getElementById('tampilEmail');
  
    // ambil data
    var nama = namaEl.value;
    var role =  roleEl.value;
    var Availability = AvailabilityEl.value;
    var usia = usiaEl.value;
    var lokasi = lokasiEl.value;
    var years = yearsEl.value;
    var email = emailEl.value;

   
  
    // memasukkan data ke tempatnya ( <p> )
    tampilNamaEl.innerText = nama;
    tampilRoleEl.innerText = role;
    tampilAvailabilityEl.innerText = Availability;
    tampilusiaEl .innerText = usia;
    tampillokasiEl.innerText = lokasi;
    tampilyearsEl.innerText = years;
    tampilemailEl.innerText = email;
}