// Waktu minimal loading tampil (dalam ms)
const minimalLoadingTime = 1500;

// Catat waktu saat halaman mulai dibuka
const startTime = new Date().getTime();

// Fungsi untuk menampilkan konten utama
function showContent() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  // Hitung waktu berlalu sejak halaman mulai load
  const elapsedTime = new Date().getTime() - startTime;
  const remainingTime = minimalLoadingTime - elapsedTime;

  // Kalau waktu minimum belum terpenuhi, tunggu sisanya dulu
  const delay = remainingTime > 0 ? remainingTime : 0;

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.6s ease-out';

    setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.style.opacity = '1';
      mainContent.style.visibility = 'visible';
      mainContent.style.transition = 'opacity 1s ease-in';

      // Mulai countdown timer
      startCountdown();
    }, 600); // waktu transisi fade out
  }, delay);
}

// Countdown Timer
function startCountdown() {
  const targetDate = new Date('August 12, 2025 10:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('countdown-timer').innerHTML = "<p>Acara telah berlangsung.</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  updateCountdown(); // Langsung panggil pertama kali
  setInterval(updateCountdown, 1000); // Update tiap detik
}

// Panggil showContent saat halaman selesai load
window.onload = showContent;
