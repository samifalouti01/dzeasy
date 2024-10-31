const generateHTML = ({ title, name, price, email, Product, sheet, storeUrl, whatsApp, username, description, facebookUrl, logoUrl, descriptionImage1, descriptionImage2, subtitle }) => {
  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #fff;
            position: relative;
            overflow: auto; /* Enable scrolling */
            height: 100vh; /* Allow the body to take full height */
        }
        .header {
            height: 70px;
            background-color: #000;
            display: flex;
            align-items: center;
            padding: 0 20px;
            color: #fff;
            box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
            z-index: 1; 
            justify-content: flex-end; 
            flex-direction: row;
        }
        .header img {
            height: 50px;
            margin-left: 10px;
        }
        .product-image {
            display: block;
            margin: 20px auto;
            max-height: 50%; 
            height: auto; 
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
        }
        /* Responsive styles */
        @media (min-width: 768px) {
            .product-image {
                max-width: 25%; /* Max width for desktop */
            }
        }
        @media (max-width: 767px) {
            .product-image {
                max-width: 80%; /* Max width for mobile */
            }
        }
        .product-title {
            text-align: center;
            font-size: 20px;
            color: #ff2d55;
            margin-top: 10px;
            animation: fadeIn 0.5s;
        }
        .product-subtitle {
            text-align: center;
            font-size: 20px;
            color: #aaa;
            animation: fadeIn 0.5s;
        }
        .product-price {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: bold;
            color: green;
        }
        .order-form {
            direction: rtl;
            margin: 20px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
        }
        .order-form input {
            width: calc(100% - 20px);
            padding: 10px;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: right; 
        }
        .order-form button {
            width: 100%;
            padding: 10px;
            background-color: #ff2d55;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .order-form button:hover {
            background-color: #d62245;
        }
        .description {
            direction: rtl;
            text-align: rtl;
            font-size: 16px;
            color: #aaa;
            margin-top: 20px;
            padding: 20px;
            animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        /* Vector graphics styles */
        .vector {
            position: absolute;
            opacity: 0.2; /* Adjusted opacity */
            z-index: -1;
            filter: blur(5px);
        }
        /* Different sizes and positions for background logos */
        .vector1 {
            width: 150px; /* Larger size */
            height: 150px;
            top: 5%;
            right: 5%; /* Change to right for RTL */
        }
        .vector2 {
            width: 100px;
            height: 100px;
            bottom: 10%;
            left: 5%; /* Change to left for RTL */
        }
        .vector3 {
            width: 80px; /* Smaller size */
            height: 80px;
            top: 15%;
            left: 20%;
        }
        .vector4 {
            width: 120px; /* Medium size */
            height: 120px;
            bottom: 20%;
            right: 15%; /* Change to right for RTL */
        }
        .vector5 {
            width: 60px; /* Smaller size */
            height: 60px;
            top: 25%;
            left: 50%;
        }
            .regular-price {
            text-decoration: line-through;
            color: #999;
            margin-left: 10px;
            font-size: 22px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h3>${name}</h3>
        <img src="${logoUrl}" alt="TikTok Logo">
    </div>
    <img src="${Product}" alt="${title}" class="product-image">
    <h2 class="product-title">${title}</h2>
    <h3 class="product-subtitle">${subtitle}</h3>
    <div class="product-price"><span>${price} د.ج</span><span class="regular-price">${(price * 1.2).toFixed(2)} د.ج</span>
                    </div>
    <div style="width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; height: auto; gap: 10px;">
        <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730247098/Vector_1_bawg0i.svg" alt="star"/>
        <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730247098/Vector_1_bawg0i.svg" alt="star"/>
        <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730247098/Vector_1_bawg0i.svg" alt="star"/>
        <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730247098/Vector_1_bawg0i.svg" alt="star"/>
        <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730247098/Vector_1_bawg0i.svg" alt="star"/>
    </div>
    <form class="order-form" method="post" action="${sheet}">
        <h3>نموذج الطلب</h3>
        <input name="name" type="text" placeholder="الاسم" required>
        <input name="phone" type="tel" placeholder="رقم الهاتف" required>
        <input name="wilaya" type="text" placeholder="ولاية" required>
        <input name="comune" type="text" placeholder="بلدية" required>
        <button type="submit">أرسل الطلب</button>
    </form>
    <div class="description">${description}</div> <!-- Added description -->
    <br>
    <br>
    <br>
    <img class="product-image" style="width: 80%; height: auto; border-radius: 10px;" src="${descriptionImage1}" alt="Description 1">
    <br>
    <br>
    <img class="product-image" style="width: 80%; height: auto; border-radius: 10px;" src="${descriptionImage2}" alt="Description 2">
    <br>
    <br>
    <br>
    <!-- Background TikTok logos -->
    <img src="${logoUrl}" class="vector vector1" alt="TikTok Logo Background 1">
    <img src="${logoUrl}" class="vector vector2" alt="TikTok Logo Background 2">
    <img src="${logoUrl}" class="vector vector3" alt="TikTok Logo Background 3">
    <img src="${logoUrl}" class="vector vector4" alt="TikTok Logo Background 4">
    <img src="${logoUrl}" class="vector vector5" alt="TikTok Logo Background 5">
</body>
<footer style="background-color: #000000; padding: 20px; text-align: center; color: #ffffff;">
  <div style="margin-bottom: 10px;">
    <!-- Logo -->
    <a href="${logoUrl}" target="_blank" rel="noopener noreferrer">
      <img src="${logoUrl}" alt="Logo" style="height: 50px;">
    </a>
  </div>

  <div style="margin-bottom: 20px;">
    <!-- Social Media Links -->
    <a href="${facebookUrl}" target="_blank" rel="noopener noreferrer" style="margin: 0 10px; text-decoration: none; color: #ffffff;">
      Facebook
    </a>
    <a href="https://wa.me/213${whatsApp.startsWith('0') ? whatsApp.slice(1) : whatsApp}" target="_blank" rel="noopener noreferrer" style="margin: 0 10px; text-decoration: none; color: #ffffff;">
      WhatsApp
    </a>
    <a href="mailto:${email}" style="margin: 0 10px; text-decoration: none; color: #ffffff;">
      Email
    </a>
  </div>

  <div style="margin-bottom: 10px;">
    <!-- Store Link -->
    <a href="${storeUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff;">
      Visit Our Store
    </a>
  </div>

  <p style="color: #888888; font-size: 12px;">&copy; ${new Date().getFullYear()} ${username}. All rights reserved.</p>
</footer>

</html>
  `;
};

export default generateHTML;
