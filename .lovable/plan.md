

## Catálogo Premium de Servicios Digitales

### Diseño Visual
- **Tema negro + dorado** con variables CSS para fácil personalización
- Tipografía elegante, tarjetas con bordes dorados sutiles, sombras y brillos
- 100% responsive (móvil, tablet, escritorio)
- Estética lujosa, moderna y profesional

### Secciones de la Página

1. **Hero Principal** — Título llamativo, subtítulo, botón "Ver Catálogo", fondo oscuro elegante con detalles dorados

2. **Catálogo de Productos** — Grid responsive con los 14 productos (Netflix, Disney+, Spotify, etc.) como tarjetas premium con logo/icono, nombre, duración, precio y botón "Agregar al carrito"

3. **Carrito / Resumen del Pedido** — Panel lateral en desktop, drawer en móvil. Muestra productos agregados, subtotal, descuento combo ($2.000 × cada producto adicional), y total final. Botón "Enviar pedido por WhatsApp"

4. **Beneficios** — Sección con iconos: Atención rápida, Activación sencilla, Catálogo premium, Soporte WhatsApp, Compra segura

5. **Footer** — Contacto, enlace WhatsApp, diseño sobrio

### Lógica del Carrito
- Agregar/eliminar productos
- Contador de items visible
- Descuento combo automático: `(cantidad - 1) × $2.000`
- Subtotal, descuento y total final visibles

### Pedido por WhatsApp
- Botón genera mensaje formateado con lista de productos, subtotal, descuento y total
- Abre WhatsApp Web/App en nueva pestaña
- Número editable en constante: `573175287585`

### Personalización Fácil
- Todos los productos en un array centralizado con: nombre, precio, duración, imagen, categoría, etiqueta
- Variables CSS en `:root` para colores, bordes, sombras
- Nombre del negocio y WhatsApp como constantes editables

### Nota sobre Hostinger
- Al hacer build en Lovable, se genera una carpeta con archivos estáticos compatibles con Hostinger
- También puedes publicar directamente desde Lovable con un dominio personalizado

