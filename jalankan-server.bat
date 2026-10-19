@echo off
title PPK Ormawa E-BIO PENS - Local Development Server
echo ======================================================================
echo           PPK ORMAWA E-BIO PENS - DESA SAJEN
echo         Server Lokal untuk Menjalankan Landing Page
echo ======================================================================
echo.
echo Membuka browser pada http://localhost:8000 ...
start http://localhost:8000
echo.
echo Menjalankan local HTTP server (port 8000)...
echo [Info] Melalui Local Server (HTTP), video YouTube profil dapat
echo        langsung diputar di dalam landing page tanpa Error 153.
echo.
echo Tekan Ctrl + C untuk mematikan server.
echo.
python -m http.server 8000 2>nul || npx -y serve -l 8000 2>nul || php -S localhost:8000
pause
