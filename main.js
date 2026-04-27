// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-back',
        once: true,
        offset: 100
    });
    updateCountdown();
    setInterval(updateCountdown, 1000);
    loadGuestbook();
    setupEventListeners();
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2026-05-07T08:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

// Navigation
function setupEventListeners() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', handleRSVPSubmit);
    }

    const guestbookForm = document.getElementById('guestbookForm');
    if (guestbookForm) {
        guestbookForm.addEventListener('submit', handleGuestbookSubmit);
    }
}

// RSVP Form
function handleRSVPSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✓ Terima kasih telah mengkonfirmasi!';
    btn.style.backgroundColor = '#27ae60';
    e.target.reset();
    playSound('success');
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 3000);
}

// Guestbook
function handleGuestbookSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const message = document.getElementById('guestMessage').value;

    if (name.trim() && message.trim()) {
        let guestbook = JSON.parse(localStorage.getItem('guestbook')) || [];
        const newGuest = {
            id: Date.now(),
            name: name,
            message: message,
            timestamp: new Date().toLocaleString('id-ID')
        };
        guestbook.unshift(newGuest);
        localStorage.setItem('guestbook', JSON.stringify(guestbook));
        addGuestbookItem(newGuest);
        e.target.reset();
        playSound('success');
        showNotification('Ucapan Anda telah ditambahkan!');
    }
}

function addGuestbookItem(guest) {
    const guestbookList = document.getElementById('guestbookList');
    const item = document.createElement('div');
    item.className = 'guestbook-item new-item';
    item.innerHTML = `
        <div class="guestbook-name">${escapeHtml(guest.name)}</div>
        <div class="guestbook-message">"${escapeHtml(guest.message)}"</div>
        <small style="color: #999; margin-top: 0.5rem; display: block;">${guest.timestamp}</small>
    `;
    guestbookList.insertBefore(item, guestbookList.firstChild);
}

function loadGuestbook() {
    const guestbook = JSON.parse(localStorage.getItem('guestbook')) || [];
    const guestbookList = document.getElementById('guestbookList');

    if (guestbook.length === 0) {
        guestbookList.innerHTML = '<p style="text-align: center; color: #999; grid-column: 1/-1;">Belum ada ucapan. Jadilah yang pertama!</p>';
        return;
    }
    guestbook.forEach(guest => addGuestbookItem(guest));
}

// Gallery & Lightbox
let currentLightboxIndex = 0;
const galleryImages = [];

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => galleryImages.push(img.src));
});

function openLightbox(element) {
    const img = element.querySelector('img');
    currentLightboxIndex = galleryImages.indexOf(img.src);
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function updateLightbox() {
    const lightboxImg = document.querySelector('.lightbox-image');
    lightboxImg.src = galleryImages[currentLightboxIndex];
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightbox();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
}

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'Escape') closeLightbox();
    }
});

// Music Control
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = musicToggle.querySelector('.music-icon-play');
    const pauseIcon = musicToggle.querySelector('.music-icon-pause');

    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        localStorage.setItem('musicPlaying', 'true');
    } else {
        bgMusic.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        localStorage.setItem('musicPlaying', 'false');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = musicToggle.querySelector('.music-icon-play');
    const pauseIcon = musicToggle.querySelector('.music-icon-pause');

    const musicPlaying = localStorage.getItem('musicPlaying') === 'true';
    if (musicPlaying) {
        bgMusic.play().catch(() => console.log('Autoplay blocked'));
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
});

// Utilities
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Sound Effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

document.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
});

function playSound(type = 'click') {
    if (!isAudioEnabled()) return;
    try {
        if (type === 'click') playClickSound();
        else if (type === 'success') playSuccessSound();
    } catch (error) {
        console.error('Error playing sound:', error);
    }
}

function isAudioEnabled() {
    return localStorage.getItem('soundEnabled') !== 'false';
}

function playClickSound() {
    const now = audioContext.currentTime;
    const duration = 0.05;
    const osc = audioContext.createOscillator();
    const envelope = audioContext.createGain();

    osc.frequency.value = 800;
    osc.type = 'sine';
    envelope.gain.setValueAtTime(0.1, now);
    envelope.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.connect(envelope);
    envelope.connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + duration);
}

function playSuccessSound() {
    const now = audioContext.currentTime;
    const notes = [
        { freq: 659.25, duration: 0.1 },
        { freq: 783.99, duration: 0.15 }
    ];

    let time = now;
    notes.forEach(note => {
        const osc = audioContext.createOscillator();
        const envelope = audioContext.createGain();

        osc.frequency.value = note.freq;
        osc.type = 'sine';
        envelope.gain.setValueAtTime(0.15, time);
        envelope.gain.exponentialRampToValueAtTime(0.01, time + note.duration);

        osc.connect(envelope);
        envelope.connect(audioContext.destination);
        osc.start(time);
        osc.stop(time + note.duration);
        time += note.duration;
    });
}

// Add click sounds to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, a.btn, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.id.includes('music')) {
                playSound('click');
            }
        });
    });
});
