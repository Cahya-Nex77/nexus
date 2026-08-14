# Script otomatis resolve merge conflict di translations.js
# Pilih semua versi HEAD (baris antara <<<<<<< HEAD dan =======)
# Jalankan: powershell -ExecutionPolicy Bypass -File fix_translations.ps1

$file = "src\data\translations.js"
$content = Get-Content $file -Raw -Encoding UTF8

# Hapus semua conflict markers dengan regex:
# Pattern: <<<<<<< HEAD\r\n(HEAD_CONTENT)=======\r\n(INCOMING_CONTENT)>>>>>>> hash\r\n
# Kita ambil HEAD_CONTENT saja

$pattern = '<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>>[^\r\n]*\r?\n'
$result = [regex]::Replace($content, $pattern, '$1')

Set-Content $file $result -Encoding UTF8 -NoNewline

Write-Host "Done! Semua conflict di translations.js sudah diresolved (HEAD version)" -ForegroundColor Green
