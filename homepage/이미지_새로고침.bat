@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File update_artworks.ps1
