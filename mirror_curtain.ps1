Add-Type -AssemblyName System.Drawing
$inPath = (Resolve-Path "public/assets/decor/velvet-curtain-left.jpg").Path
$bmp = [System.Drawing.Bitmap]::FromFile($inPath)
$bmp.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX)

$outPath = (Join-Path (Get-Location) "public/assets/decor/velvet-curtain-right.jpg")
# Save as JPEG with 98% quality
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]98)

$bmp.Save($outPath, $codec, $encoderParams)
$bmp.Dispose()
Write-Output "Successfully mirrored left curtain to $outPath"
