# 🔐 React Password Toggle App

A simple and sleek password visibility toggle and clipboard copy app built with **React**. Toggle between password visibility and copy the password securely with a click of a button!

## ✨ Features

- 🔁 Toggle between **password** and **text** fields  
- 📋 Copy password to **clipboard**  
- ⏳ Auto reset after 3 seconds  
- 🧼 Clears input after copy  
- ⚛️ Fully functional React component-based architecture  

---

## 🧩 Component Structure

### src/

─ App.jsx  
─ Components/  
  ├─ Heading.jsx  
  ├─ CopyButton.jsx  
  ├─ Input.jsx  
  └─ Buttons.jsx  

---

## 🚀 How It Works

### `App.jsx`
- Maintains state for:
  - Password visibility (`visible`)
  - Clipboard feedback text (`clipText`)
- Resets UI using `useEffect` after a successful copy.

### `Heading.jsx`
- Displays the app title with a lock icon.

### `Input.jsx`
- Input box for entering password.
- Uses `ref` to access input value directly.
- Includes toggle button from `Buttons.jsx`.

### `Buttons.jsx`
- Eye icon button to toggle between `password` and `text`.

### `CopyButton.jsx`
- Copies password text using `navigator.clipboard.writeText()`.
- Updates UI state on success.
- Alerts if input is empty.

---

## 📦 Installation & Setup

```bash
git clone https://github.com/NomanKhial/Password-Text-Toggle.git
npm install
npm run dev
```



📸 Preview

<img width="1074" height="456" alt="Screenshot from 2025-07-18 16-37-30" src="https://github.com/user-attachments/assets/30254b86-f99f-4ed1-95c9-940c5a782c22" />

### 🔧 Technologies Used
- React
- React Icons
- JavaScript (ES6+)

### ✍️ Author
- Nouman Khial 💻 Computer Science Student | 🚀 Passionate React Developer

### 📜 License
This project is open-source and available under the MIT License.



