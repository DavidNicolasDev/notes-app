#!/bin/bash

# 🚀 Script para levantar la app completa (backend + frontend)

echo "============================="
echo "🚀 Iniciando aplicación Notes"
echo "============================="

# 0. Levantar SQL Server con Docker
echo "📦 Levantando SQL Server en Docker..."
docker compose up -d

# Espera unos segundos para que SQL Server arranque
echo "⏳ Esperando a que SQL Server inicie..."
sleep 15

# 1. Levantar backend (Spring Boot)
echo "📦 Construyendo backend..."
cd backend 

echo "▶️ Ejecutando backend..."

# corre Spring Boot en background

nohup ./mvnw spring-boot:run > ../backend.log 2>&1 &
BACKEND_PID=$!
echo $BACKEND_PID > ../backend.pid
cd ..

# Espera un poco a que levante Spring Boot
sleep 10

# 2. Levantar frontend (React)
echo "📦 Instalando dependencias frontend..."
cd frontend 
npm install > /dev/null

echo "▶️ Ejecutando frontend..."
nohup npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
echo $FRONTEND_PID > ../frontend.pid
cd ..

echo "============================="
echo "✅ Aplicación levantada con éxito"
echo "📍 Backend en: http://localhost:8080"
echo "📍 Frontend en: http://localhost:5173"
echo "============================="

exit 0
# Nota: Los logs de backend y frontend se guardan en backend.log y frontend.log respectivamente.