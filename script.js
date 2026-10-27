document.addEventListener('DOMContentLoaded', function() {

    // 1. Pesan Selamat Datang saat Pengguna Mengunjungi Halaman
    alert('Selamat datang di Portal Resmi PT Nusantara Karya.');

    // 2. Animasi Hover pada Menu Navigasi (mouseover & mouseout)
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.color = '#3498db';
        });

        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.color = '#ecf0f1';
        });
    });

    // 3. Validasi Form Kontak Sederhana
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nama = document.getElementById('nama');
            const email = document.getElementById('email');
            const pesan = document.getElementById('pesan');

            const errNama = document.getElementById('errorNama');
            const errEmail = document.getElementById('errorEmail');
            const errPesan = document.getElementById('errorPesan');
            const sukses = document.getElementById('sukses');

            // Reset Error
            errNama.innerText = '';
            errEmail.innerText = '';
            errPesan.innerText = '';
            sukses.innerText = '';

            nama.classList.remove('input-error');
            email.classList.remove('input-error');
            pesan.classList.remove('input-error');

            let isValid = true;

            if (nama.value.trim() === '') {
                errNama.innerText = 'Nama lengkap wajib diisi!';
                nama.classList.add('input-error');
                isValid = false;
            }

            if (email.value.trim() === '') {
                errEmail.innerText = 'Alamat email wajib diisi!';
                email.classList.add('input-error');
                isValid = false;
            }

            if (pesan.value.trim() === '') {
                errPesan.innerText = 'Pesan wajib diisi!';
                pesan.classList.add('input-error');
                isValid = false;
            }

            if (isValid) {
                sukses.innerText = 'Pesan Anda telah berhasil dikirim. Terima kasih.';
                form.reset();
            }
        });
    }
});