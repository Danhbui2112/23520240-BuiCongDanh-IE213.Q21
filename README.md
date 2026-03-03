# IE213
## 1. Thông tin sinh viên

| Thông tin | Chi tiết |
|-----------|----------|
| **Họ tên** | Bùi Công Danh |
| **MSSV** | 23520240 |
| **Lớp** | IE213.Q21 |
| **Môn học** | IE213 |

---

## 2. Danh sách các Lab

| Lab | Tên | Mô tả | Trạng thái |
|-----|-----|-------|-----------|
| Lab 01 | MongoDB Basics | Học các lệnh cơ bản CRUD trong MongoDB | ✅ Hoàn thành |
| Lab 02 |  
| Lab 03 | 
| Lab 04 | 
| Lab 05 | 
| Lab 06 | 

---

## 3. Mô tả chi tiết từng Lab

### 🔹 Lab 01: MongoDB Basics ✅
**Nội dung chính:**
- Kết nối và tạo database MongoDB
- Thêm dữ liệu (insertMany) vào collection `employees`
- Tìm kiếm dữ liệu với các điều kiện (find queries)
- Cập nhật dữ liệu (updateMany) - thêm/xóa fields
- Tạo unique index trên database
- Sử dụng operators: `$gt`, `$lt`, `$in`, `$exists`, `$unset`
- Aggregation pipeline: `$group`, `$sum`, `$avg`

**File:** `Lab01/Lab1_23520240.mongodb.js` (52 lines)

**Các lệnh chính:**
```javascript
use ('23520240-ie213')
db.employees.insertMany([...])
db.employees.find({ "age": { $gt: 30, $lt: 60 } })
db.employees.updateMany({}, { $set: {...} })
db.employees.aggregate([{ $group: {...} }])
```

### 🔹 Lab 02 - Lab 06
*Chưa bắt đầu - Sẽ cập nhật trong các buổi học tiếp theo*

---

## 4. Cách chạy chương trình

### ✅ Lab 01 - MongoDB Basics: HOÀN THÀNH

**Các hoạt động đã thực hiện:**
- ✅ Tạo database `23520240-ie213`
- ✅ Insert 6 employees vào collection
- ✅ Tạo unique index trên field `id`
- ✅ Query with operators ($gt, $lt, $exists)
- ✅ Cập nhật documents (thêm/xóa fields)
- ✅ Aggregation pipeline ($group, $sum, $avg)

**Kết quả cuối cùng:**
- 6 documents trong collection employees
- 4 employees từ organization "UIT"
- 2 employees từ organization "USSH"

**Sample output aggregation:**
```
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
## 5. Kết quả thực hiện


---

## 6. Tình trạng hoàn thành

### Tiến độ chung:
```
✅ Hoàn thành: 1/6 labs (16.7%)
⏳ Chưa bắt đầu: 5/6 labs (83.3%)
```

### Chi tiết:
- [x] **Lab 01** - MongoDB Basics ✅
- [ ] **Lab 02** - 
- [ ] **Lab 03** - 
- [ ] **Lab 04** - 
- [ ] **Lab 05** - 
- [ ] **Lab 06** - 

---

## 7. Cấu trúc thư mục

```
IE213/
├── README.md
├── Lab01/
│   └── Lab1_23520240.mongodb.js
├── Lab02/
├── Lab03/
├── Lab04/
├── Lab05/
└── Lab06/
```

## 11. Disclosure: Sử dụng Công cụ AI 🤖

### ℹ️ Thông báo về việc sử dụng AI

**Tôi nhờ AI hỗ trợ để tạo file README.md này**

#### Công cụ đã sử dụng:
- **GitHub Copilot** (Claude Haiku 4.5)

#### Mục đích sử dụng:
- Tạo ra một file README.md hoàn chỉnh và chuyên nghiệp
- Tổ chức và trình bày thông tin về các lab một cách rõ ràng
- Đảm bảo README bao gồm tất cả các thông tin cần thiết theo yêu cầu

#### Phần nào được AI hỗ trợ:
- **80% nội dung README.md** được AI tạo ra, bao gồm:
  - Cấu trúc và định dạng Markdown
  - Danh sách các lab và mô tả
  - Hướng dẫn cách chạy chương trình
  - Bảng tham khảo MongoDB commands
  - Phần tình trạng hoàn thành
  - Tất cả các phần mô tả và hướng dẫn

#### Phần nào được sinh viên tự làm:
- **Lab 01: Lab1_23520240.mongodb.js** - Viết toàn bộ MongoDB script
- **Thông tin sinh viên** - Cung cấp dữ liệu cá nhân
- **Quyết định nội dung** - Xác định yêu cầu và nội dung cần có


**Cập nhật:** 03/03/2026  
**Trạng thái:** 1/6 labs ✅

*Sinh viên: Bùi Công Danh (23520240) - IE213.Q21*