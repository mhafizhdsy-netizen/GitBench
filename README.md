<<<<<<< HEAD
<<<<<<< HEAD
# GitBench
GitAssist menggunakan AI untuk mengotomatiskan pesan commit Anda, menangani unggahan massal dengan mulus, dan menyederhanakan manajemen repositori.
=======
# Firebase Studio
=======
>>>>>>> 29b6a37 (update file readme.md dengan menjelaskan semua tentang website ini semua)

# GitBench: Asisten Alur Kerja GitHub Berbasis AI

<<<<<<< HEAD
To get started, take a look at src/app/page.tsx.
>>>>>>> 537a1da (Initialized workspace with Firebase Studio)
=======
[![Lisensi: MIT](https://img.shields.io/badge/Lisensi-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg?logo=next.js)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-SDK%20v11-orange.svg?logo=firebase)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-purple.svg?logo=google-gemini)](https://ai.google.dev/)
[![Shadcn UI](https://img.shields.io/badge/shadcn/ui-black?logo=shadcn-ui&logoColor=white)](https://ui.shadcn.com/)

**GitBench** adalah aplikasi web modern yang dirancang untuk menyederhanakan dan mempercepat alur kerja GitHub Anda. Dengan memanfaatkan kekuatan AI dari Google Gemini, GitBench mengotomatiskan tugas-tugas yang membosankan, memungkinkan Anda untuk fokus pada hal yang paling penting: membuat kode berkualitas.

### [➡️ Kunjungi Demo Langsung](https://gitassist.web.app/)

---

![Cuplikan Layar GitBench](https://images.unsplash.com/photo-1618423691384-1b094e219466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYXJrJTIwdGVjaCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NjQ4NzE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080)

## ✨ Fitur Utama

-   🚀 **Unggahan Massal**: Unggah beberapa file dan seluruh folder dengan mudah ke repositori GitHub Anda hanya dengan beberapa klik.
-   🗂️ **Ekstraksi ZIP Otomatis**: Cukup seret dan lepas file `.zip`. GitBench akan secara otomatis mengekstrak isinya sambil mempertahankan struktur direktori asli.
-   🤖 **Pesan Commit Berbasis AI**: Biarkan AI kami menganalisis perubahan file Anda (`git diff`) dan secara otomatis menghasilkan pesan commit yang deskriptif dan sesuai dengan standar *Conventional Commits*.
-   🔐 **Autentikasi GitHub Aman**: Masuk dengan aman menggunakan akun GitHub Anda melalui OAuth2. Token akses Anda disimpan dengan aman di sesi browser dan tidak pernah diekspos.
-   📂 **Manajemen File Interaktif**: Setelah mengunggah, Anda dapat meninjau semua file yang akan di-commit dan menghapus file yang tidak diinginkan sebelum proses commit.
-   🎯 **Pemilihan Repositori & Path Tujuan**: Pilih repositori target dari daftar repo yang Anda miliki, dan tentukan path folder tujuan (opsional) untuk menempatkan file Anda.
-   🌐 **Antarmuka Modern**: UI yang bersih, responsif, dan intuitif dibangun dengan Next.js dan Shadcn/UI untuk pengalaman pengguna yang luar biasa.

## 🛠️ Tumpukan Teknologi

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn/UI](https://ui.shadcn.com/)
-   **AI**: [Google Gemini Pro](https://ai.google.dev/) via [Genkit](https://firebase.google.com/docs/genkit)
-   **Autentikasi**: [Firebase Authentication](https://firebase.google.com/docs/auth) (GitHub Provider)
-   **Hosting**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 Memulai

Ikuti langkah-langkah ini untuk menjalankan salinan lokal dari proyek ini.

### Prasyarat

-   [Node.js](https://nodejs.org/en/) (v18 atau lebih baru)
-   [NPM](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)
-   Akun [Firebase](https://firebase.google.com/) untuk autentikasi.
-   API Key untuk [Google Gemini](https://ai.google.dev/).

### Instalasi

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/mhafizhdsy-netizen/GitAssist.git
    cd GitBench
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Siapkan Variabel Lingkungan:**
    Buat file bernama `.env` di root proyek dan isi dengan konfigurasi Firebase dan API key Gemini Anda. Anda dapat menyalin dari `.env.example`.

    ```env
    # Firebase Public Config
    # Ambil ini dari konsol Firebase Anda
    # (Pengaturan Proyek > Aplikasi Anda > Konfigurasi SDK)
    NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123...
    NEXT_PUBLIC_FIREBASE_APP_ID=1:123...:web:...

    # Google Gemini API Key
    # Dapatkan dari Google AI Studio
    GEMINI_API_KEY=AIza...
    ```

4.  **Jalankan Server Pengembangan:**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat hasilnya.

## ☁️ Deploy Proyek Anda

Deploy proyek ini dengan mudah ke platform favorit Anda menggunakan tombol di bawah ini:

| Vercel | Netlify | Railway | Render |
| :---: | :---: | :---: | :---: |
| [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhafizhdsy-netizen%2FGitAssist) | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/get-started?repository=https://github.com/mhafizhdsy-netizen/GitAssist) | [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/mhafizhdsy-netizen/GitAssist) | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/mhafizhdsy-netizen/GitAssist) |

**Penting**: Jangan lupa untuk menambahkan variabel lingkungan yang ada di file `.env` Anda ke pengaturan proyek di platform hosting pilihan Anda.

## 🤝 Berkontribusi

Kontribusi Anda sangat kami hargai! Jika Anda memiliki ide untuk fitur baru atau menemukan bug, jangan ragu untuk membuka *issue* atau mengirimkan *pull request*.

1.  **Fork** repositori ini.
2.  Buat *branch* baru (`git checkout -b fitur/FiturLuarBiasa`).
3.  Lakukan perubahan Anda dan **commit** (`git commit -m 'feat: Menambahkan FiturLuarBiasa'`).
4.  **Push** ke branch Anda (`git push origin fitur/FiturLuarBiasa`).
5.  Buka **Pull Request**.

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.
>>>>>>> 29b6a37 (update file readme.md dengan menjelaskan semua tentang website ini semua)
