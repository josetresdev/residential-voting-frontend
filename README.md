# residential-voting-frontend

## Descripción

Este es el cliente frontend del sistema de votaciones web destinado a propietarios de un conjunto residencial. Permite a los usuarios autenticarse, visualizar preguntas activas, emitir su voto de manera segura y consultar los resultados en tiempo real. Está desarrollado utilizando Vue.js 3 y se comunica con el backend en Laravel 11 a través de una API RESTful protegida con tokens JWT.

## Características

- **Autenticación de usuarios:** Inicio de sesión y registro de propietarios mediante un formulario interactivo que se comunica con la API utilizando JWT.
- **Interfaz de votación:** Muestra dinámicamente las preguntas activas y sus opciones disponibles para que los propietarios puedan emitir su voto.
- **Visualización de resultados:** Gráficas y listados que muestran los resultados de las votaciones en tiempo real.
- **Protección de rutas:** Las rutas están protegidas mediante navegación condicional basada en el estado de autenticación del usuario (Vue Router + Vuex).
- **Gestión de estado:** Uso de **Vuex** para manejar el estado global de usuario, preguntas, opciones y resultados.
- **Experiencia responsiva:** Diseño adaptable a distintos tamaños de pantalla, optimizado para dispositivos móviles.
- **Validación de formularios:** Validaciones reactivas al momento de autenticarse o emitir votos.
- **Integración con backend:** Todas las acciones del usuario son enviadas y sincronizadas con el backend desarrollado en Laravel mediante API RESTful protegida con tokens JWT.

## Arquitectura del sistema (Frontend)

El sistema frontend está desarrollado con **Vue.js 3.x** y se comunica con la API backend usando **Axios**. Utiliza **Vue Router** para la gestión de rutas y **Vuex** para el manejo del estado global de la aplicación.

### Rutas

- **/login** → Componente `Login.vue`
- **/register** → Componente `Register.vue`
- **/home** → Componente `Home.vue`
- **/questions** → Componente `QuestionsList.vue`
- **/vote/:id** → Componente `Vote.vue`

Las rutas están definidas en `src/router/index.js`.

### Componentes

- **Login.vue**: Maneja el inicio de sesión.
- **Register.vue**: Gestiona el registro de usuarios.
- **QuestionsList.vue**: Muestra las preguntas de votación.
- **Vote.vue**: Permite emitir votos.
- **AdminDashboard.vue**: Panel de administración.

### Gestión del estado con Vuex

- **auth**: Maneja la autenticación y el token JWT.
- **questions**: Gestiona las preguntas.
- **votes**: Controla los votos y resultados.

### Comunicación con la API

Se usa **Axios** para las solicitudes HTTP. Ejemplos:

- **Autenticación:**

```js
axios.post('/api/login', { email, password }).then(response => { ... });
```

### Rutas y Componentes

El sistema frontend gestiona la interacción entre el usuario y la API mediante **Vue Router**. Las rutas están protegidas por autenticación, garantizando que solo los usuarios registrados puedan acceder a ciertas vistas.

#### Ejemplos de rutas importantes

- **/login** → Componente `Login.vue`
- **/register** → Componente `Register.vue`
- **/home** → Componente `Home.vue`
- **/questions** → Componente `QuestionsList.vue`
- **/vote/:id** → Componente `Vote.vue`

Las rutas del frontend están definidas principalmente en `src/router/index.js`.

### Componentes

Los componentes son responsables de gestionar la lógica del frontend y la interfaz de usuario. Los componentes principales incluyen:

- **Login.vue**: Gestiona el inicio de sesión del usuario.
- **Register.vue**: Permite a los usuarios registrarse en la plataforma.
- **Home.vue**: Página principal que muestra el estado general.
- **QuestionsList.vue**: Muestra las preguntas activas para votar.
- **Vote.vue**: Permite votar por una opción en una pregunta específica.
- **AdminDashboard.vue**: Vista para administración, disponible solo para usuarios con permisos adecuados.

### Gestión de estado con Vuex

Se utiliza **Vuex** para gestionar el estado global de la aplicación. Los módulos principales son:

- **auth**: Gestiona el estado de autenticación y token JWT.
- **questions**: Maneja las preguntas activas y sus opciones.
- **votes**: Controla el envío y visualización de votos.

### Comunicación con la API

El frontend se comunica con la API backend usando **Axios** para realizar solicitudes HTTP. Ejemplos:

- **Autenticación:**

```js
axios.post('/api/login', { email, password }).then(response => { ... });
```

## Tecnologías

- **Frontend:** Vue.js (v3.2.13)
- **Estado global:** Vuex
- **Rutas:** Vue Router
- **Estilos:** Sass (SCSS)
- **Pruebas unitarias:** Jest
- **Pruebas end-to-end:** Cypress
- **Transacciones HTTP:** Axios
- **Linter:** ESLint
- **Control de versiones:** Git y GitHub

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js** (v16 o superior)
- **npm** para gestionar las dependencias de frontend
- **Vue CLI** para la creación y gestión del proyecto Vue.js
- **Git** para la gestión del código fuente
- **Editor de código** recomendado: Visual Studio Code o cualquier editor compatible con Vue.js y JavaScript

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/josetresdev/residential-voting-frontend.git
cd residential-voting-frontend
```

## Backend

Este es el **Frontend** de la aplicación. El **Backend** correspondiente a este sistema de votaciones está disponible en el siguiente repositorio:

[**residential-voting-api**](https://github.com/josetresdev/residential-voting-api)

Este repositorio está desarrollado en **Laravel 11** y se comunica con el frontend para gestionar usuarios, preguntas, votos y mostrar los resultados en tiempo real.

### Interacción con la API

El **Frontend** consume la API del backend para gestionar las votaciones, usuarios y resultados. El sistema sigue una arquitectura **RESTful** y el backend maneja las rutas de la API para que el frontend pueda realizar operaciones como autenticación, obtención de preguntas y emisión de votos.

### Colección de Postman

La colección de Postman para interactuar con la API se encuentra en el archivo `resources/collections/VotingAPICollection.json`. Este archivo contiene todas las rutas y métodos disponibles en el sistema, lo que facilita la prueba y exploración de la API.

Puedes importar esta colección directamente en Postman para realizar pruebas de manera rápida y efectiva.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar en el proyecto, sigue estos pasos:

1. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
2. Realiza tus cambios y haz commit (`git commit -am 'Añadida nueva funcionalidad'`).
3. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
4. Crea un pull request en GitHub.

## Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo `LICENSE` para más detalles.

## Autor

Este proyecto fue desarrollado por **Jose Trespalacios**. Puedes contactarme a través del correo electrónico: [josetrespalaciosbedoya@gmail.com](mailto:josetrespalaciosbedoya@gmail.com).

## Desarrollador responsable

El desarrollo y mantenimiento de este sistema está bajo la responsabilidad de **Jose Trespalacios**. Cualquier contribución, mejora o reporte de errores debe ser dirigida a la misma dirección de contacto o a través del repositorio en GitHub.
