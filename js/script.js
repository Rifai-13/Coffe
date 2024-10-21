const navbar = document.querySelector('.navbar-nav');
const form = document.getElementById('contactForm');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
};

const menu = document.querySelector('#menu');

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
})

// Tambahkan event listener untuk submit form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form refresh halaman

    // Ambil nilai input dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Cek apakah semua field telah terisi
    if (name && email && phone && message) {
        // Tampilkan alert sebagai konfirmasi
        alert('Aduan sedang diproses. Terima kasih atas saran dan kritik Anda!');
        
        // Reset form setelah pengiriman
        form.reset();
    } else {
        // Jika field belum terisi semua
        alert('Mohon isi semua field sebelum mengirimkan aduan.');
    }
});