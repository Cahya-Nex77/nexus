# Script untuk resolve semua merge conflict dengan memilih versi HEAD (perbaikan-navbar)
# Jalankan dari folder nexus: powershell -ExecutionPolicy Bypass -File resolve_conflicts.ps1

$files = @(
    "src\data\translations.js",
    "src\components\Footer.jsx",
    "src\components\Programs.jsx",
    "src\components\Hero.jsx",
    "src\components\Contact.jsx"
)

foreach ($file in $files) {
    Write-Host "Resolving: $file" -ForegroundColor Cyan
    git checkout --ours $file
    git add $file
    Write-Host "  Done: $file" -ForegroundColor Green
}

Write-Host ""
Write-Host "Semua conflict sudah diselesaikan dengan versi HEAD (perbaikan-navbar)!" -ForegroundColor Yellow
Write-Host "Sekarang jalankan: git commit -m 'resolve merge conflicts'" -ForegroundColor Yellow
