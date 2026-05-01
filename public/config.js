// ARCHIVO DE CONFIGURACIÓN GLOBAL
// ============================================
// Este archivo puede ser editado directamente en Hostinger.
// NO necesitas recompilar la página web para ver los cambios.
// Simplemente edita los valores entre comillas y guarda el archivo.
// Al recargar la página web, los cambios se reflejarán de inmediato.

window.AppConfig = {
    // 1. INFORMACIÓN DEL NEGOCIO
    businessName: "Streaming Alen",
    whatsappNumber: "573175287585", // Código de país + número, sin espacios ni el signo +
    comboDiscountPerItem: 2000,     // Descuento por cada producto adicional en el carrito

    // 2. SEO Y METADATOS (Afecta cómo se ve tu web en Google y al compartir enlaces)
    metaTitle: "Streaming Alen | Entretenimiento Premium",
    metaDescription: "Las mejores plataformas de streaming y herramientas digitales. Cuentas 100% originales con activación inmediata.",

    // 3. IMÁGENES
    // Si subes una nueva imagen a la carpeta "images/" en Hostinger, 
    // cambia el nombre aquí (ej: "/images/nuevo-logo.png")
    logoUrl: "/images/logo.jpg",

    // 4. CATÁLOGO DE PRODUCTOS
    // Puedes agregar, editar el precio o eliminar productos aquí.
    // Asegúrate de respetar las comas y comillas.
    products: [
        {
            id: "netflix-premium",
            name: "Netflix Premium",
            price: 15000,
            originalPrice: 19000,
            duration: "1 mes",
            category: "Streaming",
            icon: "🎬",
            imageUrl: "/imagenes productos/netflix.jpg",
            color: "from-red-600 to-red-800",
            tag: "Popular",
        },
        {
            id: "disney-premium",
            name: "Disney+ Premium",
            price: 12000,
            originalPrice: 18000,
            duration: "1 mes",
            category: "Streaming",
            icon: "✨",
            imageUrl: "/imagenes productos/disney.jpg",
            color: "from-blue-600 to-blue-800",
        },
        {
            id: "amazon-prime",
            name: "Amazon Prime Video",
            price: 8000,
            originalPrice: 13000,
            duration: "1 mes",
            category: "Streaming",
            icon: "📦",
            imageUrl: "/imagenes productos/De todo un poquito (500 x 500 px) (18).jpg",
            color: "from-cyan-600 to-cyan-800",
        },
        {
            id: "hbo-max",
            name: "HBO Max",
            price: 9000,
            originalPrice: 14000,
            duration: "1 mes",
            category: "Streaming",
            icon: "🎭",
            imageUrl: "/imagenes productos/hbo max.jpg",
            color: "from-purple-600 to-purple-800",
        },
        {
            id: "spotify-1mes",
            name: "Spotify",
            price: 10000,
            originalPrice: 15000,
            duration: "1 mes",
            category: "Música",
            icon: "🎵",
            imageUrl: "/imagenes productos/spotify premium.jpg",
            color: "from-green-600 to-green-800",
        },
        {
            id: "spotify-3meses",
            name: "Spotify",
            price: 25500,
            originalPrice: 33000,
            duration: "3 meses",
            category: "Música",
            icon: "🎵",
            imageUrl: "/imagenes productos/spotify premium.jpg",
            color: "from-green-600 to-green-800",
            tag: "Ahorra",
        },
        {
            id: "crunchyroll",
            name: "Crunchyroll",
            price: 7000,
            originalPrice: 11000,
            duration: "1 mes",
            category: "Streaming",
            icon: "🍥",
            imageUrl: "/imagenes productos/crunchyroll.jpg",
            color: "from-orange-500 to-orange-700",
        },
        {
            id: "vix-premium",
            name: "ViX Premium",
            price: 8000,
            originalPrice: 13000,
            duration: "1 mes",
            category: "Streaming",
            icon: "📺",
            imageUrl: "/imagenes productos/vix.jpg",
            color: "from-amber-500 to-amber-700",
        },
        {
            id: "paramount",
            name: "Paramount+",
            price: 8000,
            originalPrice: 13000,
            duration: "1 mes",
            category: "Streaming",
            icon: "⭐",
            imageUrl: "/imagenes productos/paramount.jpg",
            color: "from-blue-500 to-blue-700",
        },
        {
            id: "youtube-1mes",
            name: "YouTube Premium",
            price: 12000,
            originalPrice: 17000,
            duration: "1 mes",
            category: "Streaming",
            icon: "▶️",
            imageUrl: "/imagenes productos/youtube premium.jpg",
            color: "from-red-500 to-red-700",
        },
        {
            id: "youtube-3meses",
            name: "YouTube Premium",
            price: 31000,
            originalPrice: 42000,
            duration: "3 meses",
            category: "Streaming",
            icon: "▶️",
            imageUrl: "/imagenes productos/youtube premium.jpg",
            color: "from-red-500 to-red-700",
            tag: "Ahorra",
        },
        {
            id: "chatgpt",
            name: "ChatGPT a Dominio",
            price: 25000,
            originalPrice: 35000,
            category: "Productividad",
            icon: "🤖",
            imageUrl: "/imagenes productos/chat gpt plus.jpg",
            color: "from-emerald-500 to-emerald-700",
            tag: "Nuevo",
        },
        {
            id: "canva-pro",
            name: "Canva Pro 6 Meses",
            price: 20000,
            originalPrice: 30000,
            duration: "6 meses",
            category: "Productividad",
            icon: "🎨",
            imageUrl: "/imagenes productos/canva pro 6 meses.jpg",
            color: "from-violet-500 to-violet-700",
        },
        {
            id: "office-365",
            name: "Office 365",
            price: 45000,
            originalPrice: 60000,
            duration: "Anual",
            category: "Productividad",
            icon: "📊",
            imageUrl: "/imagenes productos/office 365 anual.jpg",
            color: "from-orange-600 to-orange-800",
            tag: "Premium",
        }
    ]
};
