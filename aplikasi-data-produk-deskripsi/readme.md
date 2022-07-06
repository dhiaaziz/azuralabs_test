# Aplikasi Data Produk Deskripsi

Aplikasi dikerjakan menggunakan stack NodeJS, Postgresql, VueJS 3, ExpressJS. Untuk instalasi aplikasi, akan dijelaskan 2 tahap terpisah, yaitu backend dan frontend

## Backend
Semua tahapan instalasi pada tahap ini dilakukan dalam folder `backend`. Pastikan Anda telah masuk ke directory tersebut sebelum melakukan langkah-langkah berikutnya.
1. Jalankan perintah berikut untuk menginstall semua depedensi yang digunakan dalam aplikasi ini.
```
npm install

```
2. Buat file bernama `.env` yang kontennya dicopy dari file `.env.example`, silahkan isi konfigurasi sesuai database di localhost anda.
```
DB_HOST=127.0.0.1
DB_USER=dhiaaziz
DB_PASSWORD=test123
DB_NAME=azura_test
DB_DIALECT=postgres

```
3. Sebelum memulai untuk menjalankan server, setelah berada di directory `backend`, jalankan perintah 
```
node bin/dbsync.js

```
perintah berikut berguna untuk menyikronkan database sesua model yang sudah didefinisikan dalam sequelize.

4. Untuk memulai menjalankan server, pastikan port 5000 dalam komputer anda tidak sedang digunakan oleh aplikasi lain. Untuk menajalankan server, gunakan perintah 
```
npm run dev

```
<br></br>
## Frontend
Semua tahapan instalasi pada tahap ini dilakukan dalam folder `frontend`. Pastikan Anda telah masuk ke directory tersebut sebelum melakukan langkah-langkah berikutnya.
1. Jalankan perintah berikut untuk menginstall semua depedensi yang digunakan dalam aplikasi ini.
```
npm install

```
2. Untuk memulai menjalankan server, pastikan port 8080 dalam komputer anda tidak sedang digunakan oleh aplikasi lain. Untuk menajalankan server, gunakan perintah 
```
npm run serve
```
Silahkan buka alamat http://localhost:8080 pada browser Anda.
