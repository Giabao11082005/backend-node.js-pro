# 🧠Learning Backend NodeJS Pro

Dự án học lập trình Backend sử dụng **Node.js** + **Express.js** kết nối với **MongoDB** và **MySQL**. Ngoài ra còn tích hợp với **TypeScript**, **Prisma**, **Mongoose** và các công cụ khác như **VsCode**, **Postman** để phát triển 1 cách chuyên nghiệp

---

## 💻Language + Framework + Tools

- **Ngôn ngữ:** JavaScript, TypeScript
- **Framework + Runtime:** Node.js, Express.js
- **Front-end** React, HTML, CSS
- **Cơ sở dữ liệu:** MongoDB (Mongoose), MySQL (Prisma)
- **Công cụ:** VsCode, Postman
- **Công cụ hướng đến:** Docker, Swagger, Logger, ...

---

## 🚀Hướng dẫn sử dụng dự án

### Bước 1: Tạo thư mục và khởi tạo dự án

```bash
mkdir <ten-thu-muc>
cd <ten-thu-muc>
code .
```

### Bước 2: Cài package cơ bản

```bash
  npm init -y                     #Khởi tạo package.json
  npm install express             #Cài Express
  npm install --save-dev nodemon  #Hỗ trợ chạy tự động không bật lại server
```

### Bước 3: Cài TypeScript và type hỗ trợ

```bash
npm install --save-dev typescript@5.8.0 @types/express@5.0.3 @types/node@24.0.13
```

### Bước 4: Khởi tạo cấu hình TypeScript

```bash
npx tsc --init
Trong file **config.json**, cập nhật lại:
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src",
    "skipLibCheck": true}
  }
```

### Bước 5: Cấu hình script trong package.json và file cấu hình đi kèm

```bash
file package.json thêm đoạn mã sau:
"scripts": {
  "dev": "tsc && node dist/app.js",
  "start": "tsc && node dist/app.js",
  "build": "tsc" }

```

---

### Chạy dự án:

**npm run dev**

---

### Ghi chú thêm:

Dự án đang hoàn thiện dần dần và sẽ update nhanh nhất có Dự án đang trong giai đoạn xây dựng và hoàn thiện dần. Mục tiêu là giúp bạn nắm được kiến thức nền tảng về Backend bằng cách thực hành từng bước, sau đó mở rộng dần

Dự án hướng đến sự chuyên nghiệp và thương mại hóa trong tương lai gần với các công nghệ:
Docker: đóng gói môi trường phát triển
Swagger: tài liệu hóa API
Logger: ghi log hiệu quả (Morgan, Winston)
Phân tầng module: rõ ràng, dễ bảo trì

---

### Tài liệu tham khảo:

[https://nodejs.org/en/docs](Node.js Docs)
[https://expressjs.com/](.js Docs)
[https://www.typescriptlang.org/docs/](TypeScript Docs)
[https://mongoosejs.com/](Mongoose Docs)
[https://www.prisma.io/docs](Prisma Docs)
