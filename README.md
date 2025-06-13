# 🚀 Proyecto Sprint 7, 8, 9 y 10 - Web Interactiva con POO

UUna evolución del sprint anterior donde añadimos funcionalidades dinámicas para enriquecer la experiencia del usuario. Se trata de una página web enfocada en perfiles con la posibilidad de agregar, quitar y reaccionar a cada uno de ellos. 💬👥

Además, se incorporan principios de Programación Orientada a Objetos (POO) para mejorar la estructura, escalabilidad y mantenibilidad del código.

---

## 🧰 Tecnologías Utilizadas

| Herramienta                      | Descripción breve                                     |
| -------------------------------- | ----------------------------------------------------- |
| 🎨 **Figma**                     | Diseño y prototipado de interfaz                      |
| 🌐 **HTML**                      | Estructura básica del sitio                           |
| 🎨 **CSS**                       | Estilos visuales y animaciones                        |
| 🔄 **Metodología BEM**           | Organización escalable de clases CSS                  |
| 🧱 **CSS Grid**                  | Sistema de maquetado                                  |
| 📱 **Responsive Design**         | Adaptabilidad a diferentes dispositivos               |
| 🧠 **JavaScript (POO)**          | Lógica orientada a objetos para el manejo de perfiles |
| 🧾 **Validación de Formularios** | Control y validación de entradas                      |
| 🛠️ **GIT**                       | Control de versiones y trabajo colaborativo           |

---

## ✨ Descripción del Proyecto

> Esta página web busca representar perfiles de usuarios con una interfaz moderna y funcionalidades prácticas. Los usuarios pueden:

- ➕ **Añadir nuevos perfiles**
- ❌ **Eliminar tarjetas existentes**
- ❤️ **Marcar perfiles como favoritos**

Todo esto se logra gracias a **JavaScript**, que permite manejar dinámicamente los elementos del DOM, y refleja el avance de conocimientos adquiridos en este **Sprint 5**.

Además, se continúa sobre el proyecto base del sprint anterior, extendiéndolo con nuevas características e interacciones que lo vuelven más rico y funcional.

## 💡 Mejora clave: Programación Orientada a Objetos

La lógica de manejo de perfiles se ha reestructurado usando clases en JavaScript, aplicando:

Encapsulación: Cada perfil es una instancia de una clase Perfil, que mantiene sus propios datos y métodos privados, ocultando la complejidad interna.

Herencia: Se definió una clase base ComponenteUI, que encapsula comportamientos comunes como renderizado, y es extendida por clases específicas como TarjetaPerfil.

Polimorfismo: Distintas clases hijas redefinen el método render() para personalizar cómo se muestra cada tipo de perfil (e.g. estándar, favorito).

Modularidad y Reutilización: Esto permite una arquitectura más clara, flexible y lista para escalar nuevas funcionalidades como perfiles verificados, perfiles destacados, etc.

---

## 📸 Vista Previa (opcional)

_![Demo de la app](images/moved_project-4-01-eng.gif)
_

---

## 📂 Estructura del Código

```plaintext
📁 proyecto/
├── 📁 blocks/                   # Estilos CSS modulares organizados por componentes (BEM)
│   ├── cards.css               # Estilos para las tarjetas de perfil
│   ├── footer.css              # Estilos del pie de página
│   ├── header.css              # Estilos del encabezado
│   ├── page.css                # Estilos generales de la página
│   ├── popup.css               # Estilos para ventanas emergentes (modales)
│   ├── profile.css             # Estilos para la sección de perfil de usuario
│
├── 📁 images/                  # Imágenes e íconos usados en la interfaz
│   └── moved_project-4-01-eng.gif
│
├── 📁 pages/                   # Archivos relacionados con vistas HTML y sus estilos
│   └── index.css              # Estilos globales asociados a la página principal
│
├── 📁 scripts/                 # Código JavaScript modularizado y orientado a objetos
│   ├── index.js               # Punto de entrada principal del proyecto
│   ├── Card.js                # Clase para generar y gestionar tarjetas de usuario (POO)
│   ├── FormValidator.js       # Clase para validar formularios dinámicamente
│   └── utils.js               # Funciones utilitarias generales (helpers)
│
├── 📁 vendor/                 # Librerías o recursos de terceros (si aplica)
│
├── 📄 index.html              # Estructura HTML principal del sitio
├── 📄 favicon.ico             # Ícono del sitio web
├── 📄 README.md               # Documentación del proyecto (tú estás aquí)
└── 📄 .DS_Store               # Archivo oculto generado por macOS (puede ignorarse)

```

🌐 **Ver el proyecto en línea:**  
👉 [https://carlosduro.github.io/web_project_around/](https://carlosduro.github.io/web_project_around/)
