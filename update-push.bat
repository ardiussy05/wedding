@echo off
REM Update dan push ke GitHub
cd c:\laragon\www\wedding

echo Updating couple information and mobile photo optimization...
git add .

echo Creating commit...
git commit -m "Update: Nama mempelai lengkap dan optimasi foto mobile - Dwika Aprilliani (Putri Saprudin & Misnawati) & Firmansyah Putra (Putra Mauli & Nurcahaya)"

echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo ✅ Update berhasil di-push ke GitHub!
echo ========================================
echo Website akan langsung terupdate
echo ========================================
pause
