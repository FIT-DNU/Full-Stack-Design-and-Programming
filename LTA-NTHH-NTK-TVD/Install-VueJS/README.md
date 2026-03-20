# Hướng dẫn cài đặt môi trường VueJS

Tài liệu này hướng dẫn cách cài đặt môi trường cần thiết để bắt đầu phát triển ứng dụng bằng **VueJS**.

## 1. Cài đặt NodeJS

VueJS chạy trên môi trường JavaScript runtime là **NodeJS**, vì vậy đây là bước bắt buộc đầu tiên.

### Bước 1: Tải NodeJS

Truy cập trang chính thức:

👉 [https://nodejs.org/en/download](https://nodejs.org/en/download)

Chọn phiên bản:

* Khuyến nghị: **LTS (Long Term Support)**
* Không nên chọn phiên bản Current nếu chưa có kinh nghiệm

### Bước 2: Cài đặt

* Mở file vừa tải về
* Nhấn **Next → Next → Finish** theo mặc định
* Không cần thay đổi cấu hình nếu chưa hiểu rõ

### Bước 3: Kiểm tra cài đặt

Mở Terminal / Command Prompt và chạy:

```bash
node -v
```

Nếu hiển thị version (ví dụ: `v20.11.0`) → cài đặt thành công.

Kiểm tra thêm npm:

```bash
npm -v
```

---

## 2. Cài Vue CLI hoặc Vite (Khuyến nghị dùng Vite)

Hiện nay VueJS khuyến nghị dùng **Vite** để tạo project vì nhanh và nhẹ hơn Vue CLI.

### Tạo project Vue bằng Vite

Chạy lệnh:

```bash
npm create vue@latest
```

Hoặc:

```bash
npm create vite@latest
```

Sau đó:

* Nhập tên project
* Chọn framework: **Vue**
* Chọn TypeScript nếu cần

---

## 3. Chạy project Vue

Di chuyển vào thư mục project:

```bash
cd ten-project
```

Cài dependencies:

```bash
npm install
```

Chạy server:

```bash
npm run dev
```

Mở trình duyệt tại:

```
http://localhost:5173
```

Nếu thấy giao diện Vue → môi trường đã setup thành công.

---

## 4. Một số lỗi thường gặp

### Không nhận lệnh node / npm

Nguyên nhân: chưa add vào PATH hoặc chưa restart terminal.

Cách xử lý:

* Đóng và mở lại terminal
* Hoặc restart máy

### Port bị trùng

Có thể đổi port:

```bash
npm run dev -- --port 3000
```

