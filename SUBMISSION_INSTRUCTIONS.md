SUBMISSION INSTRUCTIONS
======================

Ringkasan: sertakan source code aplikasi (tanpa `node_modules`, `vendor`, `build`, dsb) dan instruksi database. Untuk MongoDB (non-relational) gunakan skrip seed yang ada atau berikan perintah `mongodump`/`mongoexport` jika perlu.

1) File yang harus dikumpulkan
- Semua file project kecuali yang di-list di `.gitignore` (contoh: `node_modules`, `.env`, build artifacts).
- Jika ukuran besar, kompres root project menjadi satu file ZIP. Jika DB besar, kumpulkan file dump DB terpisah.

2) Cara menjalankan (pada mesin penerima)

Clone repository dan jalankan backend + frontend:

```
git clone https://github.com/<you>/<repo>.git
cd <repo>

# Backend
cd Backend
npm install
copy .env.example .env   # PowerShell: Copy-Item .env.example .env
# Edit Backend/.env untuk mengatur MONGODB_URI (lihat bagian DB di bawah) dan JWT_SECRET
npm run seed    # menjalankan seed.js untuk membuat akun & data contoh
npm run dev     # menjalankan server (nodemon)

# Frontend (Next.js)
cd ../webtopup
npm install
npm run dev     # Next.js di port 3000
```

3) Database (MongoDB)
- Default koneksi pada `Backend/server.js`:
  `process.env.MONGODB_URI || 'mongodb://localhost:27017/webtopup'`
- Opsi setup DB:
  - Local MongoDB: install MongoDB Community dan gunakan `MONGODB_URI=mongodb://localhost:27017/webtopup`.
  - Docker quick start:
    ```
    docker run -d --name mongo -p 27017:27017 -v mongo-data:/data/db mongo:6.0
    ```
  - MongoDB Atlas: buat cluster, salin connection string ke `Backend/.env` sebagai `MONGODB_URI`.

4) Export / import database (opsional)
- Untuk membuat dump (MongoDB):
  - Full dump (mongodump):
    ```
    mongodump --db webtopup --out ./dump
    ```
  - Export collections ke JSON (mongoexport):
    ```
    mongoexport --db webtopup --collection users --out users.json --jsonArray
    mongoexport --db webtopup --collection topupproducts --out products.json --jsonArray
    mongoexport --db webtopup --collection orders --out orders.json --jsonArray
    ```

5) Akun contoh (dari `Backend/seed.js`) — masukkan ini ke kolom "online text" pada form:

Konfigurasi aplikasi (ringkas):
- Backend: atur `Backend/.env` dengan `MONGODB_URI` dan `JWT_SECRET`.
- Frontend: tidak ada konfigurasi khusus kecuali environment Next jika diperlukan.
- Jalankan `npm install` di masing-masing folder, lalu `npm run seed` di `Backend` untuk mengisi data.

Akun contoh (username / password):
- Admin: email: `admin@example.com`  password: `admin123`
- User 1: email: `user1@example.com` password: `user1234`
- User 2: email: `user2@example.com` password: `topup1234`

Pastikan menyebutkan di kolom online text bahwa aplikasi menggunakan MongoDB, dan beri instruksi singkat untuk menjalankan seed script.

6) Cara membuat file ZIP untuk dikumpulkan

Di root project:

```
# Linux / macOS / WSL / Git Bash
zip -r submission.zip . -x "node_modules/*" "*/.env" "webtopup/.next/*"

# Windows (PowerShell)
Compress-Archive -Path * -DestinationPath submission.zip -Force
```

7) Link eksternal
- Jika menggunakan Google Drive / OneDrive / GitHub, pastikan link bersifat publik dan menyertakan: file ZIP (atau repo), dan file dump DB jika terpisah.

8) Validasi sebelum submit
- Pastikan `npm run seed` selesai tanpa error.
- Jalankan aplikasi (backend + frontend) dan login menggunakan akun contoh.

---

Jika mau, saya bisa:
- buatkan `SUBMISSION_INSTRUCTIONS.md` (sudah dibuat),
- buatkan `.gitignore` (sudah dibuat),
- atau buat ZIP terkompres (perlu izin untuk menjalankan zip di lingkungan Anda). Jika ingin saya buatkan ZIP di repo, konfirmasi dan saya akan membuat file `submission.zip` of tracked files only.
