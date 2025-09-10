# 📒 Notes App

Aplicación de notas desarrollada con **Spring Boot (backend)**, **React + Vite (frontend)** y **SQL Server (Docker)**.  
Este documento describe los requisitos, las herramientas necesarias y los pasos para ejecutar la aplicación en un entorno local.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar la aplicación asegúrate de contar con lo siguiente instalado en tu máquina:

- **Docker**: 27.0.3  
- **Docker Compose**: 2.29.2  
- **Java**: OpenJDK 17 o superior (probado con JDK 17.0.12)  
- **Maven**: 3.9.9 (opcional, ya que el wrapper `./mvnw` está incluido)  
- **Node.js**: 18.17.0  
- **npm**: 9.6.7  
- **Git**: 2.45.2 o superior  

> ⚠️ Si alguna versión no coincide, la aplicación podría presentar problemas de ejecución. Se recomienda usar las versiones exactas.

---

## 📂 Estructura del proyecto

├── backend/ # Código del backend (Spring Boot + Maven)
│ ├── src/ # Código fuente
│ ├── pom.xml # Configuración Maven
│ └── ...
│
├── frontend/ # Código del frontend (React + Vite)
│ ├── src/ # Código fuente
│ ├── package.json # Configuración dependencias npm
│ └── ...
│
├── init-sql # Codigo para inicializar con un usuario creado
├── docker-compose.yml # Definición del contenedor SQL Server
├── start.sh # Script para levantar toda la app
├── stop.sh # Script para detener toda la app
└── README.md # Instrucciones


---

## 🚀 Ejecución de la aplicación

### 1. Clonar el repositorio

`git clone <url-del-repo>`
`cd <carpeta-del-repo>`

### 2. Dar permisos a los scripts (si usas Linux o Mac)

chmod +x start.sh stop.sh

### 3. Levantar la aplicación

./start.sh

Este script realiza los siguientes pasos automáticamente:

Levanta SQL Server en Docker.

Compila y ejecuta el backend (Spring Boot).

Instala dependencias y levanta el frontend (React + Vite).

Cuando todo finalice correctamente verás en consola:

✅ Aplicación levantada con éxito
📍 Backend en: http://localhost:8080
📍 Frontend en: http://localhost:5173

### 4.🛑 Detener la aplicación

./stop.sh

Este script:

Detiene el backend.

Detiene el frontend.

Apaga el contenedor de SQL Server en Docker.

En consola deberías ver:

✅ Backend detenido
✅ Frontend detenido
✅ Todo detenido correctamente


## 🧪 Verificación

Frontend: http://localhost:5173

Backend (API): http://localhost:8080/api/notes

Base de datos (SQL Server en Docker): puerto 1433

Ejemplo de prueba en Postman:
GET http://localhost:8080/api/notes?archived=false


## 📝 Logs y procesos

Los logs de cada servicio se guardan en:

backend.log

frontend.log

Los procesos en ejecución se gestionan con:

backend.pid

frontend.pid

Estos archivos se crean al ejecutar start.sh y se eliminan al ejecutar stop.sh.

## ✨ Notas adicionales

Ver los logs en vivo del backend:
tail -f backend.log

Ver los logs en vivo del frontend:
tail -f frontend.log

Si algún servicio no inicia correctamente:

Asegúrar de que no haya procesos previos ocupando los puertos 8080 (backend), 5173 (frontend) o 1433 (SQL Server).

Ejecuta ./stop.sh y luego ./start.sh nuevamente.

## 📦 Dependencias principales
Backend (Spring Boot)

Spring Boot 3.5.5

Spring Data JPA

Driver oficial de SQL Server (mssql-jdbc)

Lombok

Frontend (React + Vite)

React 18.3.1

Vite 5.4.0

Axios

## 👨‍💻 Autores

Richard David Nicolas Flores