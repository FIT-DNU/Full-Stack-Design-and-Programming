# HƯỚNG DẪN CÀI ĐẶT MÔI TRƯỜNG VUEJS

Tài liệu này hướng dẫn chi tiết cách thiết lập môi trường phát triển **VueJS** sử dụng **NodeJS và Vite** để tạo project mới.

---

## 1. Cài đặt NodeJS

VueJS cần môi trường runtime là **NodeJS**, vì vậy đây là bước bắt buộc trước khi tạo project.

### Các bước thực hiện:

1. Truy cập trang tải NodeJS:

```
https://nodejs.org/en/download
```

2. Chọn phiên bản:

* Khuyến nghị: **LTS (Long Term Support)**
* Không nên chọn phiên bản Current nếu chưa có kinh nghiệm.

3. Mở file cài đặt và nhấn:

```
Next → Next → Finish
```

Giữ nguyên cấu hình mặc định.

---

## 2. Kiểm tra cài đặt NodeJS và npm

Sau khi cài đặt, mở **Terminal / Command Prompt** và chạy:

```bash
node -v
```

Nếu hiển thị version (ví dụ `v20.x.x`) → cài đặt thành công.

Tiếp tục kiểm tra npm:

```bash
npm -v
```

---

## 3. Tạo project VueJS bằng Vite

Hiện nay Vue khuyến nghị sử dụng **Vite** vì tốc độ nhanh và cấu hình nhẹ.

Chạy lệnh sau:

```bash
npm create vue@latest
```

Hoặc:

```bash
npm create vite@latest
```

### Khi CLI hỏi:

* Nhập tên project
* Chọn framework: **Vue**
* Chọn TypeScript nếu cần

---

## 4. Cài dependencies và chạy project

Di chuyển vào thư mục project:

```bash
cd ten-project
```

Cài các thư viện cần thiết:

```bash
npm install
```

Chạy server phát triển:

```bash
npm run dev
```

Mở trình duyệt tại:

```
http://localhost:5173
```

Nếu thấy giao diện Vue → môi trường đã setup thành công.

---

## Các lỗi thường gặp và Cách khắc phục

### 1. Không nhận lệnh node hoặc npm

**Nguyên nhân:** NodeJS chưa được thêm vào biến môi trường PATH hoặc terminal chưa được khởi động lại.

**Cách sửa:**

* Đóng và mở lại Terminal
* Hoặc restart máy

---

### 2. Port bị trùng

**Thông báo:** *Address already in use*

**Cách sửa:** Chạy project với port khác:

```bash
npm run dev -- --port 3000
```

---

### 3. Lỗi thiếu dependencies

**Thông báo:** *Cannot find module*

**Nguyên nhân:** Chưa chạy `npm install`.

**Cách sửa:**

```bash
npm install
```

---

> **Mẹo nhỏ:** Luôn sử dụng phiên bản **NodeJS LTS ổn định** để tránh lỗi tương thích khi cài Vue hoặc các thư viện frontend khác.
