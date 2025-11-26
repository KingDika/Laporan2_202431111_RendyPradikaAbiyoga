// SET DEFAULT THEME
document.body.classList.add('theme-coklat', 'mode-rapi');

// Interaksi hide/show untuk setiap judul pencemaran
document.querySelectorAll('.judul').forEach(title => {
  title.addEventListener('click', () => {
    const id = title.dataset.id;
    const p = document.querySelector(`.penjelasan[data-id="${id}"]`);

    if (!p) return;

    if (window.getComputedStyle(p).display === 'none') {
      const confirmShow = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
      if (confirmShow) p.style.display = 'block';
    } else {
      const confirmHide = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
      if (confirmHide) p.style.display = 'none';
    }
  });
});

// Tombol untuk ganti mode tampilan (rapi <-> berantakan)
const toggleBtn = document.getElementById('toggle-mode-btn');
toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('mode-rapi')) {
    document.body.classList.replace('mode-rapi', 'mode-berantakan');
    toggleBtn.textContent = "Ganti ke Mode Rapi";
  } else {
    document.body.classList.replace('mode-berantakan', 'mode-rapi');
    toggleBtn.textContent = "Ganti Mode Tampilan";
  }
});

// Tombol menuju halaman gambar
document.getElementById('show-images-btn').addEventListener('click', () => {
  window.location.href = 'images.html';
});
