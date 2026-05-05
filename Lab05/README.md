# Lab 05

## 📌 Thông tin bài Lab

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên Lab** | Lab 05 - Xây dựng Frontend với ReactJS |
| **Trạng thái** | ✅ Hoàn thành |
| **File chính** | `movie-reviews/frontend/src/` |

---

## 🎯 Mục tiêu học tập

1. Hiểu cách kết nối frontend React với backend API
2. Xây dựng các component UI sử dụng React Bootstrap
3. Quản lý state và lifecycle trong React
4. Sử dụng axios để gọi API backend
5. Xây dựng tính năng tìm kiếm movies theo title/rating
6. Tạo tính năng thêm/chỉnh sửa/xóa reviews
7. Xây dựng authentication đơn giản với login

---

## 📚 Nội dung chính

### Phần 1: Kết nối tới Backend
**File**: `src/services/movies.js`

- Tạo lớp `MovieDataService` để gọi API backend
- Các phương thức:
  - `getAll(page)` - Lấy danh sách tất cả movies
  - `get(id)` - Lấy thông tin chi tiết movie
  - `find(query, by, page)` - Tìm kiếm movies theo title hoặc rating
  - `createReview(data)` - Thêm review mới
  - `updateReview(data)` - Cập nhật review
  - `deleteReview(id, userId)` - Xóa review
  - `getRatings()` - Lấy danh sách ratings

### Phần 2: Xây dựng MoviesList Component
**File**: `src/components/movies-list.js`

**2.1 Tạo các state và import:**
- State: `movies`, `searchTitle`, `searchRating`, `ratings`
- Import: `MovieDataService`, `useEffect`, React Bootstrap components

**2.2 Tạo 2 phương thức lấy dữ liệu:**
- `retrieveMovies()` - Gọi `MovieDataService.getAll()` để lấy danh sách movies
- `retrieveRatings()` - Gọi `MovieDataService.getRatings()` để lấy danh sách ratings
- Sử dụng `useEffect` để gọi 2 hàm này khi component mount

**2.3 Tạo các phương thức tìm kiếm:**
- `onChangeSearchTitle()` - Cập nhật state `searchTitle` từ input
- `onChangeSearchRating()` - Cập nhật state `searchRating` từ dropdown
- `findByTitle()` - Gọi `MovieDataService.find()` để tìm theo title
- `findByRating()` - Gọi `MovieDataService.find()` để tìm theo rating

**2.4 Hiển thị giao diện:**
- Tạo form với 2 cột: tìm kiếm theo title và lọc theo rating
- Hiển thị danh sách movies dưới dạng Card (dùng `.map()`)
- Mỗi card hiển thị: poster, title, rating, plot
- Thêm link "View Reviews" để xem chi tiết movie

### Phần 3: Xây dựng Movie Component
**File**: `src/components/movie.js`

**3.1 Tạo state và layout:**
- State: `movie` (chứa thông tin movie và reviews)
- Hiển thị thông tin movie (poster, title, rating, plot) ở 2 cột

**3.2 Lấy dữ liệu chi tiết movie:**
- Dùng `useParams()` để lấy `id` từ URL
- Gọi `MovieDataService.get(id)` trong `useEffect`

**3.3 Hiển thị reviews:**
- Dùng `.map()` để lặp qua `movie.reviews`
- Hiển thị mỗi review trong Card:
  - Tên người review + ngày review
  - Nội dung review
  - Nút Edit/Delete (chỉ hiển thị nếu user là người tạo)
- Thêm link "Add Review" để thêm review mới

### Phần 4: Xây dựng AddReview Component
**File**: `src/components/add-reviews.js`

**4.1 Tạo form:**
- State: `review` (nội dung review), `submitted` (trạng thái submit)
- Form có textarea để nhập review
- Nút Submit gọi `saveReview()`

**4.2 Gửi review:**
- Gọi `MovieDataService.createReview()` với data:
  - `movie_id`: lấy từ URL params
  - `review`: nội dung review
  - `name`: tên user
  - `user_id`: ID của user
- Hiển thị thông báo "You submitted successfully!" khi thành công

### Phần 5: Xây dựng Login Component
**File**: `src/components/login.js`

**5.1 Tạo form login:**
- State: `name` (tên người dùng)
- Form có input để nhập tên
- Nút Login gọi hàm `props.login()`

**5.2 Xử lý login:**
- Tạo object user với `_id` và `name`
- Gọi `props.login(user)` để cập nhật user state ở App.js
- Dùng `useNavigate()` để chuyển hướng đến trang `/movies`

### Phần 6: Cấu hình App.js
**File**: `src/App.js`

**6.1 Tạo Navigation Bar:**
- Import Navbar, Nav từ React Bootstrap
- Navbar có link "Movies" và "Login/Logout"
- Hiển thị tên user khi đã login

**6.2 Định nghĩa Routes:**
- `/` → MoviesList
- `/movies` → MoviesList
- `/movies/:id` → Movie
- `/movies/:id/view` → Movie
- `/movies/:id/review` → AddReview
- `/login` → Login

**6.3 Quản lý user state:**
- State `user` lưu trữ thông tin user hiện tại
- Hàm `login()` và `logout()` để cập nhật user state
- Truyền `user` props cho Movie component

---

## 📊 Kết quả thực hiện

### Công nghệ sử dụng:
- **Frontend**: React 19.2.5
- **UI Library**: React Bootstrap 2.10.10
- **Routing**: React Router DOM 7.14.1
- **HTTP Client**: Axios 1.6.0
- **CSS Framework**: Bootstrap 5.3.8

### Tính năng đã implement:
- ✅ Danh sách movies với Card layout
- ✅ Tìm kiếm movies theo title
- ✅ Lọc movies theo rating
- ✅ Xem chi tiết movie
- ✅ Xem reviews của movie
- ✅ Thêm review mới
- ✅ Navigation bar với Login/Logout
- ✅ Kết nối với backend API

---

## 🔧 Cách chạy

### 1. Cài đặt dependencies
```bash
cd movie-reviews/frontend
npm install
```

### 2. Chạy frontend (port 3000)
```bash
npm start
```

### 3. Đảm bảo backend đang chạy (port 8000)
```bash
cd movie-reviews/backend
npm start
```

### 4. Truy cập ứng dụng
Mở trình duyệt và vào: `http://localhost:3000`

---

## 📝 Hướng dẫn sử dụng

1. **Xem danh sách movies**: Trang chủ hiển thị danh sách movies
2. **Tìm kiếm**: Nhập tên movie và nhấn "Search" để tìm theo title
3. **Lọc theo rating**: Chọn rating từ dropdown và nhấn "Search"
4. **Xem chi tiết**: Nhấn "View Reviews" để xem chi tiết movie và reviews
5. **Thêm review**: Nhấn "Add Review" và nhập nội dung review
6. **Login**: Nhấn "Login" để đăng nhập, sau đó có thể edit/delete reviews của mình
