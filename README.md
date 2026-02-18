# Forum React - Aplikasi Forum Diskusi

Proyek ini adalah implementasi dari kursus **"Menjadi React Web Developer Expert"** dari [Dicoding](https://www.dicoding.com/academies/418-menjadi-react-web-developer-expert). Aplikasi forum diskusi ini dibangun dengan teknologi React modern dan best practices.

## 🚀 Teknologi yang Digunakan

### Core Framework & Libraries
- **React 19** - Library UI modern dengan fitur terbaru
- **Vite** - Build tool dan development server yang cepat
- **React Router v7** - Routing untuk aplikasi single-page

### State Management
- **Redux Toolkit** - State management dengan pendekatan modern
- **Redux Persist** - Persistensi state di localStorage
- **React Redux** - Integrasi Redux dengan React

### Styling & UI Components
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI** - Komponen UI untuk Tailwind CSS
- **Lucide React** - Library ikon modern
- **clsx & tailwind-merge** - Utility untuk mengelola class CSS

### Testing
- **Vitest** - Test runner yang cepat
- **React Testing Library** - Testing komponen React
- **Cypress** - End-to-end testing
- **Jest DOM** - Matchers untuk testing DOM

### Development Tools & Quality
- **ESLint dengan konfigurasi Dicoding** - Linting dan code quality
- **Prop Types** - Validasi props untuk komponen
- **DOM Purify** - Sanitasi HTML untuk keamanan

## 📋 Fitur Aplikasi

### Autentikasi
- Registrasi pengguna baru
- Login dengan akun yang sudah terdaftar
- Logout dengan pembersihan state
- Protected routes untuk halaman yang membutuhkan autentikasi

### Thread Management
- Membuat thread baru (hanya untuk pengguna terautentikasi)
- Melihat daftar semua thread
- Filter thread berdasarkan kategori
- Detail thread dengan komentar lengkap
- Vote (upvote/downvote) pada thread dan komentar

### Komentar
- Menambahkan komentar pada thread
- Vote pada komentar
- Tampilan komentar yang terstruktur

### Leaderboard
- Peringkat pengguna berdasarkan skor
- Tampilan podium untuk top 3 pengguna
- Daftar lengkap semua pengguna

### Profile
- Melihat profil pengguna yang sedang login
- Informasi avatar, nama, dan email

### UI/UX
- Dark/light theme toggle
- Responsive design
- Loading indicators
- Breadcrumb navigation
- Form validation

## 🏗️ Arsitektur Proyek

```
src/
├── components/     # Komponen UI reusable
├── pages/         # Halaman aplikasi
├── layouts/       # Layout wrapper
├── states/        # Redux state management
│   ├── authUser/          # State autentikasi
│   ├── threads/           # State threads
│   ├── threadDetail/      # State detail thread
│   ├── leaderboards/      # State leaderboard
│   ├── theme/             # State theme
│   └── shared/            # State shared
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── styles/        # Global styles
```

## 🧪 Testing

Proyek ini menggunakan pendekatan testing yang komprehensif:

### Unit Testing
```bash
npm test
```
Menggunakan Vitest dan React Testing Library untuk testing komponen dan reducer.

### End-to-End Testing
```bash
npm run e2e
```
Menggunakan Cypress untuk testing alur aplikasi secara lengkap.

### CI Testing
```bash
npm run ci:test
```
Menjalankan semua test sekaligus (unit + e2e) untuk keperluan CI/CD.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ dan npm

### Installation
1. Clone repository
```bash
git clone https://github.com/adepranaya/forum-react.git
cd forum-react
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build untuk production
```bash
npm run build
```

## 📚 API Integration

Aplikasi terintegrasi dengan **Forum API Dicoding**:
- Base URL: `https://forum-api.dicoding.dev/v1`
- Endpoints: Users, Threads, Comments, Votes, Leaderboards
- Authentication menggunakan Bearer Token

## 🎯 Best Practices yang Diterapkan

1. **Component Composition** - Komponen kecil dan reusable
2. **Custom Hooks** - Logic reuse dengan hooks
3. **Redux Toolkit Slices** - State management yang terorganisir
4. **Protected Routes** - Keamanan routing
5. **Error Boundaries** - Penanganan error yang baik
6. **Code Splitting** - Optimasi performa
7. **Accessibility** - Semantik HTML dan ARIA attributes
8. **Performance Optimization** - Memoization dan lazy loading

## ⚠️ Peringatan Plagiarisme & Etika Penggunaan

Proyek ini dibuat untuk tujuan edukasi dan pembelajaran sebagai bagian dari kursus **"Menjadi React Web Developer Expert"** di Dicoding. 

### 🚫 Larangan Plagiarisme
Dilarang keras melakukan plagiat atau menjiplak kode ini untuk keperluan:
- **Komersial**: Menggunakan kode untuk proyek komersial tanpa izin
- **Akademis**: Menyerahkan kode sebagai karya sendiri dalam tugas akademis
- **Publikasi**: Memublikasikan kode sebagai karya original tanpa atribusi

### ✅ Penggunaan yang Diperbolehkan
Anda diperbolehkan menggunakan kode ini sebagai referensi dengan ketentuan:
1. **Atribusi**: Berikan kredit yang sesuai dengan menyebutkan sumber asli
2. **Transparansi**: Jangan mengklaim kode ini sebagai karya Anda sendiri
3. **Modifikasi**: Jika memodifikasi, jelaskan perubahan yang dilakukan

## 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi sebagai bagian dari kursus "Menjadi React Web Developer Expert" di Dicoding. Untuk penggunaan di luar tujuan edukasi,

### 🔗 Best Practices Open Source
Kami mendukung semangat open source dengan cara yang bertanggung jawab:
- Gunakan dengan etika dan integritas akademis
- Pelajari konsep, bukan sekadar menyalin kode
- Kontribusikan kembali jika menemukan perbaikan

---
**Catatan**: Pelanggaran etika akademis dan plagiarisme dapat memiliki konsekuensi serius. Gunakan proyek ini sebagai alat belajar, bukan jalan pintas.

## 👨‍💻 Author

**Ade Pranaya** - [GitHub](https://github.com/adepranaya)

---

_Dibangun dengan ❤️ menggunakan React dan teknologi web modern_
