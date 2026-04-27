# Wedding Invitation Website - Dwika & Firman

Undangan pernikahan digital yang elegan dan responsif untuk Dwika & Firman.

## 🎉 Fitur

- ✨ **Desain Elegan** - Tema gold dan pink yang romantis
- ⏰ **Countdown Timer** - Hitung mundur ke hari istimewa
- 👰💍 **Profil Mempelai** - Foto dan informasi pasangan
- 🎬 **Timeline Acara** - Jadwal lengkap pernikahan
- 📷 **Galeri Foto** - Lightbox untuk menampilkan foto
- 📝 **RSVP Form** - Konfirmasi kehadiran tamu
- 💬 **Guestbook** - Ucapan dan doa dari tamu
- 🎵 **Musik Latar** - Background music dengan kontrol
- 🔊 **Sound Effects** - Efek suara interaktif
- 📱 **Responsive** - Sempurna di mobile, tablet, dan desktop
- ✈️ **Animasi** - Smooth scroll animations dengan AOS.js

## 📁 Struktur Folder

```
wedding/
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Semua styling & animasi
├── js/
│   ├── main.js         # Logika utama
│   └── sound.js        # Sound effects
├── assets/
│   ├── images/         # Folder untuk foto (groom, bride, gallery)
│   ├── music/          # Musik latar
│   └── sounds/         # Sound effects
└── README.md           # File ini
```

## 🚀 Cara Memulai

### 1. Persiapkan Folder Foto

Taruh foto-foto Anda di folder `assets/images/`:
- `groom.jpg` - Foto pengantin pria (sebaiknya portrait 250x350px)
- `bride.jpg` - Foto pengantin wanita (sebaiknya portrait 250x350px)
- `gallery-1.jpg` hingga `gallery-6.jpg` - Foto galeri (square, bisa landscape juga)

### 2. Tambahkan Musik Latar (Opsional)

Taruh file musik di `assets/music/`:
- `background-music.mp3` - Musik latar (MP3 format)

Saran: Gunakan musik dari Pixabay atau Pexels (royalty-free)

### 3. Edit Data di HTML

Buka `index.html` dan ubah:

#### Nama & Tanggal (baris 40-45):
```html
<span class="name-groom">Dwika</span>
<span class="ampersand">&</span>
<span class="name-bride">Firman</span>
```
```html
<p class="hero-date">Kamis, 07 Mei 2026</p>
```

#### Tanggal Countdown (baris 128 di main.js):
```javascript
const weddingDate = new Date('2026-05-07T08:00:00').getTime();
```

#### Info Mempelai (baris 159-171):
```html
<p class="couple-info">Putra dari Bapak ... dan Ibu ...</p>
```

#### Timeline Acara (baris 197-221):
Ubah jam, acara, dan deskripsi sesuai kebutuhan

#### Lokasi (baris 232-252):
```html
<p class="location-name">Nipah Panjang</p>
<p class="location-address">Kediaman Mempelai Wanita</p>
```

#### Google Maps Link (baris 262):
Update link dengan koordinat venue Anda

### 4. Buka di Browser

Buka `index.html` di browser favorit Anda untuk preview

## 🎨 Kustomisasi

### Mengubah Warna

Edit variabel CSS di `css/style.css` (baris 8-18):

```css
:root {
    --primary: #D4AF37;           /* Gold */
    --primary-dark: #C19A6B;      /* Dark Gold */
    --secondary: #F5E6E0;         /* Soft Pink */
    --accent: #F0A0A0;            /* Blush Pink */
    --text-dark: #2C3E50;         /* Dark Gray */
    --text-light: #7F8C8D;        /* Light Gray */
}
```

### Mengubah Font

Ganti font serif di baris 15:
```css
--font-serif: 'Playfair Display', serif;  /* atau font lain */
```

### Mengubah Animasi

Edit durasi animasi AOS di `js/main.js`:
```javascript
AOS.init({
    duration: 800,  // Ubah ke nilai lain (ms)
});
```

## 📤 Deploy ke GitHub Pages

### 1. Buat Repository

```bash
git init
git add .
git commit -m "Initial commit wedding website"
```

### 2. Push ke GitHub

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/wedding-invitation.git
git push -u origin main
```

### 3. Setup Pages

- Buka repository di GitHub
- Settings → Pages
- Source: main branch
- Biarkan folder menjadi root

Website Anda akan tersedia di: `https://USERNAME.github.io/wedding-invitation/`

## 🔧 Teknologi

- **HTML5** - Struktur
- **CSS3** - Styling & Animasi
- **Vanilla JavaScript** - Interaktifitas
- **AOS.js** - Scroll animations
- **Web Audio API** - Sound effects
- **localStorage** - Penyimpanan guestbook
- **GitHub Pages** - Hosting

## 📝 Catatan Penting

1. **Browser Support**: Bekerja di semua browser modern (Chrome, Firefox, Safari, Edge)
2. **Musik Autoplay**: Beberapa browser memblokir autoplay musik. User perlu klik play button
3. **Mobile Friendly**: Fully responsive dan touch-friendly
4. **Performa**: Optimize ukuran foto untuk loading cepat (< 500KB per foto)
5. **SEO**: Ganti title dan meta description sesuai kebutuhan

## 🎵 Resources Gratis

- **Foto**: Unsplash.com, Pexels.com, Pixabay.com
- **Musik**: Pixabay.com, Freepik.com, YouTube Audio Library
- **Icons**: Feather Icons, Font Awesome
- **Fonts**: Google Fonts, Adobe Fonts

## 🐛 Troubleshooting

**Foto tidak muncul?**
- Pastikan path foto benar di `assets/images/`
- Cek format file (jpg, png, webp)

**Musik tidak putar?**
- Pastikan file ada di `assets/music/`
- Coba format MP3 (paling compatible)
- Browser mungkin memblokir autoplay

**Countdown salah?**
- Pastikan tanggal di main.js sesuai format: `YYYY-MM-DDTHH:MM:SS`
- Timezone berdasarkan client browser

## 💡 Tips

1. Compress foto dengan TinyPNG atau ImageOptim
2. Test di berbagai device sebelum launch
3. Backup file penting
4. Share link ke tamu via WhatsApp atau Email
5. Monitor RSVP responses

## 👨‍💻 Customization Help

Butuh bantuan? Cek bagian kode yang relevan:

- Struktur: lihat `index.html`
- Styling: lihat `css/style.css`
- Logika: lihat `js/main.js`
- Sound: lihat `js/sound.js`

## 📄 License

Bebas digunakan untuk personal use.

---

**Selamat merayakan pernikahan Dwika & Firman! 💕**
