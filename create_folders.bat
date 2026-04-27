@echo off
cd /d c:\laragon\www\wedding
if not exist css mkdir css
if not exist js mkdir js
if not exist assets\images mkdir assets\images
if not exist assets\music mkdir assets\music
if not exist assets\sounds mkdir assets\sounds
echo Folder structure created successfully!
echo.
echo Verifying folders:
if exist css echo OK: css\
if exist js echo OK: js\
if exist assets\images echo OK: assets\images\
if exist assets\music echo OK: assets\music\
if exist assets\sounds echo OK: assets\sounds\
pause
