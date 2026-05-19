# Lab 06

## 📌 Thông tin bài Lab

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên Lab** | Lab 06 - Frontend với ReactJS (II) |
| **Trạng thái** | ✅ Hoàn thành |
| **File chính** | `movie-reviews/` |
| **Công nghệ** | React, React Router, React Bootstrap, Axios, MongoDB, Express |

---

## 🎯 Mục tiêu học tập

1. **Xây dựng giao diện người dùng** với React và React Bootstrap
2. **Quản lý trạng thái người dùng** (User Authentication)
3. **Hiển thị danh sách phim** với tính năng tìm kiếm
4. **Quản lý đánh giá phim** (Create, Read, Update, Delete)
5. **Tích hợp API RESTful** với Backend

---

## 📚 Nội dung chính

### 1. **Login Component** (login.js)
- Cho phép người dùng nhập tên và đăng nhập
- Lưu thông tin người dùng vào state của App

### 2. **Movies List Component** (movies-list.js)
- Hiển thị danh sách phim
- Tìm kiếm phim theo tiêu đề hoặc xếp hạng
- Hiển thị chi tiết phim, poster, và mô tả

### 3. **Movie Detail Component** (movie.js)
- Hiển thị thông tin chi tiết phim
- Hiển thị danh sách đánh giá
- Cho phép người dùng đã đăng nhập:
  - Thêm đánh giá mới (nút "Add Review")
  - Chỉnh sửa đánh giá của mình (nút "Edit")
  - Xóa đánh giá của mình (nút "Delete")

### 4. **Add Review Component** (add-reviews.js)
- Form để thêm đánh giá phim
- Sử dụng thông tin người dùng đã đăng nhập
- Gửi đánh giá lên Backend thông qua API

### 5. **Backend API Routes**
- `GET /api/v1/movies` - Lấy danh sách phim
- `GET /api/v1/movies/:id` - Lấy chi tiết phim (bao gồm đánh giá)
- `GET /api/v1/movies/ratings` - Lấy danh sách các xếp hạng
- `POST /api/v1/movies/review` - Thêm đánh giá mới
- `PUT /api/v1/movies/review` - Cập nhật đánh giá
- `DELETE /api/v1/movies/review` - Xóa đánh giá

---

## 📊 Kết quả thực hiện

### Các tính năng đã hoàn thành:
- ✅ Giao diện người dùng
- ✅ Hệ thống đăng nhập/đăng xuất
- ✅ Tìm kiếm phim
- ✅ Xem chi tiết phim
- ✅ Thêm đánh giá
- ✅ Xóa đánh giá
- ✅ Hiển thị danh sách đánh giá

---

## 🔧 Cách chạy

### Yêu cầu:
- Node.js và npm
- MongoDB Atlas account hoặc MongoDB local
- Hai terminal (một cho Backend, một cho Frontend)

### Bước 1: Cấu hình Backend

1. Tạo file `.env` trong thư mục `backend`:
```bash
MOVIEREVIEWS_DB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
MOVIEREVIEWS_NS=sample_mflix
PORT=8000
```

2. Cài đặt dependencies:
```bash
cd backend
npm install
```

3. Chạy Backend:
```bash
npm run dev
# hoặc
npm start
```

Backend sẽ chạy tại: `http://localhost:8000`

### Bước 2: Cấu hình Frontend

1. Cài đặt dependencies:
```bash
cd frontend
npm install
```

2. Chạy Frontend:
```bash
npm start
```

Frontend sẽ mở tại: `http://localhost:3000`

---

## 🎬 Hướng dẫn sử dụng

1. **Đăng nhập**: Nhấp "Login" ở thanh điều hướng, nhập tên của bạn, và nhấn "Login"
2. **Xem phim**: Chuyển đến trang "Movies" để xem danh sách
3. **Tìm kiếm**: Sử dụng thanh tìm kiếm để tìm theo tiêu đề hoặc xếp hạng
4. **Xem đánh giá**: Nhấp "View Reviews" trên một bộ phim
5. **Thêm đánh giá**: Nhấp "Add Review" và nhập đánh giá của bạn
6. **Xóa đánh giá**: Chỉ có thể xóa đánh giá của chính mình bằng nút "Delete"

---

## 📁 Cấu trúc dự án

```
Lab06/
├── backend/
│   ├── api/
│   │   ├── movies.controller.js
│   │   ├── movies.route.js
│   │   └── reviews.controller.js
│   ├── dao/
│   │   ├── moviesDAO.js
│   │   └── reviewsDAO.js
│   ├── index.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── login.js
    │   │   ├── movies-list.js
    │   │   ├── movie.js
    │   │   └── add-reviews.js
    │   ├── services/
    │   │   └── movies.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## 🔑 Những điều quan trọng

- **User Authentication**: Thông tin người dùng được lưu trong state của App component
- **API Service**: Sử dụng axios để gửi HTTP requests
- **Data Flow**: Props được truyền từ App → Movie → Form components
- **Delete Review**: Chỉ có thể xóa đánh giá nếu user_id trùng khớp
- **Database**: MongoDB được sử dụng để lưu trữ phim và đánh giá

---

## 🎓 Các khái niệm ReactJS được sử dụng

1. **Functional Components** - Sử dụng hooks
2. **useState** - Quản lý state
3. **useEffect** - Side effects
4. **useParams** - Lấy tham số từ URL
5. **useNavigate** - Điều hướng (nếu cần)
6. **Props** - Truyền dữ liệu giữa components
7. **React Router** - Định tuyến giữa các trang
8. **Bootstrap Components** - UI components

---

**Hoàn thành: Ngày 19 tháng 5 năm 2026**
