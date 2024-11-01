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
        .order-form input,  .order-form select {
            width: calc(100% - 20px);
            padding: 10px;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: right; 
        }
        .order-form select {
            color: #000;
            width: 100%;
            background: linear-gradient(to left, #fff, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
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
            color: #d3d3d3; 
        }

        input:-moz-placeholder,
        select:-moz-placeholder {
            color: #d3d3d3;
        }

        input::-moz-placeholder,
        select::-moz-placeholder {
            color: #d3d3d3; 
        }

        input:-ms-input-placeholder,
        select:-ms-input-placeholder {
            color: #d3d3d3; 
        }

        input::placeholder, select::placeholder {
            color: #d3d3d3; 
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
        .fab fa-facebook, .fab fa-whatsapp {
            margin: 0 10px;
            text-decoration: none;
            width: 40px;
            color: #fff;
        }
        .fab fa-facebook, .fab fa-whatsapp {
            color: #ff2d55; 
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
    
    <label for="wilaya">اختر الولاية:</label>
    <select name="wilaya" id="wilaya" required>
        <option value="" selected disabled>اختر ولاية</option>
        <option value="1">أدرار</option>
        <option value="2">الشلف</option>
        <option value="3">الأغواط</option>
        <option value="4">أم البواقي</option>
        <option value="5">باتنة</option>
        <option value="6">بجاية</option>
        <option value="7">بسكرة</option>
        <option value="8">بشار</option>
        <option value="9">البليدة</option>
        <option value="10">البويرة</option>
        <option value="11">تمنراست</option>
        <option value="12">تبسة</option>
        <option value="13">تلمسان</option>
        <option value="14">تيارت</option>
        <option value="15">تيزي وزو</option>
        <option value="16">الجزائر</option>
        <option value="17">الجلفة</option>
        <option value="18">جيجل</option>
        <option value="19">سطيف</option>
        <option value="20">سعيدة</option>
        <option value="21">سكيكدة</option>
        <option value="22">سيدي بلعباس</option>
        <option value="23">عنابة</option>
        <option value="24">قالمة</option>
        <option value="25">قسنطينة</option>
        <option value="26">المدية</option>
        <option value="27">مستغانم</option>
        <option value="28">المسيلة</option>
        <option value="29">معسكر</option>
        <option value="30">ورقلة</option>
        <option value="31">وهران</option>
        <option value="32">البيض</option>
        <option value="33">إليزي</option>
        <option value="34">برج بوعريريج</option>
        <option value="35">بومرداس</option>
        <option value="36">الطارف</option>
        <option value="37">تندوف</option>
        <option value="38">تيسمسيلت</option>
        <option value="39">الوادي</option>
        <option value="40">خنشلة</option>
        <option value="41">سوق أهراس</option>
        <option value="42">تيبازة</option>
        <option value="43">ميلة</option>
        <option value="44">عين الدفلى</option>
        <option value="45">النعامة</option>
        <option value="46">عين تموشنت</option>
        <option value="47">غرداية</option>
        <option value="48">غليزان</option>
        <option value="49">تيميمون</option>
        <option value="50">برج باجي مختار</option>
        <option value="51">أولاد جلال</option>
        <option value="52">بني عباس</option>
        <option value="53">عين صالح</option>
        <option value="54">عين قزام</option>
        <option value="55">تقرت</option>
        <option value="56">جانت</option>
        <option value="57">المغير</option>
        <option value="58">المنيعة</option>
    </select>    

    <label for="comune">اختر البلدية:</label>
    <select name="comune" id="comune" required>
        <option value="" selected disabled>اختر بلدية</option>
    </select>

    <p>سعر التوصيل: <span style="background-color: rgba(126, 252, 0, 0.522); padding: 5px; border-radius: 3px;" id="delivery-price">اختر ولاية</span> د.ج</p>
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
    <script>
    const communes = {
    '1': ["Adrar", "Tamest", "Charouine", "Reggane", "In Zghmir", "Titt", "Qasr Kadour", "Tsabit", "Timimoun", "Ouled Said", "Zaouia Kounta"],
        '2': ["Chlef", "Ténès", "Benairia", "El Karimia", "Tadjena", "Taougrite", "Beni Haoua", "Sobha", "Harchoun", "Ouled Fares"],
        '3': ["Laghouat", "Ksar El Hirane", "Ben Nacer Ben Chohra", "Sidi Makhlouf", "Hassi Delaa", "Hassi R'Mel", "Ain Madhi"],
        '4': ["Oum El Bouaghi", "Ain Beida", "Souk Naamane", "Ain Fekroun", "Ain Babouche", "Sigus", "El Amiria"],
        '5': ["Batna", "Ain Touta", "Merouana", "El Guezar", "Arris", "Berriane", "N'Gaous", "Theniet El Abed"],
        '6': ["Bejaia", "Aokas", "Tazmalt", "Souk El Tenine", "Tichy", "Amizour", "Darguina", "Sidi Aich"],
        '7': ["Biskra", "El Kantara", "Tolga", "Zeribet El Oued", "Ouled Djellal", "El Outaya", "Sidi Khaled", "M'Chounech"],
        '8': ["Bechar", "Lahmar", "Beni Ounif", "Taghit", "Igli", "Abadla", "Ksabi"],
        '9': ["Blida", "Boufarik", "Beni Tamou", "Bougara", "Ouled Yaich", "Chréa", "Mouzaïa", "El Affroun"],
        '10': ["Bouira", "Sour El Ghozlane", "Bordj Okhriss", "Kadiria", "El Hachimia", "Djebahia", "Haizer"],
        '11': ["Tamanrasset", "In Guezzam", "Tazrouk", "In Salah", "Inghar", "Ablessa"],
        '12': ["Tebessa", "Cheria", "Marsa Ben M'Hidi", "El Ma El Abiodh", "Boukhadra", "Kouif", "El Ouenza"],
        '13': ["Tlemcen", "Remchi", "Ghazaouet", "Maghnia", "Honaine", "Ain Tallout", "Beni Snous", "Sebdou"],
        '14': ["Tiaret", "Mahdia", "Frenda", "Ain Deheb", "Rahouia", "Mechraa Sfa", "Guertoufa", "Zmalet El Emir Abdelkader"],
        '15': ["Tizi Ouzou", "Azazga", "Boghni", "Dra El Mizan", "Makouda", "Tizi Ghenif", "Beni Douala", "Beni Yenni"],
        '16': ["Algiers Centre", "Bab El Oued", "Kouba", "Hussein Dey", "El Madania", "El Harrach", "Bir Mourad Rais", "El Biar"],
        '17': ["Djelfa", "Ain Oussera", "Hassi Bahbah", "Messad", "Sidi Ladjel", "Guettara", "Birine", "Dar Chioukh"],
        '18': ["Jijel", "El Milia", "Taher", "Chekfa", "Ziamat", "Settara", "El Ancer", "Ouled Rabah"],
        '19': ["Setif", "El Eulma", "Ain Arnat", "Bouandas", "Beni Aziz", "Beidha Bordj", "Beni Oussine", "Beni Chebana"],
        '20': ["Saida", "Ain Lahdjar", "Bouktoub", "Doui Thabet", "Ouled Brahim", "Sidi Ahmed"],
        '21': ["Skikda", "El Harrouch", "Tamalous", "Sidi Mechreg", "Collo", "Ben Azzouz", "Zitouna", "Ramdan Djamel"],
        '22': ["Sidi Bel Abbes", "Telagh", "Ain Thrid", "Sfisef", "Ras El Ma", "Ain Tindamine", "M'Cid"],
        '23': ["Annaba", "El Hadjar", "Berrahal", "Ain Berda", "El Bouni", "Chetaibi"],
        '24': ["Guelma", "Oued Zenati", "Hammam Debagh", "Nechmaya", "Ain Sandel", "Medjez Amar", "Bou Hamdane"],
        '25': ["Constantine", "Ain Smara", "Didouche Mourad", "Ibn Ziad", "El Khroub", "Zighoud Youcef"],
        '26': ["Medea", "El Omaria", "Ouzera", "Ksar El Boukhari", "Berrouaghia", "Ouled Antar", "Chahbounia"],
        '27': ["Mostaganem", "Ain Nouicy", "Mazagran", "Hassi Mamoucha", "Mesra", "Stidia"],
        '28': ["M'Sila", "Bousaada", "Ain El Melh", "Djebel Messaad", "Oultene", "Maadid", "Belaiba"],
        '29': ["Mascara", "Ain Faras", "Ain Fares", "Bouhanifia", "El Gaada", "Hacine"],
        '30': ["Ouargla", "Touggourt", "El Borma", "M'Naguer", "Taibet", "Nezla"],
        '31': ["Oran", "Es Senia", "Hassi Mefsoukh", "Ain El Turk", "Boutlelis", "Bousfer", "Gdyel", "Mers El Kebir"],
        '32': ["El Bayadh", "Brezina", "El Kheither", "Boualem", "Sidi Slimane"],
        '33': ["Illizi", "In Amenas", "Debdeb", "Gassi Touil"],
        '34': ["Bordj Bou Arreridj", "El Achir", "Djaafra", "Bordj Zemmoura", "Ras El Oued", "Medjana"],
        '35': ["Boumerdes", "Boudouaou", "Dellys", "Zemmouri", "Si Mustapha", "Chabet El Ameur", "Tidjelabine"],
        '36': ["El Tarf", "Besbes", "El Kala", "Bouteldja", "Bouhadjar", "Chatt", "Ain Kerma"],
        '37': ["Tindouf", "Oum El Assel"],
        '38': ["Tissemsilt", "Lardjem", "Bordj Emir Abdelkader", "Theniet El Had"],
        '39': ["El Oued", "Robbah", "Guemar", "Magrane", "Hassi Khalifa", "Debila"],
        '40': ["Khenchela", "Babar", "Kais", "M'Toussa", "Chelia", "Ouled Rechache"],
        '41': ["Souk Ahras", "Sidi Fredj", "Ouled Driss", "Mechrouha", "M'Daourouch"],
        '42': ["Tipaza", "Cherchell", "Gouraya", "Bou Ismail", "Hadjout", "Ahmer El Ain"],
        '43': ["Mila", "Telerghma", "Sidi Merouane", "Grarem Gouga", "Oued Seguen", "Ferdjioua"],
        '44': ["Ain Defla", "Miliana", "El Abadia", "Khemis Miliana", "Hammam Righa"],
        '45': ["Naama", "Ain Sefra", "Sfissifa", "Mekmen Ben Amar"],
        '46': ["Ain Temouchent", "El Malah", "Oulhaça", "Hammam Bou Hadjar", "Sidi Safi"],
        '47': ["Ghardaia", "El Meniaa", "Berriane", "Metlili", "Sebseb"],
        '48': ["Relizane", "Mazouna", "Oued Rhiou", "Sidi M'Hamed Ben Ali", "Zemmoura", "El Matmar"],
        '49': ["Timimoun", "Ouled Said", "Charouine", "Tinerkouk"],
        '50': ["Bordj Badji Mokhtar", "Tamanrasset", "In Guezzam"],
        '51': ["Ouled Djellal", "Sidi Khaled", "Doucen", "Ras El Miad"],
        '52': ["Beni Abbas", "Tabelbala", "El Ouata", "Kerzaz"],
        '53': ["In Salah", "Foggaret Ezzoua", "Hassi Lahdjar", "In Ghar"],
        '54': ["In Guezzam", "Ablessa", "Tamanrasset"],
        '55': ["Touggourt", "M'Naguer", "Nezla", "Temacine", "Taibet", "El Hadjira"],
        '56': ["Djanet", "Illizi", "Bordj El Haoues"],
        '57': ["El M'Ghair", "Oum Touyour", "Sidi Amrane", "Sidi Khouiled"],
        '58': ["El Meniaa", "Hassi Gara", "Hassi Lahdjar", "Zelda"]
      };

    const wilayaSelect = document.getElementById('wilaya');
    const comuneSelect = document.getElementById('comune');
    const deliveryPriceSpan = document.getElementById('delivery-price');

    const deliveryPrices = {
    '1': 300,
    '2': 500,
    '3': 450,
    '4': 400,
    '5': 350,
    '6': 420,
    '7': 480,
    '8': 360,
    '9': 390,
    '10': 410,
    '11': 370,
    '12': 430,
    '13': 300,
    '14': 310,
    '15': 320,
    '16': 330,
    '17': 340,
    '18': 350,
    '19': 360,
    '20': 370,
    '21': 380,
    '22': 390,
    '23': 400,
    '24': 410,
    '25': 420,
    '26': 430,
    '27': 440,
    '28': 450,
    '29': 460,
    '30': 470,
    '31': 480,
    '32': 490,
    '33': 500,
    '34': 510,
    '35': 520,
    '36': 530,
    '37': 540,
    '38': 550,
    '39': 560,
    '40': 570,
    '41': 580,
    '42': 590,
    '43': 600,
    '44': 610,
    '45': 620,
    '46': 630,
    '47': 640,
    '48': 650,
    '49': 660,
    '50': 670,
    '51': 680,
    '52': 690,
    '53': 700,
    '54': 710,
    '55': 720,
    '56': 730,
    '57': 740,
    '58': 750
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
</script>
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
    <a href="${facebookUrl}" target="_blank" style="margin: 0 10px; text-decoration: none; width: 40px; color: #ffffff;">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://wa.me/213${whatsApp.startsWith('0') ? whatsApp.slice(1) : whatsApp}" target="_blank"  style="margin: 0 10px; width: 40px; text-decoration: none; color: #ffffff;">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="mailto:${email}" style="margin: 0 10px; text-decoration: none; color: #ffffff;">
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

</html>
  `;
};

export default generateHTML;
