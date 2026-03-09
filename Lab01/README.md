# Lab 01: MongoDB Basics ✅

## 📌 Thông tin bài Lab

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên Lab** | MongoDB Basics |
| **Trạng thái** | ✅ Hoàn thành |
| **File chính** | `Lab1_23520240.mongodb.js` |
| **Dòng code** | 52 lines |

---

## 🎯 Mục tiêu học tập

Nắm vững các lệnh cơ bản CRUD trong MongoDB:
- Kết nối và tạo database
- Insert/Query/Update/Delete dữ liệu
- Sử dụng các operators
- Aggregation pipeline

---

## 📚 Nội dung chính

### 1. **Kết nối Database**
```javascript
use('23520240-ie213')
```
- Tạo hoặc kết nối tới database `23520240-ie213`

### 2. **Insert dữ liệu (insertMany)**
```javascript
db.employees.insertMany([...])
```
- Thêm 6 employees vào collection `employees`
- Các fields: id, name, age, organization, position, salary

### 3. **Query dữ liệu (find)**
```javascript
db.employees.find({ "age": { $gt: 30, $lt: 60 } })
```
- Tìm kiếm với điều kiện
- Sử dụng operators: `$gt` (greater than), `$lt` (less than), `$in`, `$exists`

### 4. **Cập nhật dữ liệu (updateMany)**
```javascript
db.employees.updateMany({}, { $set: {...} })
```
- Thêm/xóa fields bằng `$set` và `$unset`
- Cập nhật toàn bộ hoặc một phần documents

### 5. **Tạo Index**
```javascript
db.employees.createIndex({ "id": 1 }, { unique: true })
```
- Tạo unique index trên field `id`
- Đảm bảo không có id trùng lặp

### 6. **Aggregation Pipeline**
```javascript
db.employees.aggregate([
  { $group: { _id: "$organization", totalAge: { $sum: "$age" }, averageAge: { $avg: "$age" } } }
])
```
- Nhóm dữ liệu theo organization
- Tính tổng tuổi và tuổi trung bình

---

## 📊 Kết quả thực hiện

### ✅ Các hoạt động đã hoàn thành:
- ✅ Tạo database `23520240-ie213`
- ✅ Insert 6 employees vào collection
- ✅ Tạo unique index trên field `id`
- ✅ Query with operators ($gt, $lt, $exists)
- ✅ Cập nhật documents (thêm/xóa fields)
- ✅ Aggregation pipeline ($group, $sum, $avg)

### 📈 Dữ liệu kết quả:
- **Tổng documents**: 6 nv
- **Organization UIT**: 4 employees
- **Organization USSH**: 2 employees

### 📋 Sample Output (Aggregation):
```json
{
  "_id": "UIT",
  "totalAge": 160,
  "averageAge": 40
}
{
  "_id": "USSH",
  "totalAge": 90,
  "averageAge": 45
}
```

---

## 🔧 Cách chạy

1. Mở MongoDB shell hoặc MongoDB Compass
2. Chạy file: `Lab1_23520240.mongodb.js`
3. Hoặc copy các lệnh từ file vào MongoDB shell

---

## 💡 Các operators được sử dụng

| Operator | Ý nghĩa |
|----------|---------|
| `$gt` | Greater than (lớn hơn) |
| `$lt` | Less than (nhỏ hơn) |
| `$in` | Nằm trong danh sách |
| `$exists` | Field tồn tại |
| `$unset` | Xóa field |
| `$set` | Đặt giá trị field |
| `$group` | Nhóm dữ liệu |
| `$sum` | Tính tổng |
| `$avg` | Tính trung bình |

---

## 📝 Ghi chú

- Database name: `23520240-ie213`
- Collection name: `employees`
- Unique index: trên field `id`
