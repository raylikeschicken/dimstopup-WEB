# Panduan Menjalankan Aplikasi WebTopUp

## Akun Login

### Admin

* Username: **admin**
* Email: **[admin@example.com](mailto:admin@example.com)**
* Password: **admin123**

### User

* Username: **Haze**
* Email: **[Haze@gmail.com](mailto:Haze@gmail.com)**
* Password: **Haze123**

---

# Konfigurasi Database

1. Buka MongoDB Compass dan buat koneksi (connection) apabila belum tersedia.
2. Buat database baru dengan nama **webtopup**.
3. Buat dua collection dengan nama:

   * **users**
   * **orders**
4. Import file data yang telah disediakan ke masing-masing collection:

   * Data users → collection **users**
   * Data orders → collection **orders**

---

# Konfigurasi Environment Variable

## Frontend (Folder `webtopup`)

1. Buka folder **webtopup**.
2. Buat file baru dengan nama **.env.local**.
3. Isi file tersebut dengan konfigurasi berikut:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Backend (Folder `Backend`)

1. Buka folder **Backend**.
2. Buat file baru dengan nama **.env**.
3. Isi file tersebut dengan konfigurasi berikut:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/webtopup
```

**Catatan:** Nilai `localhost` dapat disesuaikan dengan konfigurasi MongoDB pada perangkat yang digunakan.

---

# Menjalankan Aplikasi

## Menjalankan Backend

1. Buka terminal.
2. Masuk ke direktori **Backend**.

```bash
cd Backend
```

3. Install seluruh dependency.

```bash
npm install
```

4. Jalankan backend.

```bash
npm run dev
```

---

## Menjalankan Frontend

1. Buka terminal baru.
2. Masuk ke direktori **webtopup**.

```bash
cd webtopup
```

3. Install seluruh dependency.

```bash
npm install
```

4. Jalankan frontend.

```bash
npm run dev
```

---

# Akses Aplikasi

Setelah backend dan frontend berhasil dijalankan, buka browser dan akses alamat yang ditampilkan pada terminal frontend (umumnya `http://localhost:3000`).

Aplikasi siap digunakan menggunakan akun login yang telah disediakan.
