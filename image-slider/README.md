# Image Slider Project

## Overview
This is a simple **image slider/carousel** built using **HTML, JavaScript, and Tailwind CSS**.  
Users can navigate through multiple images using **Next** and **Previous** buttons. The slider loops continuously at the start and end.

---

## Features
- Navigate images using **Next** (`▶`) and **Previous** (`◀`) buttons.
- Loops automatically when reaching the **first or last image**.
- Simple and clean design using **Tailwind CSS**.
- Fully functional without any external libraries except Tailwind.

---

## Files
- `index.html` → main HTML file containing the slider structure.  
- `script.js` → JavaScript file controlling the slider functionality.  
- `image/` → folder containing all slider images.  
- `README.md` → this file.

---

## How to Use
1. Open `index.html` in a web browser.
2. Click the **Next** button (`▶`) to go forward.
3. Click the **Previous** button (`◀`) to go backward.
4. The slider loops automatically when reaching the first or last image.

---

## Code Explanation

### Image Array
```js
const image = ["../image/img1.jpg", "../image/img2.jpg", "../image/img3.jpg", "../image/img4.jpg"];
