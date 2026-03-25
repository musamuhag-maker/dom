

const products =[
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "price": 59.99,
    "discount": 10,
    "category": "Electronics",
    "stock": 120,
    "rating": 4.5,
    "image": "https://picsum.photos/id/180/300/300",
    "description": "High-quality wireless headphones with noise cancellation."
  },
  {
    "id": 2,
    "name": "Smartphone 128GB",
    "price": 399.99,
    "discount": 15,
    "category": "Electronics",
    "stock": 80,
    "rating": 4.6,
    "image": "https://picsum.photos/id/160/300/300",
    "description": "Powerful smartphone with excellent camera."
  },
  {
    "id": 3,
    "name": "Men's Sneakers",
    "price": 45.00,
    "discount": 5,
    "category": "Fashion",
    "stock": 150,
    "rating": 4.3,
    "image": "https://picsum.photos/id/21/300/300",
    "description": "Comfortable everyday sneakers."
  },
  {
    "id": 4,
    "name": "Women's Handbag",
    "price": 75.50,
    "discount": 12,
    "category": "Fashion",
    "stock": 60,
    "rating": 4.7,
    "image": "https://picsum.photos/id/1062/300/300",
    "description": "Elegant handbag for all occasions."
  },
  {
    "id": 5,
    "name": "Gaming Laptop",
    "price": 1200.00,
    "discount": 20,
    "category": "Electronics",
    "stock": 25,
    "rating": 4.8,
    "image": "https://picsum.photos/id/0/300/300",
    "description": "High-performance gaming laptop."
  },
  {
    "id": 6,
    "name": "Office Chair",
    "price": 150.00,
    "discount": 8,
    "category": "Furniture",
    "stock": 40,
    "rating": 4.4,
    "image": "https://picsum.photos/id/29/300/300",
    "description": "Ergonomic office chair."
  },
  {
    "id": 7,
    "name": "Desk Lamp",
    "price": 25.99,
    "discount": 6,
    "category": "Home",
    "stock": 200,
    "rating": 4.2,
    "image": "https://picsum.photos/id/96/300/300",
    "description": "Adjustable LED desk lamp."
  },
  {
    "id": 8,
    "name": "Water Bottle",
    "price": 19.99,
    "discount": 5,
    "category": "Accessories",
    "stock": 300,
    "rating": 4.6,
    "image": "https://picsum.photos/id/433/300/300",
    "description": "Durable stainless bottle."
  },
  {
    "id": 9,
    "name": "Smart Watch",
    "price": 89.99,
    "discount": 10,
    "category": "Electronics",
    "stock": 90,
    "rating": 4.5,
    "image": "https://picsum.photos/id/250/300/300",
    "description": "Track fitness and health."
  },
  {
    "id": 10,
    "name": "Bluetooth Speaker",
    "price": 35.00,
    "discount": 7,
    "category": "Electronics",
    "stock": 110,
    "rating": 4.4,
    "image": "https://picsum.photos/id/1080/300/300",
    "description": "Portable speaker with bass."
  },
  {
    "id": 11,
    "name": "Cotton T-Shirt",
    "price": 15.00,
    "discount": 5,
    "category": "Fashion",
    "stock": 250,
    "rating": 4.1,
    "image": "https://picsum.photos/id/1025/300/300",
    "description": "Soft and breathable cotton t-shirt."
  },
  {
    "id": 12,
    "name": "Jeans Pants",
    "price": 40.00,
    "discount": 10,
    "category": "Fashion",
    "stock": 130,
    "rating": 4.3,
    "image": "https://picsum.photos/id/1005/300/300",
    "description": "Stylish and durable jeans."
  },
  {
    "id": 13,
    "name": "Microwave Oven",
    "price": 220.00,
    "discount": 15,
    "category": "Home Appliances",
    "stock": 35,
    "rating": 4.6,
    "image": "https://picsum.photos/id/1060/300/300",
    "description": "Efficient microwave oven."
  },
  {
    "id": 14,
    "name": "Electric Kettle",
    "price": 30.00,
    "discount": 8,
    "category": "Home Appliances",
    "stock": 95,
    "rating": 4.5,
    "image": "https://picsum.photos/id/1084/300/300",
    "description": "Fast boiling electric kettle."
  },
  {
    "id": 15,
    "name": "Backpack",
    "price": 28.00,
    "discount": 6,
    "category": "Accessories",
    "stock": 180,
    "rating": 4.4,
    "image": "https://picsum.photos/id/1069/300/300",
    "description": "Spacious everyday backpack."
  },
  {
    "id": 16,
    "name": "Running Shoes",
    "price": 65.00,
    "discount": 10,
    "category": "Fashion",
    "stock": 75,
    "rating": 4.6,
    "image": "https://picsum.photos/id/237/300/300",
    "description": "Lightweight running shoes."
  },
  {
    "id": 17,
    "name": "Tablet 10-inch",
    "price": 250.00,
    "discount": 12,
    "category": "Electronics",
    "stock": 50,
    "rating": 4.3,
    "image": "https://picsum.photos/id/1015/300/300",
    "description": "Portable tablet with large display."
  },
  {
    "id": 18,
    "name": "Wireless Mouse",
    "price": 18.00,
    "discount": 5,
    "category": "Electronics",
    "stock": 220,
    "rating": 4.2,
    "image": "https://picsum.photos/id/1044/300/300",
    "description": "Smooth wireless mouse."
  },
  {
    "id": 19,
    "name": "Mechanical Keyboard",
    "price": 70.00,
    "discount": 9,
    "category": "Electronics",
    "stock": 65,
    "rating": 4.7,
    "image": "https://picsum.photos/id/1068/300/300",
    "description": "RGB mechanical keyboard."
  },
  {
    "id": 20,
    "name": "Smart TV 55-inch",
    "price": 650.00,
    "discount": 18,
    "category": "Electronics",
    "stock": 20,
    "rating": 4.8,
    "image": "https://picsum.photos/id/1074/300/300",
    "description": "4K smart TV with streaming apps."
  }
]


function displayCard(name, image, desc, price, discount){
    const nameTag = document.createElement("h1")
    const imageTag = document.createElement("img")
    const descTag = document.createElement("p")
    const priceTag = document.createElement("h2")
    const discountTag = document.createElement('p')
    const card = document.createElement("div")
    const section = document.querySelector('section')

    section.className = "product-section"


    nameTag.textContent = name
    imageTag.src = image
    descTag.textContent = desc
    priceTag.textContent = price
    discountTag.textContent = discount

    card.append(imageTag, nameTag, descTag, priceTag, discountTag)
    section.appendChild(card)

}

function displayProducts(){
    products.map((product)=>{
        displayCard(product.name, product.image, product.description, product.price, product.discount)
    })
}

displayProducts()