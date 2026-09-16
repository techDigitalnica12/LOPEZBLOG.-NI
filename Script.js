// Tasa fija: $1.00 USD = C$ 40.00 NIO
const EXCHANGE_RATE = 40.00;
const RECEIVER_WHATSAPP = "50588385491";

const baseCatalog = [
    {
        id: "ff",
        name: "Free Fire",
        category: "juegos",
        logo: "logo-free-fire.png",
        packages: [
            { name: "100 + 10 Diamantes", usdPrice: 1.20 },
            { name: "310 + 31 Diamantes", usdPrice: 3.50 },
            { name: "520 + 52 Diamantes", usdPrice: 5.50 },
            { name: "1,060 + 106 Diamantes", usdPrice: 10.50 },
            { name: "2,180 + 218 Diamantes", usdPrice: 21.00 },
            { name: "5,600 + 560 Diamantes", usdPrice: 52.00 },
            { name: "Pase Nivelación", usdPrice: 3.00 },
            { name: "Tarjeta Semanal", usdPrice: 2.20 },
            { name: "Tarjeta Mensual", usdPrice: 10.00 }
        ]
    },
    {
        id: "mlbb",
        name: "Mobile Legends",
        category: "juegos",
        logo: "logo-mobile-legends.png",
        packages: [
            { name: "11 Diamantes", usdPrice: 0.30 },
            { name: "56 Diamantes", usdPrice: 1.10 },
            { name: "86 Diamantes", usdPrice: 1.80 },
            { name: "256 + 40 Diamantes", usdPrice: 5.00 },
            { name: "514 + 88 Diamantes", usdPrice: 10.00 },
            { name: "706 + 133 Diamantes", usdPrice: 14.00 },
            { name: "2,195 + 368 Diamantes", usdPrice: 42.00 },
            { name: "Pase Semanal de Diamantes", usdPrice: 2.20 },
            { name: "Pase Crepúsculo (Twilight Pass)", usdPrice: 10.00 }
        ]
    },
    {
        id: "pubg",
        name: "PUBG Mobile",
        category: "juegos",
        logo: "logo-pubg-mobile.png",
        packages: [
            { name: "60 UC", usdPrice: 1.10 },
            { name: "325 UC", usdPrice: 5.20 },
            { name: "660 UC", usdPrice: 10.50 },
            { name: "1,800 UC", usdPrice: 26.00 },
            { name: "3,850 UC", usdPrice: 52.00 },
            { name: "8,100 UC", usdPrice: 105.00 }
        ]
    },
    {
        id: "codm",
        name: "Call of Duty Mobile",
        category: "juegos",
        logo: "logo-cod-mobile.png",
        packages: [
            { name: "80 CP", usdPrice: 1.20 },
            { name: "420 CP", usdPrice: 5.50 },
            { name: "880 CP", usdPrice: 11.00 },
            { name: "2,400 CP", usdPrice: 26.00 },
            { name: "5,000 CP", usdPrice: 52.00 },
            { name: "10,800 CP", usdPrice: 105.00 }
        ]
    },
    {
        id: "genshin",
        name: "Genshin Impact",
        category: "juegos",
        logo: "logo-genshin-impact.png",
        packages: [
            { name: "Bendición de la Luna Welkin", usdPrice: 5.50 },
            { name: "60 Cristales Génesis", usdPrice: 1.20 },
            { name: "300 + 30 Cristales Génesis", usdPrice: 5.50 },
            { name: "980 + 110 Cristales Génesis", usdPrice: 16.50 },
            { name: "1,980 + 260 Cristales Génesis", usdPrice: 32.00 },
            { name: "3,280 + 600 Cristales Génesis", usdPrice: 52.00 },
            { name: "6,480 + 1,600 Cristales Génesis", usdPrice: 105.00 }
        ]
    },
    {
        id: "hok",
        name: "Honor of Kings",
        category: "juegos",
        logo: "logo-honor-of-kings.png",
        packages: [
            { name: "80 + 8 Fichas", usdPrice: 1.20 },
            { name: "240 + 24 Fichas", usdPrice: 3.50 },
            { name: "400 + 40 Fichas", usdPrice: 5.50 },
            { name: "800 + 80 Fichas", usdPrice: 11.00 },
            { name: "1,200 + 120 Fichas", usdPrice: 16.50 },
            { name: "2,400 + 240 Fichas", usdPrice: 32.00 },
            { name: "4,000 + 400 Fichas", usdPrice: 52.00 }
        ]
    },
    {
        id: "roblox",
        name: "Roblox",
        category: "juegos",
        logo: "logo-roblox.png",
        packages: [
            { name: "80 Robux", usdPrice: 1.20 },
            { name: "400 Robux", usdPrice: 5.50 },
            { name: "800 Robux", usdPrice: 11.00 },
            { name: "1,700 Robux", usdPrice: 22.00 },
            { name: "4,500 Robux", usdPrice: 52.00 },
            { name: "10,000 Robux", usdPrice: 105.00 }
        ]
    },
    {
        id: "blood",
        name: "Blood Strike",
        category: "juegos",
        logo: "logo-blood-strike.png",
        packages: [
            { name: "100 + 10 Oro", usdPrice: 1.10 },
            { name: "300 + 30 Oro", usdPrice: 3.20 },
            { name: "500 + 50 Oro", usdPrice: 5.20 },
            { name: "1,000 + 100 Oro", usdPrice: 10.50 },
            { name: "2,000 + 200 Oro", usdPrice: 21.00 },
            { name: "5,000 + 500 Oro", usdPrice: 52.00 }
        ]
    },
    {
        id: "clash",
        name: "Clash Royale",
        category: "juegos",
        logo: "logo-clash-royale.png",
        packages: [
            { name: "80 Gemas", usdPrice: 1.20 },
            { name: "500 Gemas", usdPrice: 5.50 },
            { name: "1,200 Gemas", usdPrice: 11.00 },
            { name: "2,500 Gemas", usdPrice: 22.00 },
            { name: "6,500 Gemas", usdPrice: 52.00 },
            { name: "14,000 Gemas", usdPrice: 105.00 },
            { name: "Pass Royale (Oro)", usdPrice: 6.50 },
            { name: "Pass Royale (Diamante)", usdPrice: 13.00 }
        ]
    },
    {
        id: "gplay",
        name: "Google Play Cards",
        category: "tarjetas",
        logo: "logo-google-play.png",
        packages: [
            { name: "Gift Card $5 USD", usdPrice: 5.00 },
            { name: "Gift Card $10 USD", usdPrice: 10.00 },
            { name: "Gift Card $15 USD", usdPrice: 15.00 },
            { name: "Gift Card $25 USD", usdPrice: 25.00 },
            { name: "Gift Card $50 USD", usdPrice: 50.00 },
            { name: "Gift Card $100 USD", usdPrice: 100.00 }
        ]
    },
    {
        id: "netflix",
        name: "Netflix",
        category: "streaming",
        logo: "logo-netflix.png",
        packages: [
            { name: "Perfil 1 Mes (HD/4K)", usdPrice: 3.50 },
            { name: "Cuenta Completa 1 Mes (4 Pantallas)", usdPrice: 10.00 },
            { name: "Gift Card $15 USD", usdPrice: 15.00 },
            { name: "Gift Card $25 USD", usdPrice: 25.00 }
        ]
    },
    {
        id: "disney",
        name: "Disney+",
        category: "streaming",
        logo: "logo-disney.png",
        packages: [
            { name: "Perfil Estándar 1 Mes", usdPrice: 3.00 },
            { name: "Perfil Premium 1 Mes", usdPrice: 4.00 },
            { name: "Cuenta Completa 1 Mes", usdPrice: 8.50 }
        ]
    },
    {
        id: "prime",
        name: "Prime Video",
        category: "streaming",
        logo: "logo-primevideo.png",
        packages: [
            { name: "Perfil 1 Mes", usdPrice: 1.50 },
            { name: "Cuenta Completa 1 Mes", usdPrice: 2.50 }
        ]
    },
    {
        id: "hbomax",
        name: "HBO Max (Max)",
        category: "streaming",
        logo: "logo-hbomax.png",
        packages: [
            { name: "Perfil 1 Mes", usdPrice: 3.00 },
            { name: "Cuenta Completa 1 Mes", usdPrice: 7.00 }
        ]
    },
    {
        id: "crunchy",
        name: "Crunchyroll",
        category: "streaming",
        logo: "logo-crunchyroll.png",
        packages: [
            { name: "Perfil Fan 1 Mes", usdPrice: 2.00 },
            { name: "Cuenta Mega Fan 1 Mes", usdPrice: 3.50 }
        ]
    },
    {
        id: "spotify",
        name: "Spotify Premium",
        category: "streaming",
        logo: "logo-spotify.png",
        packages: [
            { name: "Plan Individual 1 Mes", usdPrice: 3.00 },
            { name: "Plan Duo 1 Mes", usdPrice: 4.50 },
            { name: "Plan Familiar 1 Mes", usdPrice: 6.00 }
        ]
    },
    {
        id: "youtube",
        name: "YouTube Premium",
        category: "streaming",
        logo: "logo-youtube.png",
        packages: [
            { name: "Plan Individual 1 Mes", usdPrice: 3.00 },
            { name: "Plan Familiar 1 Mes", usdPrice: 6.00 }
        ]
    }
];

let cart = [];

// Variables DOM global
let productsGrid, cartBtn, closeCart, cartSidebar, overlay;
let cartCount, cartItemsContainer, cartTotalElement, checkoutBtn;
let filterBtns, checkoutModal, closeModal, orderForm;

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos del DOM
    productsGrid = document.getElementById('productsGrid');
    cartBtn = document.getElementById('cartBtn');
    closeCart = document.getElementById('closeCart');
    cartSidebar = document.getElementById('cartSidebar');
    overlay = document.getElementById('overlay');
    cartCount = document.getElementById('cartCount');
    cartItemsContainer = document.getElementById('cartItems');
    cartTotalElement = document.getElementById('cartTotal');
    checkoutBtn = document.getElementById('checkoutBtn');
    filterBtns = document.querySelectorAll('.filter-btn');
    checkoutModal = document.getElementById('checkoutModal');
    closeModal = document.getElementById('closeModal');
    orderForm = document.getElementById('orderForm');

    displayProducts(baseCatalog);
    setupEventListeners();
});

function displayProducts(items) {
    productsGrid.innerHTML = '';
    items.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        let optionsHTML = product.packages.map((pkg, index) => {
            const nioPrice = (pkg.usdPrice * EXCHANGE_RATE).toFixed(2);
            return `<option value="${index}">${pkg.name} - C$ ${nioPrice} NIO</option>`;
        }).join('');

        const initialPrice = (product.packages[0].usdPrice * EXCHANGE_RATE).toFixed(2);

        card.innerHTML = `
            <div>
                <div class="product-card-header">
                    <img src="${product.logo}" alt="${product.name}" class="game-icon">
                    <div>
                        <h3>${product.name}</h3>
                    </div>
                </div>
                <div class="package-select-group">
                    <label>Selecciona Opción / Cantidad:</label>
                    <select class="package-dropdown" id="select-${product.id}">
                        ${optionsHTML}
                    </select>
                </div>
            </div>
            <div>
                <div class="product-price" id="price-${product.id}">C$ ${initialPrice} NIO</div>
                <button class="add-to-cart" data-id="${product.id}">Añadir al Carrito</button>
            </div>
        `;
        productsGrid.appendChild(card);

        // Event listener seguro para el selector de paquetes
        const selectElem = card.querySelector(`#select-${product.id}`);
        selectElem.addEventListener('change', () => updateCardPrice(product.id));

        // Event listener seguro para el botón
        const btnElem = card.querySelector('.add-to-cart');
        btnElem.addEventListener('click', () => addToCartFromCard(product.id));
    });
}

function updateCardPrice(productId) {
    const product = baseCatalog.find(p => p.id === productId);
    const select = document.getElementById(`select-${productId}`);
    const selectedPkg = product.packages[select.value];
    const priceDisplay = document.getElementById(`price-${productId}`);
    
    const nioPrice = (selectedPkg.usdPrice * EXCHANGE_RATE).toFixed(2);
    priceDisplay.textContent = `C$ ${nioPrice} NIO`;
}

function addToCartFromCard(productId) {
    const product = baseCatalog.find(p => p.id === productId);
    const select = document.getElementById(`select-${productId}`);
    const selectedPkg = product.packages[select.value];

    const itemNioPrice = selectedPkg.usdPrice * EXCHANGE_RATE;
    const cartItemId = `${product.id}-${select.value}`;

    const existing = cart.find(item => item.cartItemId === cartItemId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            gameName: product.name,
            packageName: selectedPkg.name,
            nioPrice: itemNioPrice,
            quantity: 1
        });
    }

    updateCartUI();
    openCartSidebar();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">El carrito está vacío.</p>';
        cartTotalElement.textContent = 'C$ 0.00 NIO';
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false;
    let totalNIO = 0;

    cart.forEach(item => {
        const subtotal = item.nioPrice * item.quantity;
        totalNIO += subtotal;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>
                <h4>${item.gameName}</h4>
                <small>${item.packageName}</small><br>
                <small style="color:var(--primary)">C$ ${item.nioPrice.toFixed(2)} x ${item.quantity}</small>
            </div>
            <button class="remove-btn" data-cartid="${item.cartItemId}" style="background:none; border:none; color:#ff4d4d; cursor:pointer;">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Event listener para eliminar del carrito
        const removeBtn = cartItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => removeFromCart(item.cartItemId));
    });

    cartTotalElement.textContent = `C$ ${totalNIO.toFixed(2)} NIO`;
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    updateCartUI();
}

function openCartSidebar() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    if (!checkoutModal.classList.contains('active')) {
        overlay.classList.remove('active');
    }
}

function openModal() {
    closeCartSidebar();
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
}

function closeModalWindow() {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
}

function sanitizeInput(str) {
    return str.replace(/[^\w\s\-\#]/gi, '').trim();
}

function setupEventListeners() {
    cartBtn.addEventListener('click', openCartSidebar);
    closeCart.addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', () => {
        closeCartSidebar();
        closeModalWindow();
    });

    checkoutBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalWindow);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-category');
            if (category === 'all') {
                displayProducts(baseCatalog);
            } else {
                const filtered = baseCatalog.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const paymentMethod = sanitizeInput(document.querySelector('input[name="paymentMethod"]:checked').value);
        const rawPlayerId = document.getElementById('playerIdInput').value;
        const playerId = sanitizeInput(rawPlayerId);

        let message = `*NUEVO PEDIDO DE RECARGA*\n\n`;
        message += `*ID / UID Jugador:* ${playerId}\n`;
        message += `*Método de Pago Elegido:* ${paymentMethod}\n\n`;
        message += `*DETALLES DEL PRODUCTO:*\n`;

        cart.forEach(item => {
            message += `- ${item.gameName} [${item.packageName}] (Cant: ${item.quantity}) - C$ ${(item.nioPrice * item.quantity).toFixed(2)} NIO\n`;
        });

        message += `\n*TOTAL A PAGAR:* ${cartTotalElement.textContent}`;

        const waUrl = `https://wa.me/${RECEIVER_WHATSAPP}?text=${encodeURIComponent(message)}`;

        window.open(waUrl, '_blank', 'noopener,noreferrer');

        cart = [];
        updateCartUI();
        closeModalWindow();
        orderForm.reset();
    });
        }
