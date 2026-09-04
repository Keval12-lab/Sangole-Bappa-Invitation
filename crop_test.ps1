Add-Type -AssemblyName System.Drawing
$inPath = (Resolve-Path "public/assets/decor/velvet-curtain-left.jpg").Path
$bmp = [System.Drawing.Bitmap]::FromFile($inPath)
$rect = New-Object System.Drawing.Rectangle(0, 950, 768, 426)
$crop = $bmp.Clone($rect, $bmp.PixelFormat)
$outPath = (Join-Path (Get-Location) "public/assets/decor/test-bottom-left.png")
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$crop.Dispose()
Write-Output "Saved crop to $outPath"
