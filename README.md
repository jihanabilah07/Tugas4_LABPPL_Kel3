# Express TypeScript Student API

## 📌 Deskripsi Proyek
Proyek ini adalah REST API sederhana untuk mengelola data mahasiswa menggunakan **Node.js**, **Express**, dan **TypeScript**. API ini mendukung operasi CRUD untuk data mahasiswa.

---

## 📦 Fitur API
- 📜 **Mendapatkan semua mahasiswa** (dengan paginasi opsional)
- 🔍 **Mendapatkan mahasiswa berdasarkan ID**
- 🔎 **Mencari mahasiswa berdasarkan nama**
- ➕ **Menambahkan mahasiswa baru**
- ✏️ **Mengupdate data mahasiswa**
- ❌ **Menghapus mahasiswa berdasarkan ID**

---

## ⚙️ Instalasi & Menjalankan Server

### 1️⃣ **Clone Repository**
```bash
git clone <repository_url>
cd <nama_folder>
```

### 2️⃣ **Install Dependencies**
```bash
npm install
```

### 3️⃣ **Konfigurasi TypeScript**
Pastikan file `tsconfig.json` memiliki pengaturan berikut:
```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "CommonJS",
        "outDir": "./dist",
        "rootDir": "./",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true
    }
}
```

### 4️⃣ **Menjalankan Server**
```bash
npm run dev  # Jalankan dalam mode development
npm start    # Jalankan dalam mode production
```

---

## 🛠 Struktur Folder
```
├── controllers
│   ├── studentController.ts  # Controller untuk menangani request mahasiswa
│
├── database
│   ├── mahasiswa.json         # Database dummy berbentuk JSON
│
├── routes
│   ├── routes.ts              # Routing utama API
│
├── utils
│   ├── fileHandler.ts         # Utility untuk membaca/menulis file JSON
│   ├── studentType.ts         # Tipe data mahasiswa dalam TypeScript
│
├── server.ts                  # File utama server Express
├── tsconfig.json               # Konfigurasi TypeScript
├── package.json                # Dependensi proyek
└── README.md                   # Dokumentasi proyek
```

---

## 📡 Endpoint API

| Method | Endpoint                  | Deskripsi                      |
|--------|---------------------------|--------------------------------|
| GET    | `/api/students`           | Mendapatkan semua mahasiswa   |
| GET    | `/api/students/:id`       | Mendapatkan mahasiswa by ID   |
| GET    | `/api/students/search?q=` | Mencari mahasiswa by nama     |
| POST   | `/api/students`           | Menambahkan mahasiswa baru    |
| PUT    | `/api/students/:id`       | Mengupdate data mahasiswa     |
| DELETE | `/api/students/:id`       | Menghapus mahasiswa by ID     |

---

## 🚀 Teknologi yang Digunakan
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework Backend
- **TypeScript** - Superset dari JavaScript
- **JSON** - Database sementara (tanpa database SQL)



