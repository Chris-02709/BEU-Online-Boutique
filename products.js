//product categorization
const products = [
    {
        id: 1,
        name: "Womens Fashion",
        price: 2000,
        category: "women",
        image: "images/women fashion/40+ Super Stylish Winter Outfits for Women 2024.jpeg"
    },
    {
        id: 2,
        name: "Ladies Fashion",
        price: 3000,
        category: "women",
        image: "images/women fashion/1930s Solid Blouse & Suspender Pants.jpeg"
    },
    
    {
        id: 3,
        name: "Ladies Fashion",
        price: 2000,
        category: "women",
        image: "images/women fashion/6544.jpg"
    },
    {
        id: 4,
        name: "Ladies Fashion",
        price: 6000,
        category: "women",
        image: "images/women fashion/7559.jpg"
    },
    
    {
        id: 5,
        name: "Women Fashion",
        price: 1000,
        category: "women",
        image: "images/women fashion/14022.jpg"
    },
    {
        id: 6,
        name: "Women Fashion",
        price: 6000,
        category: "women",
        image: "images/women fashion/15668.jpg"
    },
    {
        id: 7,
        name: "Women Fashion",
        price: 2000,
        category: "women",
        image: "images/women fashion/126774368_Purple jacket made of basic denim -1.jpg"
    },
    {
        id: 8,
        name: "Women Fashion",
        price: 4000,
        category: "women",
        image: "images/women fashion/2150478965.jpg"
    },
    {
        id: 9,
        name: "Women Fashion",
        price: 2000,
        category: "women",
        image: "images/women fashion/Abercrombie & Fitch _ Authentic American clothing since 1892.jpeg"
    },
    {
        id: 10,
        name: "Women T-shirt",
        price: 999,
        category: "women",
        image: "images/women fashion/Download premium png of T-shirts editable mockup, basic wear fashion by jingpixar about mockup  tshirt, mockup, tshirt mockup, t-shirt, and t shirt 9013314.jpeg"
    },
    {
        id: 11,
        name: "Sweat Pant",
        price: 1500,
        category: "men",
        image: "images/men fashion/Hign-concerned Chemical _ None Craft of Weaving….jpeg"
    },
    {
        id: 12,
        name: "Designer Shirt & Pants",
        price: 3000,
        category: "men",
        image: "images/men fashion/whether full opening _ Yes Thickness _ thin….jpeg"
    },
    
    {
        id: 13,
        name: "Gray Suit",
        price: 5000,
        category: "men",
        image: "images/men fashion/Stylish Men Suit.jpeg"
    },
    {
        id: 14,
        name: "Black Shirt",
        price: 2000,
        category: "men",
        image: "images/men fashion/Geswet Four sided elastic explosive men's shirt wrinkle resistant formal wear, no iron long sleeved solid color business men's wear Natural buckle-6-4.jpeg"
    },
    
    {
        id: 15,
        name: "T-shirt",
        price: 1000,
        category: "men",
        image: "images/men fashion/dfac426c-e023-4a7c-b551-ae6f863c8ee6.jpeg"
    },
    {
        id: 16,
        name: "Hooded Jacket",
        price: 1500,
        category: "men",
        image: "images/men fashion/4c614a20-548b-410e-ab51-7cace451b63d.jpeg"
    },
    {
        id: 17,
        name: "Khaki Trousers",
        price: 1000,
        category: "men",
        image: "images/men fashion/2cb15110-fa7c-4ac7-934e-d042b5b2f5e3.jpeg"
    },
    {
        id: 18,
        name: "Kaunda Suit",
        price: 7000,
        category: "men",
        image: "images/men fashion/kaunda.jpeg"
    },
    {
        id: 19,
        name: "Round Neck T-shirt",
        price: 2000,
        category: "men",
        image: "images/men fashion/_Dimitrios Ein Pullover mit klassischem Touch….jpeg"
    },
    {
        id: 20,
        name: "Jeans",
        price: 1000,
        category: "men",
        image: "images/men fashion/men jeans.jpeg"
    },
    {
        id: 21,
        name: "Kids Fashion",
        price: 1500,
        category: "kids",
        image: "images/kids fashion/4aace87d-4a20-4ff7-b3e0-ce58e6238462.jpeg"
    },
    {
        id: 22,
        name: "Kids Fashion",
        price: 2000,
        category: "kids",
        image: "images/kids fashion/174f27e0-5020-470a-88c9-78ff5a1e6a3f.jpeg"
    },
    
    {
        id: 23,
        name: "Kids Fashion",
        price: 2000,
        category: "kids",
        image: "images/kids fashion/Brand Name_ jumping metersAge Range_ 13-24mAge….jpeg"
    },
    {
        id: 24,
        name: "Kids Fashion",
        price: 3000,
        category: "kids",
        image: "images/kids fashion/Get your little fashionista ready for the summer….jpeg"
    },
    
    {
        id: 25,
        name: "Kids Fashion",
        price: 1000,
        category: "kids",
        image: "images/kids fashion/Introducing our exquisite Infant Unisex Just….jpeg"
    },
    {
        id: 26,
        name: "kids Fashion",
        price: 2000,
        category: "kids",
        image: "images/kids fashion/Jackets for Infant Baby Boys Girls Long Sleeve….jpeg"
    },
    {
        id: 27,
        name: "kids Puffed Jacket",
        price: 2000,
        category: "kids",
        image: "images/kids fashion/PRICES MAY VARY_ Fleece Lined Warm & Cozy Puffer….jpeg"
    },
    {
        id: 28,
        name: "kids fashion",
        price: 4000,
        category: "kids",
        image: "images/kids wear no bg.jpg"
    },
    {
        id: 29,
        name: "Nike Air Force",
        price: 3500,
        category: "footwear",
        image: "images/shoes & footwear/- Nike at Simons- From the court to the playground….jpeg"
    },
    {
        id: 30,
        name: "Adidas Samba",
        price: 3999,
        category: "footwear",
        image: "images/shoes & footwear/sambas.jpeg"
    },
    {
        id: 31,
        name: "Leather Slides",
        price: 1500,
        category: "footwear",
        image: "images/shoes & footwear/1a48d357-cf4a-4e35-84b8-59419cd653e7.jpeg"
    },
    {
        id: 32,
        name: "socks",
        price: 600,
        category: "footwear",
        image: "images/shoes & footwear/17ee46ae-aefb-4ddc-a4b2-00c956a3967f.jpeg"
    },
    
    {
        id: 33,
        name: "Kids-Sneakers",
        price: 5000,
        category: "footwear",
        image: "images/shoes & footwear/792994b4-6233-4cb4-becd-16b70150250a.jpeg"
    },
    {
        id: 34,
        name: "Sneakers",
        price: 3000,
        category: "footwear",
        image: "images/shoes & footwear/a13dd564-4fcb-42b7-b981-2092b16b3e02.jpeg"
    },
    
    {
        id: 35,
        name: "Running Shoes",
        price: 2500,
        category: "footwear",
        image: "images/shoes & footwear/Born from the heart of basketball culture and….jpeg"
    },
    {
        id: 36,
        name: "White Sneakers",
        price: 1500,
        category: "footwear",
        image: "images/shoes & footwear/c396a162-c536-4527-863c-ffa305327ebd.jpeg"
    },
    {
        id: 37,
        name: "ankle socks",
        price: 300,
        category: "footwear",
        image: "images/shoes & footwear/de723f00-bcbc-44f7-b2dd-47bf7b4b4502.jpeg"
    },
    {
        id: 38,
        name: "Nike Air Jordan 1 Mid Light Smoke Grey",
        price: 5000,
        category: "footwear",
        image: "images/shoes & footwear/Item_ Nike Air Jordan 1 Mid Light Smoke Grey….jpeg"
    },
    {
        id: 39,
        name: "Sliders",
        price: 2000,
        category: "footwear",
        image: "images/shoes & footwear/Summer Men Slippers Indoor Home Slides Bathroom….jpeg"
    },
    {
        id: 40,
        name: "Sneakers",
        price: 2000,
        category: "footwear",
        image: "images/shoes & footwear/Zapatos para niños_ Zapatos de patinaje para niños….jpeg"
    },
    {
        id: 41,
        name: "Snapback Cap",
        price: 1000,
        category: "accessories",
        image: "images/accessories/💧 [-DATNEWDRIP FIEND CLUB Trucker Snapback-] –….jpeg"
    },
    {
        id: 42,
        name: "Neck Scarf",
        price: 500,
        category: "accessories",
        image: "images/accessories/1ce0e722-0f1f-4e9b-a6b7-9bccd9f5679d.jpeg"
    },
    {
        id: 43,
        name: "Leather Bag",
        price: 1500,
        category: "accessories",
        image: "images/accessories/29c44b46-79cd-41e9-ac23-a4fa0d389f0e.jpeg"
    },
    {
        id: 44,
        name: "Necklace",
        price: 2500,
        category: "accessories",
        image: "images/accessories/682ecb74-7c37-4042-8783-d9c01e141fba.jpeg"
    },
    {
        id: 45,
        name: "Handbag",
        price: 4500,
        category: "accessories",
        image: "images/accessories/b8b53703-a4a6-4022-9a04-f954aa445a8b.jpeg"
    },
    {
        id: 46,
        name: "Chic Adjustable Silver Alphabet Rings",
        price: 3500,
        category: "accessories",
        image: "images/accessories/Chic Adjustable Silver Alphabet Rings - A-Z Initials, Stainless Steel Fashion Jewelry for Women - Resizable _ Platinum _ T.jpeg"
    },
    {
        id: 47,
        name: "Glasses",
        price: 2000,
        category: "accessories",
        image: "images/accessories/Collar    Full Rim Glasses Embellished   Women….jpeg"
    },
    {
        id: 48,
        name: "Marvin",
        price: 400,
        category: "accessories",
        image: "images/accessories/f0a125b5-8f65-456e-81d0-d4cafad6d5a6.jpeg"
    },
    {
        id: 49,
        name: "Wooden Watch",
        price: 2500,
        category: "accessories",
        image: "images/accessories/Product information_ Material_ Wood Target….jpeg"
    },
    {
        id: 50,
        name: "Trucker Cap",
        price: 500,
        category: "accessories",
        image: "images/accessories/ffa89a56-0011-4cdf-b709-21542c4f8952.jpeg"
    }
    
];

window.products = products;

function renderProducts(containerId, category = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filteredProducts = category 
        ? products.filter(p => p.category === category)
        : products;

    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>KES ${product.price.toLocaleString()}</p>
            <button class="buy-btn" data-id="${product.id}">Buy Now</button>
        </div>
    `).join('');

    setupBuyNowButtons(filteredProducts);
}

function setupBuyNowButtons(productsArray) {
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', e => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = productsArray.find(p => p.id === id);
            if (!product) return;

            // Add to cart logic (make sure addToCart() exists globally from cart.js)
            addToCart({
                title: product.name,
                price: product.price,
                image: product.image
            });

            alert(`${product.name} added to cart!`);
        });
    });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        renderProducts('product-list', category);
    }
});



