const products = [
  
  { id: 1, name: "Acer Aspire 5", category: "Laptop", price: 45000, description: "Budget friendly laptop for students and office work", tags: ["budget","student","office"] },
  { id: 2, name: "ASUS ROG Strix", category: "Laptop", price: 120000, description: "High-performance gaming laptop", tags: ["gaming","high-performance"] },
  { id: 3, name: "HP Pavilion", category: "Laptop", price: 70000, description: "Reliable mid-range laptop", tags: ["office","multitasking"] },
  { id: 4, name: "Dell Inspiron 15", category: "Laptop", price: 65000, description: "Everyday productivity laptop", tags: ["office","daily-use"] },
  { id: 5, name: "MacBook Air M2", category: "Laptop", price: 110000, description: "Lightweight premium laptop with M2 chip", tags: ["premium","student","design"] },
  { id: 6, name: "Lenovo IdeaPad 3", category: "Laptop", price: 50000, description: "Affordable laptop for basic tasks", tags: ["budget","office"] },
  { id: 7, name: "MSI Katana GF66", category: "Laptop", price: 95000, description: "Powerful gaming laptop", tags: ["gaming","performance"] },
  { id: 8, name: "HP Omen 16", category: "Laptop", price: 135000, description: "Premium gaming machine", tags: ["gaming","high-performance"] },

  
  { id: 9, name: "iPhone 14", category: "Mobile", price: 75000, description: "Premium smartphone with advanced camera", tags: ["premium","camera"] },
  { id: 10, name: "iPhone 15 Pro", category: "Mobile", price: 135000, description: "High-end flagship smartphone", tags: ["premium","camera","performance"] },
  { id: 11, name: "Samsung Galaxy S23", category: "Mobile", price: 85000, description: "Flagship Android smartphone", tags: ["premium","android"] },
  { id: 12, name: "OnePlus Nord", category: "Mobile", price: 28000, description: "Affordable 5G smartphone", tags: ["budget","5g"] },
  { id: 13, name: "Redmi Note 13", category: "Mobile", price: 18000, description: "Budget smartphone with good battery", tags: ["budget","battery"] },
  { id: 14, name: "Realme Narzo 60", category: "Mobile", price: 16000, description: "Affordable performance smartphone", tags: ["budget","performance"] },
  { id: 15, name: "Google Pixel 8", category: "Mobile", price: 80000, description: "AI-powered camera smartphone", tags: ["camera","premium"] },

  
  { id: 16, name: "Sony WH-1000XM5", category: "Headphones", price: 30000, description: "Noise cancelling wireless headphones", tags: ["audio","noise-cancelling"] },
  { id: 17, name: "AirPods Pro 2", category: "Headphones", price: 26000, description: "Premium true wireless earbuds", tags: ["premium","audio"] },
  { id: 18, name: "Boat Rockerz 550", category: "Headphones", price: 2500, description: "Budget over-ear headphones", tags: ["budget","audio"] },
  { id: 19, name: "JBL Tune 760NC", category: "Headphones", price: 7000, description: "Affordable ANC headphones", tags: ["budget","noise-cancelling"] },
  { id: 20, name: "Samsung Galaxy Buds 2", category: "Headphones", price: 9000, description: "Compact wireless earbuds", tags: ["audio","portable"] },

  
  { id: 21, name: "iPad 10th Gen", category: "Tablet", price: 45000, description: "Powerful tablet for productivity and entertainment", tags: ["premium","education"] },
  { id: 22, name: "Samsung Galaxy Tab S9", category: "Tablet", price: 65000, description: "High-end Android tablet", tags: ["premium","android"] },
  { id: 23, name: "Lenovo Tab M10", category: "Tablet", price: 18000, description: "Affordable tablet for students", tags: ["budget","education"] },
  { id: 24, name: "Realme Pad", category: "Tablet", price: 15000, description: "Budget-friendly entertainment tablet", tags: ["budget","media"] },

  
  { id: 25, name: "Apple Watch Series 9", category: "Smartwatch", price: 45000, description: "Premium smartwatch with health tracking", tags: ["premium","fitness"] },
  { id: 26, name: "Samsung Galaxy Watch 6", category: "Smartwatch", price: 35000, description: "Advanced Android smartwatch", tags: ["fitness","android"] },
  { id: 27, name: "Noise ColorFit Pro 4", category: "Smartwatch", price: 5000, description: "Affordable fitness smartwatch", tags: ["budget","fitness"] },
  { id: 28, name: "Fire-Boltt Ninja", category: "Smartwatch", price: 3000, description: "Budget smartwatch with basic tracking", tags: ["budget","fitness"] },

  
  { id: 29, name: "LG UltraGear 27", category: "Monitor", price: 22000, description: "Gaming monitor with high refresh rate", tags: ["gaming","display"] },
  { id: 30, name: "Dell 24 IPS", category: "Monitor", price: 15000, description: "Office productivity monitor", tags: ["office","display"] },
  { id: 31, name: "Samsung Odyssey G5", category: "Monitor", price: 28000, description: "Curved gaming monitor", tags: ["gaming","curved"] },
  { id: 32, name: "Acer Nitro VG240Y", category: "Monitor", price: 17000, description: "Affordable gaming monitor", tags: ["budget","gaming"] },

  
  { id: 33, name: "Logitech MX Keys", category: "Keyboard", price: 9000, description: "Premium wireless keyboard", tags: ["premium","office"] },
  { id: 34, name: "Redragon K552", category: "Keyboard", price: 3500, description: "Mechanical gaming keyboard", tags: ["gaming","mechanical"] },
  { id: 35, name: "HP C2500", category: "Keyboard", price: 800, description: "Basic wired keyboard", tags: ["budget","office"] },
  { id: 36, name: "Keychron K2", category: "Keyboard", price: 7500, description: "Compact mechanical keyboard", tags: ["mechanical","premium"] },

  
  { id: 37, name: "Logitech MX Master 3", category: "Mouse", price: 8000, description: "Premium productivity mouse", tags: ["premium","office"] },
  { id: 38, name: "Razer DeathAdder V2", category: "Mouse", price: 4500, description: "High precision gaming mouse", tags: ["gaming","performance"] },
  { id: 39, name: "HP X1000", category: "Mouse", price: 500, description: "Basic wired mouse", tags: ["budget","office"] },
  { id: 40, name: "Logitech G304", category: "Mouse", price: 3000, description: "Wireless gaming mouse", tags: ["gaming","wireless"] },

  
  { id: 41, name: "JBL Flip 6", category: "Speaker", price: 10000, description: "Portable Bluetooth speaker", tags: ["portable","audio"] },
  { id: 42, name: "Sony SRS-XE200", category: "Speaker", price: 12000, description: "Durable waterproof speaker", tags: ["portable","waterproof"] },
  { id: 43, name: "Boat Stone 650", category: "Speaker", price: 3000, description: "Affordable portable speaker", tags: ["budget","portable"] },
  { id: 44, name: "Marshall Emberton", category: "Speaker", price: 15000, description: "Premium portable speaker", tags: ["premium","audio"] },

  { id: 45, name: "Asus ZenBook 14", category: "Laptop", price: 85000, description: "Ultra-slim professional laptop", tags: ["premium","office"] },
  { id: 46, name: "Vivo V29", category: "Mobile", price: 32000, description: "Mid-range camera phone", tags: ["camera","5g"] },
  { id: 47, name: "Nothing Ear 2", category: "Headphones", price: 10000, description: "Stylish transparent earbuds", tags: ["audio","premium"] },
  { id: 48, name: "Xiaomi Pad 6", category: "Tablet", price: 28000, description: "Affordable performance tablet", tags: ["budget","performance"] },
  { id: 49, name: "Corsair K95 RGB", category: "Keyboard", price: 15000, description: "High-end RGB gaming keyboard", tags: ["gaming","premium"] },
  { id: 50, name: "Amazfit GTR 4", category: "Smartwatch", price: 18000, description: "Advanced fitness tracking smartwatch", tags: ["fitness","premium"] }
];

module.exports = products;