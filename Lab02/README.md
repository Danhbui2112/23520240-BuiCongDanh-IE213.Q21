# Lab 02

## 📌 Thông tin bài Lab

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên Lab** | Lab 02 |
| **Trạng thái** | ✅ Hoàn thành  |
| **Nội dung** | Thiết lập backend với Node và ExpressJS |
---

## 🎯 Mục tiêu học tập

- Thiết lập môi trường backend với Node.js và ExpressJS.
- Khởi tạo dự án với `npm init` và cài đặt các dependency: `mongodb`, `express`, `cors`, `dotenv`.
- Tạo các file cấu trúc backend: `server.js`, `index.js`, `api/movies.route.js`.
- Kết nối cơ sở dữ liệu MongoDB thông qua lớp DAO (`moviesDAO.js`).
- Xây dựng controller xử lý request (`movies.controller.js`) và bộ lọc tìm kiếm phim.

---

## 📚 Nội dung chính

1. Di chuyển vào thư mục backend:
```bash
cd Lab02/backend
```

2. Cài đặt các dependency:
```bash
npm install
npm install -g nodemon
```

3. Tạo file `.env` và điền thông tin kết nối MongoDB:
```
MONGODB_URI=mongodb://localhost:27017
PORT=3000
```

4. Khởi động server:
```bash
nodemon index.js
```
---

## 📊 Kết quả thực hiện

![Kết quả cuối cùng](./movie-reviews/backend/images/Finalresult.jpg)

---


