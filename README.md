# 🚀 Proyecto Sprint 7, 8, 9, 10, 11 y 12 - Web Interactiva con POO y JavaScript Asíncrono

Una evolución progresiva del proyecto anterior, donde no solo se integran funcionalidades dinámicas sino también un enfoque profesional de arquitectura con **Programación Orientada a Objetos avanzada (POO)**, la incorporación de **JavaScript Asíncrono** y manejo de **APIs** mediante llamadas HTTP, junto con herramientas modernas como **NPM** para una mejor gestión del código y dependencias. Se trata de una página web interactiva enfocada en perfiles de usuario, con opciones para agregarlos, editarlos, eliminarlos y reaccionar a ellos. 💬👥

---

## 🧰 Tecnologías Utilizadas

| Herramienta                      | Descripción breve                                            |
| -------------------------------- | ------------------------------------------------------------ |
| 🎨 **Figma**                     | Diseño y prototipado de interfaz                             |
| 🌐 **HTML**                      | Estructura básica del sitio                                  |
| 🎨 **CSS**                       | Estilos visuales y animaciones                               |
| 🔄 **Metodología BEM**           | Organización escalable de clases CSS                         |
| 🧱 **CSS Grid**                  | Sistema de maquetado flexible                                |
| 📱 **Responsive Design**         | Adaptabilidad a diferentes dispositivos                      |
| 🧠 **JavaScript (POO avanzada)** | Estructura del proyecto basada en clases modulares           |
| 🔄 **JavaScript Asíncrono**      | Manejo de promesas, async/await y procesos no bloqueantes    |
| 🌐 **APIs REST**                 | Comunicación con backend para CRUD y sincronización de datos |
| 📦 **NPM**                       | Gestión de dependencias y scripts de construcción            |
| 🧾 **Validación de Formularios** | Control y validación de entradas del usuario                 |
| 🛠️ **GIT**                       | Control de versiones y trabajo colaborativo                  |

---

## ⚙️ Módulo: JavaScript Asíncrono y Trabajando con APIs

Este módulo es fundamental para comprender y manejar la interacción dinámica con servidores y recursos remotos mediante llamadas asíncronas, fundamentales para aplicaciones web modernas.

### Conceptos y prácticas cubiertas:

- **JavaScript Asíncrono:**
  - Uso de _Promises_, `async` / `await` para manejar procesos que toman tiempo sin bloquear la interfaz.
  - Manejo adecuado de errores y estados de carga.
- **Fetch API y Requests HTTP:**
  - Realización de solicitudes GET, POST, PATCH, DELETE para obtener, crear, modificar o eliminar recursos.
  - Configuración de encabezados, cuerpos JSON, y autenticación (token Bearer).
- **Diseño orientado a objetos para consumo de APIs:**
  - Clase `Api` que encapsula toda la lógica para interactuar con el backend.
  - Métodos específicos para obtener usuario, actualizar perfil, gestionar tarjetas (crear, eliminar, dar like).
- **Integración con UI:**
  - Actualización dinámica de la interfaz con datos recibidos del servidor.
  - Sincronización del estado local con el estado remoto.
- **UX mejorada mediante feedback visual:**
  - Indicadores de carga en botones.
  - Mensajes y control en caso de errores o confirmaciones.

### Beneficios logrados:

- Código más limpio, modular y mantenible.
- Experiencia de usuario fluida y moderna.
- Bases sólidas para escalabilidad y futuras integraciones.

---

## ✨ Descripción del Proyecto

> Esta aplicación web representa una interfaz moderna para manejar perfiles de usuarios, donde el usuario puede:

- ➕ **Añadir nuevos perfiles**
- ❌ **Eliminar tarjetas existentes**
- ✏️ **Editar información del perfil**
- ❤️ **Marcar perfiles como favoritos**
- 🔍 **Ver imágenes en pantalla completa**
- ❌ **Cerrar popups con Escape o clic en la superposición**

Todo esto se implementa con una arquitectura orientada a objetos en JavaScript, dividiendo responsabilidades en clases específicas, facilitando el mantenimiento y escalabilidad del proyecto.

---

## 💡 Mejora clave: Programación Orientada a Objetos y Modularización

El proyecto fue refactorizado profundamente usando principios avanzados de **POO en JavaScript** junto con **modularización mediante ES Modules y herramientas de entorno profesional como NPM**.

### Características implementadas:

- 🔹 **Encapsulación**: Cada componente (Card, Form, Popup, UserInfo) maneja sus propios datos y métodos.
- 🔹 **Herencia y composición**: Clases como `PopupWithImage`, `PopupWithForm` extienden de una clase base `Popup`, reutilizando y personalizando funcionalidad.
- 🔹 **Responsabilidad única**: Cada clase tiene una única responsabilidad (principio SRP).
- 🔹 **Uso de NPM**:
  - Scripts de desarrollo: `npm run build`, `npm run start`
  - Estructura moderna del proyecto (`package.json`, `modules`, `dist`)
  - Posible integración de herramientas como Webpack y Babel

---

## 📸 Vista Previa (opcional)

_![Demo de la app](images/moved_project-4-01-eng.gif)
_

---

## 📂 Estructura del Código

```plaintext
📁 proyecto/
├── 📁 blocks/                   # Estilos CSS modulares organizados por componentes (BEM)
│   ├── cards.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   ├── profile.css
│
├── 📁 images/                  # Recursos gráficos
│
├── 📁 pages/
│   └── index.css              # Estilos globales
│
├── 📁 scripts/
│   ├── index.js               # Punto de entrada del proyecto
│   ├── utils.js               # Utilidades y configuración global
│   ├── Api.js                 # Clase para manejo de API REST y llamadas asíncronas
│   └── 📁 components/         # Clases modulares (POO)
│       ├── Card.js
│       ├── FormValidator.js
│       ├── Popup.js
│       ├── PopupWithForm.js
│       ├── PopupWithImage.js
│       ├── PopupWithConfirmation.js
│       ├── Section.js
│       └── UserInfo.js
│
├── 📁 vendor/                 # Recursos de terceros (si aplica)
│   └── 📁 fonts/              # Estilos y tipografías
│   ├── normalize.css           # Reset de estilos
├── 📄 index.html              # Página principal
├── 📄 package.json            # Configuración NPM
├── 📄 .gitignore              # Archivos y carpetas ignoradas por Git
├── 📄 README.md               # Este documento
└── 📄 favicon.ico             # Ícono del sitio

```

🌐 **Ver el proyecto en línea:**  
👉 [https://carlosduro.github.io/web_project_around/](https://carlosduro.github.io/web_project_around/)
