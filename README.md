# 📁 File Metadata Microservice

This is a full-stack JavaScript application built for the FreeCodeCamp **APIs and Microservices Certification**.

It allows users to upload a file and returns metadata such as:
- File name
- File type
- File size

---

## 🚀 Live Demo

👉 [Click here to view live project](https://caa5e0d1-f233-43d4-abb8-d25ea1133494-00-yir76p0skqx1.sisko.replit.dev/)

---

## 📌 Project Objective

Build a File Metadata Microservice similar to:
[https://file-metadata-microservice.freecodecamp.rocks](https://file-metadata-microservice.freecodecamp.rocks)

The main purpose is to handle file uploads and return file information in JSON format.

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- Multer (for file uploading)
- JavaScript (ES6)
- HTML / CSS

---

## 📡 API Endpoint

### POST `/api/fileanalyse`

Upload a file to get metadata response.

### 📥 Example Response:
```json
{
  "name": "example.png",
  "type": "image/png",
  "size": 24567
}
