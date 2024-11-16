const generateHTML = ({ title, name, price, email, Product, sheet, storeUrl, whatsApp, username, description, facebookUrl, logoUrl, descriptionImage1, descriptionImage2, subtitle }) => {
    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
            color: #000;
            position: relative;
            overflow: auto; 
            height: 100vh; 
        }
        .header {
            height: 70px;
            background-color: #fff;
            display: flex;
            align-items: center;
            padding: 0 20px;
            color: #000;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
            color: #000;
            margin-top: 10px;
            animation: fadeIn 0.5s;
        }
        .product-subtitle {
            text-align: center;
            font-size: 20px;
            color: #A2A2A2;
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
            color: rgb(14, 160, 14);
        }
        .order-form {
            direction: rtl;
            margin: 20px;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .order-form input,  .order-form select {
            width: calc(100% - 20px);
            padding: 10px;
            color: #000;
            height: 25px;
            background-color: rgba(0, 0, 0, 0.1);
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: right; 
        }
        .order-form select {
            color: #000;
            height: 45px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            border: none;
            padding: 10px;
            border-radius: 5px;
            appearance: none;
            cursor: pointer;
        }

        .order-form select:focus {
            outline: none;
            box-shadow: 0 0 5px #7a7a7a;
        }

        input::-webkit-input-placeholder,
        select::-webkit-input-placeholder {
            color: #333; 
        }

        input:-moz-placeholder,
        select:-moz-placeholder {
            color: #333;
        }

        input::-moz-placeholder,
        select::-moz-placeholder {
            color: #d3d3d3; 
        }

        input:-ms-input-placeholder,
        select:-ms-input-placeholder {
            color: #333; 
        }

        input::placeholder, select::placeholder {
            color: #333; 
        }
        .order-form button {
            width: 100%;
            padding: 10px;
            background-color: #44DE02;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .float {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            position: fixed;
            width: 100%;
            padding: 20px;
            margin: 0;
            bottom: 0px;
            left: 0;
            background-color: #fff;
            color: #000;
            box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
            z-index: 100;
        }
        .float {
            width: 90%;
        }
        .description {
            direction: rtl;
            text-align: rtl;
            font-size: 16px;
            color: #404040;
            margin-top: 20px;
            padding: 20px;
            animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
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
            color: #404040;
            margin-left: 10px;
            font-size: 22px;
        }
        .fab fa-facebook, .fab fa-whatsapp {
            margin: 0 10px;
            text-decoration: none;
            width: 40px;
            color: #fff;
        }
        .fab fa-facebook, .fab fa-whatsapp {
            color: #ff2d55; 
        }
        .success-message {
            display: none; /* Hidden by default */
            color: #2DD393;
            margin-top: 20px;
            text-align: center;
        }
        .spinner {
            display: none; /* Hidden by default */
            margin: 0 auto;
            text-align: center;
        }
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #FE0FA6;
            border-top: 3px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes alarmMotion {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
        .alarm-button { 
            animation: alarmMotion 1s; 
            animation-delay: 2s; 
            animation-iteration-count: infinite;
            padding: 10px 20px; 
            font-size: 16px; 
            background-color: #ff6347; 
            border: none; 
            color: white; cursor: pointer; 
            border-radius: 5px; 
        }
    </style>
</head>
<body>
    <div class="header">
        <h3>${name}</h3>
        <img src="${logoUrl}" alt="TikTok Logo">
    </div>
    <a href="${Product}" target="_blank" rel="noopener noreferrer">
        <img src="${Product}" alt="${title}" class="product-image">
    </a>
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
    <form class="order-form" id="orderForm" method="post" action="${sheet}">
    <h3>نموذج الطلب</h3>
    <input name="name" type="text" placeholder="الاسم" required>
    <input name="phone" type="tel" placeholder="رقم الهاتف" required>
    
    <label for="wilaya">اختر الولاية:</label>
    <select name="wilaya" id="wilaya" required>
        <option value="" selected disabled>اختر ولاية</option>
        <option value="01. Adrar">أدرار</option>
        <option value="02. Chlef">الشلف</option>
        <option value="03. Laghouat">الأغواط</option>
        <option value="04. Oum El Bouaghi">أم البواقي</option>
        <option value="05. Batna">باتنة</option>
        <option value="06. Bejaia">بجاية</option>
        <option value="07. Biskra">بسكرة</option>
        <option value="08. Bechar">بشار</option>
        <option value="09. Blida">البليدة</option>
        <option value="10. Bouira">البويرة</option>
        <option value="11. Tamanrasset">تمنراست</option>
        <option value="12. Tebessa">تبسة</option>
        <option value="13. Tlemcen">تلمسان</option>
        <option value="14. Tiaret">تيارت</option>
        <option value="15. Tizi Ouzou">تيزي وزو</option>
        <option value="16. Alger">الجزائر</option>
        <option value="17. Djelfa">الجلفة</option>
        <option value="18. Jijel">جيجل</option>
        <option value="19. Setif">سطيف</option>
        <option value="20. Saida">سعيدة</option>
        <option value="21. Skikda">سكيكدة</option>
        <option value="22. Sidi Bel Abbes">سيدي بلعباس</option>
        <option value="23. Annaba">عنابة</option>
        <option value="24. Guelma">قالمة</option>
        <option value="25. Constantine">قسنطينة</option>
        <option value="26. Medea">المدية</option>
        <option value="27. Mostaganem">مستغانم</option>
        <option value="28. M'Sila">المسيلة</option>
        <option value="29. Mascara">معسكر</option>
        <option value="30. Ouargla">ورقلة</option>
        <option value="31. Oran">وهران</option>
        <option value="32. El Bayadh">البيض</option>
        <option value="33. Illizi">إليزي</option>
        <option value="34. Bordj Bou Arreridj">برج بوعريريج</option>
        <option value="35. Boumerdes">بومرداس</option>
        <option value="36. El Tarf">الطارف</option>
        <option value="37. Tindouf">تندوف</option>
        <option value="38. Tissemsilt">تيسمسيلت</option>
        <option value="39. El Oued">الوادي</option>
        <option value="40. Khenchela">خنشلة</option>
        <option value="41. Souk Ahras">سوق أهراس</option>
        <option value="42. Tipaza">تيبازة</option>
        <option value="43. Mila">ميلة</option>
        <option value="44. Ain Defla">عين الدفلى</option>
        <option value="45. Naama">النعامة</option>
        <option value="46. Ain Temouchent">عين تموشنت</option>
        <option value="47. Ghardaia">غرداية</option>
        <option value="48. Relizane">غليزان</option>
        <option value="49. Timimoun">تيميمون</option>
        <option value="50. Bordj Badji Mokhtar">برج باجي مختار</option>
        <option value="51. Ouled Djellal">أولاد جلال</option>
        <option value="52. Beni Abbes">بني عباس</option>
        <option value="53. In Salah">عين صالح</option>
        <option value="54. In Guezzam">عين قزام</option>
        <option value="55. Touggourt">تقرت</option>
        <option value="56. Djanet">جانت</option>
        <option value="57. El M'Ghair">المغير</option>
        <option value="58. El Meniaa">المنيعة</option>
    </select>    

    <label for="comune">اختر البلدية:</label>
    <select name="comune" id="comune" required>
        <option value="" selected disabled>اختر بلدية</option>
    </select>

    <p>سعر التوصيل 🚚 <span style="background-color: #44DE02; padding: 5px; border-radius: 3px;" id="delivery-price">اختر ولاية</span> د.ج</p>
    <button type="submit">أرسل الطلب</button>
    <div class="spinner" id="spinner">
        <div class="loading"></div>
    </div>
    <div class="success-message" id="successMessage">تمت العملية بنجاح!</div>
    <div class="float">
        <a href="https://wa.me/213${whatsApp.startsWith('0') ? whatsApp.slice(1) : whatsApp}" target="_blank"  style="margin: 0 10px; width: 40px; text-decoration: none; color: #4CD3AA;">
            <i class="fab fa-whatsapp"></i>
        </a>
        <button type="submit" class="alarm-button">أرسل الطلب</button>
    </div>
</form>
    <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1731016026/OrderDescription_kfr8l4.svg" alt="dsc"></img>
    <div class="description">${description}</div> 
    <br>
    <br>
    <br>
    <a href="${Product}" target="_blank" rel="noopener noreferrer">
    <img class="product-image" style="width: 80%; height: auto; border-radius: 10px;" src="${descriptionImage1}" alt="Description 1">
    </a>
    <br>
    <br>
    <a href="${Product}" target="_blank" rel="noopener noreferrer">
    <img class="product-image" style="width: 80%; height: auto; border-radius: 10px;" src="${descriptionImage2}" alt="Description 2">
    </a>
    <br>
    <br>
    <br>
    <!-- Background TikTok logos -->
    <img src="${logoUrl}" class="vector vector1" alt="TikTok Logo Background 1">
    <img src="${logoUrl}" class="vector vector2" alt="TikTok Logo Background 2">
    <img src="${logoUrl}" class="vector vector3" alt="TikTok Logo Background 3">
    <img src="${logoUrl}" class="vector vector4" alt="TikTok Logo Background 4">
    <img src="${logoUrl}" class="vector vector5" alt="TikTok Logo Background 5">
    <script>
    const communes = {
    "01. Adrar": ["Adrar", "Tamest", "Charouine", "Reggane", "In Zghmir", "Titt", "Qasr Kadour", "Tsabit", "Timimoun", "Ouled Said", "Zaouia Kounta"],
        "02. Chlef": ["Chlef", "Ténès", "Benairia", "El Karimia", "Tadjena", "Taougrite", "Beni Haoua", "Sobha", "Harchoun", "Ouled Fares"],
        "03. Laghouat": ["Laghouat", "Ksar El Hirane", "Ben Nacer Ben Chohra", "Sidi Makhlouf", "Hassi Delaa", "Hassi R'Mel", "Ain Madhi"],
        "04. Oum El Bouaghi": ["Oum El Bouaghi", "Ain Beida", "Souk Naamane", "Ain Fekroun", "Ain Babouche", "Sigus", "El Amiria"],
        "05. Batna": ["Batna", "Ain Touta", "Merouana", "El Guezar", "Arris", "Berriane", "N'Gaous", "Theniet El Abed"],
        "06. Bejaia": ["Bejaia", "Aokas", "Tazmalt", "Souk El Tenine", "Tichy", "Amizour", "Darguina", "Sidi Aich"],
        "07. Biskra": ["Biskra", "El Kantara", "Tolga", "Zeribet El Oued", "Ouled Djellal", "El Outaya", "Sidi Khaled", "M'Chounech"],
        "08. Bechar": ["Bechar", "Lahmar", "Beni Ounif", "Taghit", "Igli", "Abadla", "Ksabi"],
        "09. Blida": ["Blida", "Boufarik", "Beni Tamou", "Bougara", "Ouled Yaich", "Chréa", "Mouzaïa", "El Affroun"],
        "10. Bouira": ["Bouira", "Sour El Ghozlane", "Bordj Okhriss", "Kadiria", "El Hachimia", "Djebahia", "Haizer"],
        "11. Tamanrasset": ["Tamanrasset", "In Guezzam", "Tazrouk", "In Salah", "Inghar", "Ablessa"],
        "12. Tebessa": ["Tebessa", "Cheria", "Marsa Ben M'Hidi", "El Ma El Abiodh", "Boukhadra", "Kouif", "El Ouenza"],
        "13. Tlemcen": ["Tlemcen", "Remchi", "Ghazaouet", "Maghnia", "Honaine", "Ain Tallout", "Beni Snous", "Sebdou"],
        "14. Tiaret": ["Tiaret", "Mahdia", "Frenda", "Ain Deheb", "Rahouia", "Mechraa Sfa", "Guertoufa", "Zmalet El Emir Abdelkader"],
        "15. Tizi Ouzou": ["Tizi Ouzou", "Azazga", "Boghni", "Dra El Mizan", "Makouda", "Tizi Ghenif", "Beni Douala", "Beni Yenni"],
        "16. Alger": ["Algiers Centre", "Bab El Oued", "Kouba", "Hussein Dey", "El Madania", "El Harrach", "Bir Mourad Rais", "El Biar"],
        "17. Djelfa": ["Djelfa", "Ain Oussera", "Hassi Bahbah", "Messad", "Sidi Ladjel", "Guettara", "Birine", "Dar Chioukh"],
        "18. Jijel": ["Jijel", "El Milia", "Taher", "Chekfa", "Ziamat", "Settara", "El Ancer", "Ouled Rabah"],
        "19. Setif": ["Setif", "El Eulma", "Ain Arnat", "Bouandas", "Beni Aziz", "Beidha Bordj", "Beni Oussine", "Beni Chebana"],
        "20. Saida": ["Saida", "Ain Lahdjar", "Bouktoub", "Doui Thabet", "Ouled Brahim", "Sidi Ahmed"],
        "21. Skikda": ["Skikda", "El Harrouch", "Tamalous", "Sidi Mechreg", "Collo", "Ben Azzouz", "Zitouna", "Ramdan Djamel"],
        "22. Sidi Bel Abbes": ["Sidi Bel Abbes", "Telagh", "Ain Thrid", "Sfisef", "Ras El Ma", "Ain Tindamine", "M'Cid"],
        "23. Annaba": ["Annaba", "El Hadjar", "Berrahal", "Ain Berda", "El Bouni", "Chetaibi"],
        "24. Guelma": ["Guelma", "Oued Zenati", "Hammam Debagh", "Nechmaya", "Ain Sandel", "Medjez Amar", "Bou Hamdane"],
        "25. Constantine": ["Constantine", "Ain Smara", "Didouche Mourad", "Ibn Ziad", "El Khroub", "Zighoud Youcef"],
        "26. Medea": ["Medea", "El Omaria", "Ouzera", "Ksar El Boukhari", "Berrouaghia", "Ouled Antar", "Chahbounia"],
        "27. Mostaganem": ["Mostaganem", "Ain Nouicy", "Mazagran", "Hassi Mamoucha", "Mesra", "Stidia"],
        "28. M'Sila": ["M'Sila", "Bousaada", "Ain El Melh", "Djebel Messaad", "Oultene", "Maadid", "Belaiba"],
        "29. Mascara": ["Mascara", "Ain Faras", "Ain Fares", "Bouhanifia", "El Gaada", "Hacine"],
        "30. Ouargla": ["Ouargla", "Touggourt", "El Borma", "M'Naguer", "Taibet", "Nezla"],
        "31. Oran": ["Oran", "Es Senia", "Hassi Mefsoukh", "Ain El Turk", "Boutlelis", "Bousfer", "Gdyel", "Mers El Kebir"],
        "32. El Bayadh": ["El Bayadh", "Brezina", "El Kheither", "Boualem", "Sidi Slimane"],
        "33. Illizi": ["Illizi", "In Amenas", "Debdeb", "Gassi Touil"],
        "34. Bordj Bou Arreridj": ["Bordj Bou Arreridj", "El Achir", "Djaafra", "Bordj Zemmoura", "Ras El Oued", "Medjana"],
        "35. Boumerdes": ["Boumerdes", "Boudouaou", "Dellys", "Zemmouri", "Si Mustapha", "Chabet El Ameur", "Tidjelabine"],
        "36. El Tarf": ["El Tarf", "Besbes", "El Kala", "Bouteldja", "Bouhadjar", "Chatt", "Ain Kerma"],
        "37. Tindouf": ["Tindouf", "Oum El Assel"],
        "38. Tissemsilt": ["Tissemsilt", "Lardjem", "Bordj Emir Abdelkader", "Theniet El Had"],
        "39. El Oued": ["El Oued", "Robbah", "Guemar", "Magrane", "Hassi Khalifa", "Debila"],
        "40. Khenchela": ["Khenchela", "Babar", "Kais", "M'Toussa", "Chelia", "Ouled Rechache"],
        "41. Souk Ahras": ["Souk Ahras", "Sidi Fredj", "Ouled Driss", "Mechrouha", "M'Daourouch"],
        "42. Tipaza": ["Tipaza", "Cherchell", "Gouraya", "Bou Ismail", "Hadjout", "Ahmer El Ain"],
        "43. Mila": ["Mila", "Telerghma", "Sidi Merouane", "Grarem Gouga", "Oued Seguen", "Ferdjioua"],
        "44. Ain Defla": ["Ain Defla", "Miliana", "El Abadia", "Khemis Miliana", "Hammam Righa"],
        "45. Naama": ["Naama", "Ain Sefra", "Sfissifa", "Mekmen Ben Amar"],
        "46. Ain Temouchent": ["Ain Temouchent", "El Malah", "Oulhaça", "Hammam Bou Hadjar", "Sidi Safi"],
        "47. Ghardaia": ["Ghardaia", "El Meniaa", "Berriane", "Metlili", "Sebseb"],
        "48. Relizane": ["Relizane", "Mazouna", "Oued Rhiou", "Sidi M'Hamed Ben Ali", "Zemmoura", "El Matmar"],
        "49. Timimoun": ["Timimoun", "Ouled Said", "Charouine", "Tinerkouk"],
        "50. Bordj Badji Mokhtar": ["Bordj Badji Mokhtar", "Tamanrasset", "In Guezzam"],
        "51. Ouled Djellal": ["Ouled Djellal", "Sidi Khaled", "Doucen", "Ras El Miad"],
        "52. Beni Abbas": ["Beni Abbas", "Tabelbala", "El Ouata", "Kerzaz"],
        "53. In Salah": ["In Salah", "Foggaret Ezzoua", "Hassi Lahdjar", "In Ghar"],
        "54. In Guezzam": ["In Guezzam", "Ablessa", "Tamanrasset"],
        "55. Touggourt": ["Touggourt", "M'Naguer", "Nezla", "Temacine", "Taibet", "El Hadjira"],
        "56. Djanet": ["Djanet", "Illizi", "Bordj El Haoues"],
        "57. El M'Ghair": ["El M'Ghair", "Oum Touyour", "Sidi Amrane", "Sidi Khouiled"],
        "58. El Meniaa": ["El Meniaa", "Hassi Gara", "Hassi Lahdjar", "Zelda"]
      };

    const wilayaSelect = document.getElementById('wilaya');
    const comuneSelect = document.getElementById('comune');
    const deliveryPriceSpan = document.getElementById('delivery-price');

    const deliveryPrices = {
  "01. Adrar": 800,
  "02. Chlef": 400,
  "03. Laghouat": 600,
  "04. Oum El Bouaghi": 400,
  "05. Batna": 400,
  "06. Bejaia": 400,
  "07. Biskra": 600,
  "08. Bechar": 800,
  "09. Blida": 300,
  "10. Bouira": 400,
  "11. Tamanrasset": 1000,
  "12. Tebessa": 600,
  "13. Tlemcen": 400,
  "14. Tiaret": 400,
  "15. Tizi Ouzou": 400,
  "16. Alger": 0,
  "17. Djelfa": 600,
  "18. Jijel": 400,
  "19. Setif": 400,
  "20. Saida": 400,
  "21. Skikda": 400,
  "22. Sidi Bel Abbes": 400,
  "23. Annaba": 400,
  "24. Guelma": 400,
  "25. Constantine": 400,
  "26. Medea": 400,
  "27. Mostaganem": 400,
  "28. M'Sila": 400,
  "29. Mascara": 400,
  "30. Ouargla": 600,
  "31. Oran": 400,
  "32. El Bayadh": 600,
  "33. Illizi": 1200,
  "34. Bordj Bou Arreridj": 400,
  "35. Boumerdes": 300,
  "36. El Tarf": 400,
  "37. Tindouf": 1000,
  "38. Tissemsilt": 400,
  "39. El Oued": 600,
  "40. Khenchela": 400,
  "41. Souk Ahras": 400,
  "42. Tipaza": 300,
  "43. Mila": 400,
  "44. Ain Defla": 400,
  "45. Naama": 600,
  "46. Ain Temouchent": 400,
  "47. Ghardaia": 600,
  "48. Relizane": 400,
  "49. Timimoun": 800,
  "50. Bordj Badji Mokhtar": 0,
  "51. Ouled Djellal": 600,
  "52. Beni Abbas": 0,
  "53. In Salah": 1000,
  "54. In Guezzam": 0,
  "55. Touggourt": 600,
  "56. Djanet": 0,
  "57. El M'Ghair": 600,
  "58. El Meniaa": 600
};

    wilayaSelect.addEventListener('change', function() {
        const selectedWilaya = this.value;
        // Clear the communes dropdown
        comuneSelect.innerHTML = '<option value="">اختر بلدية</option>';
        // Populate communes based on the selected wilaya
        if (communes[selectedWilaya]) {
            communes[selectedWilaya].forEach(comune => {
                const option = document.createElement('option');
                option.value = comune;
                option.textContent = comune;
                comuneSelect.appendChild(option);
            });
            // Update delivery price
            deliveryPriceSpan.textContent = deliveryPrices[selectedWilaya] || '0';
        } else {
            deliveryPriceSpan.textContent = '0'; // Reset price if no wilaya is selected
        }
    });
    document.getElementById('orderForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            document.getElementById('spinner').style.display = 'block'; // Show spinner
            document.getElementById('successMessage').style.display = 'none'; // Hide success message

            // Submit the form using fetch
            fetch(this.action, {
                method: this.method,
                body: new FormData(this),
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('spinner').style.display = 'none'; // Hide spinner
                document.getElementById('successMessage').style.display = 'block'; // Show success message
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('spinner').style.display = 'none'; // Hide spinner
                alert('حدث خطأ أثناء معالجة الطلب.'); // Show error message
            });
        });
</script>
</body>
<footer style="background-color: #fff; padding: 20px; text-align: center; color: #000;">
  <div style="margin-bottom: 10px;">
    <!-- Logo -->
    <a href="${logoUrl}" target="_blank" rel="noopener noreferrer">
      <img src="${logoUrl}" alt="Logo" style="height: 50px;">
    </a>
  </div>

  <div style="margin-bottom: 20px;">
    <!-- Social Media Links -->
    <a href="${facebookUrl}" target="_blank" style="margin: 0 10px; text-decoration: none; width: 40px; color: #000;">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://wa.me/213${whatsApp.startsWith('0') ? whatsApp.slice(1) : whatsApp}" target="_blank"  style="margin: 0 10px; width: 40px; text-decoration: none; color: #000;">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="mailto:${email}" style="margin: 0 10px; text-decoration: none; color: #000;">
      Email
    </a>
  </div>

  <div style="margin-bottom: 10px;">
    <!-- Store Link -->
    <a href="${storeUrl}" target="_blank" style="text-decoration: none;">
      Visit Our Store
    </a>
  </div>

  <p style="color: #888888; font-size: 12px;">&copy; ${new Date().getFullYear()} ${username}. All rights reserved.</p>
</footer>
<br>
<br>
<br>
<br>
<br>
</html>
    `;
  };
  
  export default generateHTML;
  