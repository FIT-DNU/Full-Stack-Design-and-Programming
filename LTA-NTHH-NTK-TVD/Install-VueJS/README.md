# HƯỚNG DẪN CÀI ĐẶT MÔI TRƯỜNG PHÁT TRIỂN VUEJS (VITE)

Tài liệu này hướng dẫn sinh viên thiết lập môi trường phát triển **VueJS hiện đại** sử dụng **NodeJS và Vite** để tạo và chạy ứng dụng frontend.

Mục tiêu sau khi hoàn thành:

* Cài đặt thành công NodeJS và npm
* Tạo được Vue project bằng Vite
* Hiểu cấu trúc project Vue cơ bản
* Chạy được dev server và bắt đầu phát triển component

---

## 1. Yêu cầu trước khi bắt đầu (Prerequisites)

Sinh viên cần đảm bảo:

* Biết sử dụng Terminal / Command Prompt cơ bản
* Đã cài Git
* Đã cài VS Code hoặc IDE tương đương
* Hiểu khái niệm package manager (npm)

---

## 2. Cài đặt NodeJS

VueJS cần runtime là **NodeJS** để quản lý package và chạy dev server.

### Bước 1: Tải NodeJS

Truy cập:

```text
https://nodejs.org/en/download
```

Chọn phiên bản:

* Khuyến nghị: **LTS (Long Term Support)**
* Không nên dùng bản Current trong môi trường học tập / đồ án.

---

### Bước 2: Kiểm tra cài đặt

Mở Terminal và chạy:

```bash
node -v
npm -v
```

Nếu hiển thị version → cài đặt thành công.

---

## 3. Tạo Vue Project bằng Vite

### Vì sao dùng Vite thay Vue CLI?

Vue CLI đang dần ít được sử dụng trong các project mới.

Vite được chọn vì:

* Dev server khởi động cực nhanh (ES Module native)
* Hot Module Replacement gần như tức thời
* Cấu hình tối giản
* Build production sử dụng Rollup → bundle tối ưu

---

### Tạo project

Chạy lệnh:

```bash
npm create vue@latest
```

Hoặc:

```bash
npm create vite@latest
```

Sau đó chọn:

* Framework: Vue
* Variant: JavaScript hoặc TypeScript

---

## 4. Cài đặt dependencies và chạy dev server

Di chuyển vào thư mục project:

```bash
cd ten-project
```

Cài thư viện:

```bash
npm install
```

Chạy project:

```bash
npm run dev
```

Dev server mặc định chạy tại:

```text
http://localhost:5173
```

---

## 5. Cấu trúc Project Vue cơ bản

Sau khi tạo project, thư mục quan trọng gồm:

```
src/
 ├── assets/        # static files (image, css global)
 ├── components/    # reusable Vue components
 ├── App.vue        # root component
 ├── main.js        # entry point ứng dụng
```

### Vai trò các file chính

* **main.js**

  * Khởi tạo Vue App
  * Mount vào DOM (`#app`)

* **App.vue**

  * Component gốc
  * Chứa layout tổng thể

* **components/**

  * Nơi tạo các UI component độc lập

---

## 6. Workflow phát triển frontend cơ bản với Vue

Quy trình làm bài tập hoặc đồ án:

1. Tạo component mới trong `components/`

Ví dụ:

```
HelloWorld.vue
```

2. Import vào `App.vue`

```javascript
import HelloWorld from './components/HelloWorld.vue'
```

3. Sử dụng component trong template

```html
<HelloWorld />
```

4. Dev server tự reload → kiểm tra trên browser

---

## 7. Build project để deploy

Khi hoàn thành:

```bash
npm run build
```

Output nằm trong:

```
dist/
```

Thư mục này có thể deploy lên:

* Nginx
* Netlify
* Vercel
* ASP.NET Static hosting

---

## Các lỗi thường gặp và Cách khắc phục

### 1. Không nhận lệnh node / npm

Nguyên nhân:

* PATH chưa update
* Terminal chưa restart

Cách sửa:

* Đóng mở lại terminal
* Restart máy

---

### 2. Port đã được sử dụng

Thông báo:

```
Address already in use
```

Cách sửa:

```bash
npm run dev -- --port 3000
```

---

### 3. Lỗi thiếu package

Thông báo:

```
Cannot find module
```

Cách sửa:

```bash
npm install
```

---

> **Mẹo kỹ thuật:** Luôn commit project ngay sau khi tạo bằng Git để dễ rollback khi lỗi dependency hoặc config.
