document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const products = {
    1: {
      id: 1,
      name: "GAMER XRT 500",
      description:
        'Experience ultimate gaming performance with the GAMER XRT 500. Featuring the latest RTX 4060 graphics card and 12th Gen Intel Core i7 processor, this laptop delivers exceptional framerates and responsiveness for all your favorite games. The 15.6" FHD IPS display provides vibrant colors and wide viewing angles for an immersive gaming experience.',
      specs: [
        "16GB DDR5 RAM",
        "1TB NVMe SSD",
        "NVIDIA RTX 4060 (8GB GDDR6)",
        "Intel Core i7-12700H (14-core)",
        '15.6" FHD (1920x1080) IPS Display, 144Hz',
        "Windows 11 Home",
        "RGB Backlit Keyboard",
        "Up to 8 hours battery life",
        "Weight: 4.85lbs",
        'Dimensions: 14.2" x 10.3" x 1.1"',
      ],
      price: 1299,
      image: "../images/laptop.jpg",
      category: "laptop"
    },
    2: {
      id: 2,
      name: "SONY Alpha A7 III",
      description:
        "The Sony Alpha A7 III redefines full-frame photography with its exceptional image quality and versatile features. Perfect for professionals and enthusiasts alike, this mirrorless camera captures stunning details with its 24.2MP sensor and advanced autofocus system. The 4K video capability makes it an ideal choice for content creators.",
      specs: [
        "24.2MP Full-Frame Exmor R CMOS Sensor",
        "BIONZ X Image Processor",
        "4K Video Recording",
        "10fps Continuous Shooting",
        "693-Point Hybrid AF System",
        "5-Axis In-Body Image Stabilization",
        "ISO Range: 100-51200 (Expandable)",
        "Dual SD Card Slots",
        "Weather-Sealed Construction",
        "Battery Life: Approx. 710 shots",
      ],
      price: 1999,
      image: "../images/camara pic.jpg",
      category: "camera"
    },
    3: {
      id: 3,
      name: "Smart Watch X2",
      description:
        "Stay connected and track your fitness goals with the Smart Watch X2. This premium smartwatch features continuous heart rate monitoring, built-in GPS, and comprehensive health tracking. With its 5 ATM water resistance, you can wear it during swimming and other water activities without worry.",
      specs: [
        "Advanced Heart Rate Monitoring",
        "Built-in GPS",
        "5 ATM Water Resistance",
        "AMOLED Touchscreen Display",
        "Up to 7 Days Battery Life",
        "Sleep Tracking",
        "Stress Monitoring",
        "Compatible with iOS and Android",
        "Notification Alerts",
        "Music Control",
      ],
      price: 299,
      image: "../images/watch.jpg",
      category: "watch"
    },
    4: {
      id: 4,
      name: "Honor MagicBook Art 14",
      description:
        "Experience visual excellence with the Honor MagicBook Art 14, featuring the world's first 4320Hz PWM dimming OLED display. This innovative laptop combines stunning visuals with powerful performance for both creative professionals and everyday users.",
      specs: [
        '14" OLED Display (3840 x 2400)',
        "4320Hz PWM Dimming Technology",
        "Intel Core i7-1360P Processor",
        "16GB LPDDR5 RAM",
        "1TB PCIe SSD",
        "Intel Iris Xe Graphics",
        "Windows 11 Home",
        "Up to 10 Hours Battery Life",
        "Weight: 1.35kg",
        "Fingerprint Power Button",
      ],
      price: 50000,
      image:
        "../Images/Honor MagicBook Art 14_ World's First 4320Hz PWM Dimming OLED Laptop Launched Globally Ajleeblog.jpeg",
      category: "laptop"
    },
    5: {
      id: 5,
      name: "HP Victus 16-r0076TX",
      description:
        "Elevate your gaming experience with the HP Victus 16-r0076TX Gaming Laptop. Featuring a powerful Intel Core i5-13500HX processor and NVIDIA RTX 4050 graphics, this laptop delivers exceptional performance for modern games and content creation applications.",
      specs: [
        "Intel Core i5-13500HX Processor",
        "NVIDIA GeForce RTX 4050 (6GB GDDR6)",
        "16GB DDR5 RAM",
        "512GB PCIe NVMe SSD",
        '16.1" FHD (1920x1080) IPS Display',
        "144Hz Refresh Rate",
        "Windows 11 Home",
        "RGB Backlit Keyboard",
        "Battery Life: Up to 6 Hours",
        "Weight: 2.3kg",
      ],
      price: 1199,
      image:
        "../images/HP Victus 16-r0076TX Gaming Laptop Launched in India ( Specs_ Core i5-13500HX _ RTX 4050 _ 16GB ram _ 512GB SSD _ 144hz display ) _ Tech Stories India _ Technology News Online.jpeg",
      category: "laptop"
    },
    6: {
      id: 6,
      name: "Apple Fitness Plus",
      description:
        "Transform your fitness routine with Apple Fitness+, a premium subscription service designed to help you achieve your health goals. Get access to a wide variety of workouts led by expert trainers, with new content added weekly.",
      specs: [
        "Subscription-Based Fitness Service",
        "11 Workout Types (HIIT, Yoga, Strength, etc.)",
        "Integration with Apple Watch Metrics",
        "Personalized Recommendations",
        "New Workouts Added Weekly",
        "Time-Sync Music",
        "Compatible with iPhone, iPad, and Apple TV",
        "Beginner to Advanced Workouts",
        "Meditation Sessions",
        "Annual Subscription Available",
      ],
      price: 10000,
      image:
        "../images/I used Apple Fitness Plus for 7 days_ Here's my honest review.jpeg",
      category: "watch"
    },
    7: {
      id: 7,
      name: "JBL Quantum 800",
      description:
        "Immerse yourself in premium sound with the JBL Quantum 800 gaming headphones. Featuring active noise cancellation and JBL QuantumSURROUND, these wireless headphones deliver an exceptional audio experience for gaming and multimedia content.",
      specs: [
        "Active Noise Cancellation",
        "JBL QuantumSURROUND Sound",
        "2.4GHz Wireless Connection",
        "Bluetooth 5.0",
        "Up to 14 Hours Battery Life",
        "Voice-Focus Boom Microphone",
        "RGB Lighting Effects",
        "Memory Foam Ear Cushions",
        "Compatible with PC, PlayStation, Xbox, Nintendo Switch",
        "JBL QuantumENGINE PC Software",
      ],
      price: 199,
      image: "../images/JBL Headphones - Firat Tuzunkan on Fstoppers.jpeg",
      category: "headphone"
    },
    8: {
      id: 8,
      name: "MacBook Pro 16-inch",
      description:
        "Experience unprecedented power with the MacBook Pro 16-inch. Featuring the advanced M3 Pro chip, this laptop delivers exceptional performance for professional workflows including video editing, 3D rendering, and software development.",
      specs: [
        "Apple M3 Pro Chip",
        "12-core CPU, 19-core GPU",
        "32GB Unified Memory",
        "1TB SSD Storage",
        '16.2" Liquid Retina XDR Display',
        "ProMotion Technology (120Hz)",
        "Up to 22 Hours Battery Life",
        "Three Thunderbolt 4 Ports",
        "HDMI Port and SD Card Slot",
        "Backlit Magic Keyboard with Touch ID",
      ],
      price: 2499,
      image: "../images/MacBook Pro 16-inch Space Gray Mockup.jpeg",
      category: "laptop"
    },
    9: {
      id: 9,
      name: "SONY 1000X M3",
      description:
        "Enjoy industry-leading noise cancellation with the Sony 1000X M3 headphones. These premium wireless headphones deliver exceptional sound quality and comfort for extended listening sessions, making them perfect for travel, work, and everyday use.",
      specs: [
        "Industry-Leading Noise Cancellation",
        "LDAC Wireless Technology",
        "Up to 30 Hours Battery Life",
        "Quick Charge (5 Hours from 10 Minutes)",
        "Touch Controls",
        "HD Noise-Cancelling Processor QN1",
        "Foldable Design",
        "Built-in Microphone for Calls",
        "Adaptive Sound Control",
        "Ambient Sound Mode",
      ],
      price: 249,
      image:
        "../images/SONY 1000X M3 - Promotional Advertisement - Janith Lekamwasam.jpeg",
      category: "headphone"
    },
    10: {
      id: 10,
      name: 'iPad Pro 12.9"',
      description:
        'Unleash your creativity with the iPad Pro 12.9". Powered by the Apple M2 chip, this tablet delivers desktop-class performance in a portable form factor. The Liquid Retina XDR display offers exceptional brightness and contrast for professional creative work.',
      specs: [
        "Apple M2 Chip",
        "8-core CPU, 10-core GPU",
        "256GB Storage",
        '12.9" Liquid Retina XDR Display',
        "ProMotion Technology (120Hz)",
        "True Tone Display",
        "Ultra Wide Front Camera with Center Stage",
        "Face ID",
        "USB-C Thunderbolt / USB 4 Port",
        "Compatible with Apple Pencil and Magic Keyboard",
      ],
      price: 1099,
      image:
        "../images/These Are the Best Deals on Tech Products During the Spring Sale Season.jpeg",
      category: "tablet"
    },
    // Products 11-12 not currently shown in the HTML but keeping them for future use
    24: {
      id: 24,
      name: "Samsung Galaxy S23 Ultra",
      description: "Flagship smartphone with 200MP camera and S Pen support.",
      specs: [
        "6.8-inch Dynamic AMOLED 2X",
        "200MP main camera",
        "S Pen included",
        "5000mAh battery",
      ],
      price: 1199,
      image: "../images/s23-ultra.jpg",
      category: "phone"
    },
    
    27: {
      id: 27,
      name: "Bose QuietComfort 45",
      description: "Industry-leading noise cancelling headphones.",
      specs: [
        "Active noise cancelling",
        "22-hour battery life",
        "Tri-port acoustic design",
        "Built-in microphone",
      ],
      price: 329,
      image: "../Images/Bose QuietComfort 45.jpg",
      category: "headphone"
    },
    
    28: {
      id: 28,
      name: "Garmin Fenix 7X",
      description: "Premium multisport GPS smartwatch.",
      specs: [
        '1.4" sunlight-visible display',
        "Up to 37 days battery",
        "Advanced training metrics",
        "TopoActive maps",
      ],
      price: 899,
      image: "../Images/Garmin Fenix 7X.jpg",
      category: "watch"
    },
    16: {
      id: 16,
      name: "LG OLED C2 Series",
      description: "65-inch 4K Smart OLED TV.",
      specs: [
        '65" 4K OLED display',
        "α9 Gen5 AI Processor",
        "Dolby Vision IQ/Atmos",
        "webOS 22 platform",
      ],
      price: 1999,
      image: "../images/LG OLED C2 Series.jpg",
      category: "tv"
    },
    13: {
      id: 13,
      name: "Microsoft Surface Pro 9",
      description: "Versatile 2-in-1 laptop/tablet.",
      specs: [
        '13" PixelSense Flow display',
        "12th Gen Intel Core i7",
        "16GB RAM, 256GB SSD",
        "Windows 11 Pro",
      ],
      price: 1499,
      image: "../images/Microsoft Surface Pro 9.jpg",
      category: "tablet"
    },
    26: {
      id: 26,
      name: "Razer Blade 15",
      description: "High-performance gaming laptop.",
      specs: [
        '15.6" QHD 240Hz display',
        "RTX 3080 Ti 16GB",
        "Intel Core i9-12900H",
        "32GB DDR5 RAM",
      ],
      price: 3499,
      image: "../images/Razer Blade 15.jpg",
      category: "laptop"
    },
    15: {
      id: 15,
      name: "Apple AirPods Max",
      description: "Premium over-ear headphones.",
      specs: [
        "Active Noise Cancellation",
        "Spatial audio support",
        "20-hour battery life",
        "Digital Crown control",
      ],
      price: 549,
      image: "../images/Apple AirPods Max.jpg",
      category: "headphone"
    },
    22: {
      id: 22,
      name: "Sony WH-1000XM5",
      description: "Best-in-class noise cancelling headphones.",
      specs: [
        "New V1 Integrated Processor",
        "30-hour battery life",
        "8 microphones for calls",
        "Auto NC Optimizer",
      ],
      price: 399,
      image: "../Images/Sony WH-1000XM5.jpg",
      category: "headphone"
    },
    18: {
      id: 18,
      name: "ASUS ROG Swift PG32UQX",
      description: "32-inch 4K gaming monitor.",
      specs: [
        '32" 4K UHD (3840 x 2160)',
        "144Hz refresh rate",
        "G-SYNC Ultimate",
        "DisplayHDR 1400",
      ],
      price: 2999,
      image: "../images/ASUS ROG Swift PG32UQX.jpg",
      category: "monitor"
    },
    21: {
      id: 21,
      name: "Logitech MX Master 3S",
      description: "Advanced wireless mouse.",
      specs: [
        "8K DPI sensor",
        "Ultra-fast scrolling",
        "7 buttons, ergonomic design",
        "70-day battery life",
      ],
      price: 99,
      image: "../images/Logitech MX Master 3S.jpg",
      category: "accessory"
    },
    20: {
      id: 20,
      name: "Nintendo Switch OLED",
      description: "Handheld gaming console with OLED screen.",
      specs: [
        '7" OLED touchscreen',
        "64GB internal storage",
        "Enhanced audio",
        "Wide adjustable stand",
      ],
      price: 349,
      image: "../images/netro.jpg",
      category: "gaming"
    },
    17: {
      id: 17,
      name: "DJI Mavic 3 Pro",
      description: "Flagship camera drone.",
      specs: [
        "4/3 CMOS Hasselblad camera",
        "5.1K video recording",
        "46 minutes flight time",
        "Omnidirectional obstacle sensing",
      ],
      price: 2199,
      image: "../images/DJI Mavic 3 Pro.jpg",
      category: "drone"
    },
    11: {
      id: 11,
      name: "Samsung Odyssey Neo G9",
      description: "57-inch dual 4K gaming monitor.",
      specs: [
        '57" 7680x2160 resolution',
        "240Hz refresh rate",
        "Quantum Mini-LED",
        "DisplayHDR 1000",
      ],
      price: 2499,
      image: "../images/Samsung Odyssey Neo G9.jpg",
      category: "monitor"
    },
    29: {
      id: 29,
      name: "Google Pixel 7 Pro",
      description: "Flagship Android smartphone.",
      specs: [
        '6.7" QHD+ OLED display',
        "Tensor G2 processor",
        "50MP main camera",
        "5000mAh battery",
      ],
      price: 749,
      image: "../Images/Google Pixel 7 Pro.jpg",
      category: "phone"
    },
    12: {
      id: 12,
      name: "HP Spectre x360 14",
      description: "Premium convertible laptop.",
      specs: [
        '14" 3K2K OLED touchscreen',
        "Intel Core i7-1255U",
        "16GB RAM, 1TB SSD",
        "Thunderbolt 4 ports",
      ],
      price: 1649,
      image: "../images/HP Spectre x360 14.jpg",
      category: "laptop"
    },
    25: {
      id: 25,
      name: "Amazon Echo Studio",
      description: "High-fidelity smart speaker.",
      specs: [
        "3D audio with Dolby Atmos",
        "5-speaker system",
        "Alexa voice control",
        "Smart home hub",
      ],
      price: 199,
      image: "../images/Amazon Echo Studio.jpg",
      category: "speaker"
    },
    14: {
      id: 14,
      name: "Meta Quest 3",
      description: "Advanced VR headset.",
      specs: [
        "Next-gen Snapdragon XR2",
        "Higher resolution displays",
        "Mixed reality capable",
        "Touch Plus controllers",
      ],
      price: 499,
      image: "../images/Meta Quest 3.jpg",
      category: "vr"
    },
    19: {
      id: 19,
      name: "Anker 737 Power Bank",
      description: "High-capacity portable charger.",
      specs: [
        "24,000mAh capacity",
        "140W USB-C charging",
        "Digital display",
        "GaNPrime technology",
      ],
      price: 149,
      image: "../images/Anker 737 Power Bank.jpg",
      category: "accessory"
    },
  };

  const product = products[productId];

  if (product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDesc").textContent = product.description;
    document.getElementById(
      "productPrice"
    ).textContent = `$${product.price.toFixed(2)}`;

    const specsContainer = document.getElementById("productSpecs");
    const specsList = document.createElement("ul");
    specsList.className = "specs-list";
    product.specs.forEach((spec) => {
      const specItem = document.createElement("li");
      specItem.textContent = spec;
      specsList.appendChild(specItem);
    });
    specsContainer.appendChild(specsList);

    const cart = new ShoppingCart();

    document
  .querySelector(".product-detail-btn")
  .addEventListener("click", () => {
    cart.addItem(product);
    alert("The product in the Cart🛒"); // تم إضافته هنا
  });

  } 
});