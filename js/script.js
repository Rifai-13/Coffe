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


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    
    if (name && email && phone && message) {
        
        alert('Aduan sedang diproses. Terima kasih atas saran dan kritik Anda!');
        
        
        form.reset();
    } else {
       
        alert('Mohon isi semua field sebelum mengirimkan aduan.');
    }
});