#!/bin/bash

echo "============================="
echo "🛑 Deteniendo aplicación Notes"
echo "============================="

# 1. Detener backend
if [ -f backend.pid ]; then
  kill -9 $(cat backend.pid) 2>/dev/null
  rm backend.pid
  echo "✅ Backend detenido"
else
  echo "⚠️ Backend no estaba corriendo"
fi

# 2. Detener frontend
if [ -f frontend.pid ]; then
  kill -9 $(cat frontend.pid) 2>/dev/null
  rm frontend.pid
  echo "✅ Frontend detenido"
else
  echo "⚠️ Frontend no estaba corriendo"
fi

# Docker SQL Server
echo "Deteniendo SQL Server en Docker..."
docker compose down

echo "============================="
echo "✅ Todo detenido correctamente"
echo "============================="