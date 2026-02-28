const products = [
  
  { id: 1, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "Acer Aspire 5", category: "Laptop", price: 45000, description: "Budget friendly laptop for students and office work", tags: ["budget","student","office"] },
  { id: 2, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "ASUS ROG Strix", category: "Laptop", price: 120000, description: "High-performance gaming laptop", tags: ["gaming","high-performance"] },
  { id: 3, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "HP Pavilion", category: "Laptop", price: 70000, description: "Reliable mid-range laptop", tags: ["office","multitasking"] },
  { id: 4, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "Dell Inspiron 15", category: "Laptop", price: 65000, description: "Everyday productivity laptop", tags: ["office","daily-use"] },
  { id: 5, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "MacBook Air M2", category: "Laptop", price: 110000, description: "Lightweight premium laptop with M2 chip", tags: ["premium","student","design"] },
  { id: 6, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "Lenovo IdeaPad 3", category: "Laptop", price: 50000, description: "Affordable laptop for basic tasks", tags: ["budget","office"] },
  { id: 7, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "MSI Katana GF66", category: "Laptop", price: 95000, description: "Powerful gaming laptop", tags: ["gaming","performance"] },
  { id: 8, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "HP Omen 16", category: "Laptop", price: 135000, description: "Premium gaming machine", tags: ["gaming","high-performance"] },

  
  { id: 9, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "iPhone 14", category: "Mobile", price: 75000, description: "Premium smartphone with advanced camera", tags: ["premium","camera"] },
  { id: 10, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "iPhone 15 Pro", category: "Mobile", price: 135000, description: "High-end flagship smartphone", tags: ["premium","camera","performance"] },
  { id: 11, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "Samsung Galaxy S23", category: "Mobile", price: 85000, description: "Flagship Android smartphone", tags: ["premium","android"] },
  { id: 12, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "OnePlus Nord", category: "Mobile", price: 28000, description: "Affordable 5G smartphone", tags: ["budget","5g"] },
  { id: 13, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "Redmi Note 13", category: "Mobile", price: 18000, description: "Budget smartphone with good battery", tags: ["budget","battery"] },
  { id: 14, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "Realme Narzo 60", category: "Mobile", price: 16000, description: "Affordable performance smartphone", tags: ["budget","performance"] },
  { id: 15, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "Google Pixel 8", category: "Mobile", price: 80000, description: "AI-powered camera smartphone", tags: ["camera","premium"] },

  
  { id: 16, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "Sony WH-1000XM5", category: "Headphones", price: 30000, description: "Noise cancelling wireless headphones", tags: ["audio","noise-cancelling"] },
  { id: 17, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "AirPods Pro 2", category: "Headphones", price: 26000, description: "Premium true wireless earbuds", tags: ["premium","audio"] },
  { id: 18, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "Boat Rockerz 550", category: "Headphones", price: 2500, description: "Budget over-ear headphones", tags: ["budget","audio"] },
  { id: 19, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "JBL Tune 760NC", category: "Headphones", price: 7000, description: "Affordable ANC headphones", tags: ["budget","noise-cancelling"] },
  { id: 20, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "Samsung Galaxy Buds 2", category: "Headphones", price: 9000, description: "Compact wireless earbuds", tags: ["audio","portable"] },

  
  { id: 21, image: 'https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Indigo_27b2673d-0189-4e02-a605-7333f60f883b.9f9a06750a18701bb12dbad067226fce.jpeg', name: "iPad 10th Gen", category: "Tablet", price: 45000, description: "Powerful tablet for productivity and entertainment", tags: ["premium","education"] },
  { id: 22, image: 'https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Indigo_27b2673d-0189-4e02-a605-7333f60f883b.9f9a06750a18701bb12dbad067226fce.jpeg', name: "Samsung Galaxy Tab S9", category: "Tablet", price: 65000, description: "High-end Android tablet", tags: ["premium","android"] },
  { id: 23, image: 'https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Indigo_27b2673d-0189-4e02-a605-7333f60f883b.9f9a06750a18701bb12dbad067226fce.jpeg', name: "Lenovo Tab M10", category: "Tablet", price: 18000, description: "Affordable tablet for students", tags: ["budget","education"] },
  { id: 24, image: 'https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Indigo_27b2673d-0189-4e02-a605-7333f60f883b.9f9a06750a18701bb12dbad067226fce.jpeg', name: "Realme Pad", category: "Tablet", price: 15000, description: "Budget-friendly entertainment tablet", tags: ["budget","media"] },

  
  { id: 25, image: 'https://tse4.mm.bing.net/th/id/OIP.fbDHyizLU27CxPserXHp3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Apple Watch Series 9", category: "Smartwatch", price: 45000, description: "Premium smartwatch with health tracking", tags: ["premium","fitness"] },
  { id: 26, image: 'https://tse4.mm.bing.net/th/id/OIP.fbDHyizLU27CxPserXHp3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Samsung Galaxy Watch 6", category: "Smartwatch", price: 35000, description: "Advanced Android smartwatch", tags: ["fitness","android"] },
  { id: 27, image: 'https://tse4.mm.bing.net/th/id/OIP.fbDHyizLU27CxPserXHp3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Noise ColorFit Pro 4", category: "Smartwatch", price: 5000, description: "Affordable fitness smartwatch", tags: ["budget","fitness"] },
  { id: 28, image: 'https://tse4.mm.bing.net/th/id/OIP.fbDHyizLU27CxPserXHp3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Fire-Boltt Ninja", category: "Smartwatch", price: 3000, description: "Budget smartwatch with basic tracking", tags: ["budget","fitness"] },

  
  { id: 29, image: 'https://s.ecrater.com/stores/52097/58daed2356b92_52097b.jpg', name: "LG UltraGear 27", category: "Monitor", price: 22000, description: "Gaming monitor with high refresh rate", tags: ["gaming","display"] },
  { id: 30, image: 'https://s.ecrater.com/stores/52097/58daed2356b92_52097b.jpg', name: "Dell 24 IPS", category: "Monitor", price: 15000, description: "Office productivity monitor", tags: ["office","display"] },
  { id: 31, image: 'https://s.ecrater.com/stores/52097/58daed2356b92_52097b.jpg', name: "Samsung Odyssey G5", category: "Monitor", price: 28000, description: "Curved gaming monitor", tags: ["gaming","curved"] },
  { id: 32, image: 'https://s.ecrater.com/stores/52097/58daed2356b92_52097b.jpg', name: "Acer Nitro VG240Y", category: "Monitor", price: 17000, description: "Affordable gaming monitor", tags: ["budget","gaming"] },

  
  { id: 33, image: 'https://tse4.mm.bing.net/th/id/OIP.DuZHRD9k6f0DZQvurYS4IgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Logitech MX Keys", category: "Keyboard", price: 9000, description: "Premium wireless keyboard", tags: ["premium","office"] },
  { id: 34, image: 'https://tse4.mm.bing.net/th/id/OIP.DuZHRD9k6f0DZQvurYS4IgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Redragon K552", category: "Keyboard", price: 3500, description: "Mechanical gaming keyboard", tags: ["gaming","mechanical"] },
  { id: 35, image: 'https://tse4.mm.bing.net/th/id/OIP.DuZHRD9k6f0DZQvurYS4IgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "HP C2500", category: "Keyboard", price: 800, description: "Basic wired keyboard", tags: ["budget","office"] },
  { id: 36, image: 'https://tse4.mm.bing.net/th/id/OIP.DuZHRD9k6f0DZQvurYS4IgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Keychron K2", category: "Keyboard", price: 7500, description: "Compact mechanical keyboard", tags: ["mechanical","premium"] },

  
  { id: 37, image: 'https://preview.free3d.com/img/2014/07/2140144447394940502/9jvg0rp1.jpg', name: "Logitech MX Master 3", category: "Mouse", price: 8000, description: "Premium productivity mouse", tags: ["premium","office"] },
  { id: 38, image: 'https://preview.free3d.com/img/2014/07/2140144447394940502/9jvg0rp1.jpg', name: "Razer DeathAdder V2", category: "Mouse", price: 4500, description: "High precision gaming mouse", tags: ["gaming","performance"] },
  { id: 39, image: 'https://preview.free3d.com/img/2014/07/2140144447394940502/9jvg0rp1.jpg', name: "HP X1000", category: "Mouse", price: 500, description: "Basic wired mouse", tags: ["budget","office"] },
  { id: 40, image: 'https://preview.free3d.com/img/2014/07/2140144447394940502/9jvg0rp1.jpg', name: "Logitech G304", category: "Mouse", price: 3000, description: "Wireless gaming mouse", tags: ["gaming","wireless"] },

  
  { id: 41, image: 'https://m.media-amazon.com/images/I/81FzSswwCVL.jpg', name: "JBL Flip 6", category: "Speaker", price: 10000, description: "Portable Bluetooth speaker", tags: ["portable","audio"] },
  { id: 42, image: 'https://m.media-amazon.com/images/I/81FzSswwCVL.jpg', name: "Sony SRS-XE200", category: "Speaker", price: 12000, description: "Durable waterproof speaker", tags: ["portable","waterproof"] },
  { id: 43, image: 'https://m.media-amazon.com/images/I/81FzSswwCVL.jpg', name: "Boat Stone 650", category: "Speaker", price: 3000, description: "Affordable portable speaker", tags: ["budget","portable"] },
  { id: 44, image: 'https://m.media-amazon.com/images/I/81FzSswwCVL.jpg', name: "Marshall Emberton", category: "Speaker", price: 15000, description: "Premium portable speaker", tags: ["premium","audio"] },

  { id: 45, image: 'https://qhrenderpicoss.coohom.com/mr/2021/06/21/L4D1113ENDDV7SQHISEJKVNQ5BZL3WKVI8_1000x1000.jpg', name: "Asus ZenBook 14", category: "Laptop", price: 85000, description: "Ultra-slim professional laptop", tags: ["premium","office"] },
  { id: 46, image: 'https://img.freepik.com/premium-photo/handheld-mobile-phone-mobile-phone-model-smart-phone-smart-phone-telephone-model_1028519-5176.jpg', name: "Vivo V29", category: "Mobile", price: 32000, description: "Mid-range camera phone", tags: ["camera","5g"] },
  { id: 47, image: 'https://img-new.cgtrader.com/items/3123436/dbcec5fe9d/headphone-3d-model-3d-model-obj-fbx-blend.jpg', name: "Nothing Ear 2", category: "Headphones", price: 10000, description: "Stylish transparent earbuds", tags: ["audio","premium"] },
  { id: 48, image: 'https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Indigo_27b2673d-0189-4e02-a605-7333f60f883b.9f9a06750a18701bb12dbad067226fce.jpeg', name: "Xiaomi Pad 6", category: "Tablet", price: 28000, description: "Affordable performance tablet", tags: ["budget","performance"] },
  { id: 49, image: 'https://tse4.mm.bing.net/th/id/OIP.DuZHRD9k6f0DZQvurYS4IgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Corsair K95 RGB", category: "Keyboard", price: 15000, description: "High-end RGB gaming keyboard", tags: ["gaming","premium"] },
  { id: 50, image: 'https://tse4.mm.bing.net/th/id/OIP.fbDHyizLU27CxPserXHp3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', name: "Amazfit GTR 4", category: "Smartwatch", price: 18000, description: "Advanced fitness tracking smartwatch", tags: ["fitness","premium"] }
];

module.exports = products;