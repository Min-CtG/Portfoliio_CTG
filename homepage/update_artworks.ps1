$imagesDir = "assets\ARTWORKS\images"
$outputJs = "data\artworksData.js"

if (-not (Test-Path $imagesDir)) {
    Write-Host "Error: Images directory not found."
    Read-Host "Press Enter to exit"
    Exit
}

$allFiles = Get-ChildItem -Path $imagesDir -File
$artworkMap = @{}

# Group files by base name
foreach ($file in $allFiles) {
    $baseName = $file.BaseName -replace "_thumb$", "" -replace "_full$", ""
    
    if (-not $artworkMap.ContainsKey($baseName)) {
        $artworkMap[$baseName] = @{
            thumb = $null
            full = $null
            ext = $file.Extension
        }
    }
    
    if ($file.BaseName -match "_thumb$") {
        $artworkMap[$baseName].thumb = $file.Name
    } elseif ($file.BaseName -match "_full$") {
        $artworkMap[$baseName].full = $file.Name
    } else {
        # If it has neither suffix, use it for both
        if (-not $artworkMap[$baseName].full) { $artworkMap[$baseName].full = $file.Name }
        if (-not $artworkMap[$baseName].thumb) { $artworkMap[$baseName].thumb = $file.Name }
    }
}

$artworks = @()

foreach ($key in $artworkMap.Keys) {
    $item = $artworkMap[$key]
    
    # Fallbacks if one is missing
    if ($item.thumb -and -not $item.full) { $item.full = $item.thumb }
    if ($item.full -and -not $item.thumb) { $item.thumb = $item.full }
    if (-not $item.full) { continue }
    
    $title = (Get-Culture).TextInfo.ToTitleCase($key.Replace("_", " "))
    
    $obj = [ordered]@{
        id = $key -replace "[^a-zA-Z0-9]", "_"
        sub = "2026"
        title = $title
        desc = "A digital restoration and exploration of form and space. Rendered in full high-fidelity 3D."
        thumb = "assets/ARTWORKS/images/$($item.thumb)"
        image = "assets/ARTWORKS/images/$($item.full)"
    }
    $artworks += $obj
}

# Sort alphabetically by title
$artworks = $artworks | Sort-Object title

$json = $artworks | ConvertTo-Json -Depth 3
$jsContent = "const artworksList = $json;"

# Ensure data directory exists
if (-not (Test-Path "data")) {
    New-Item -ItemType Directory -Path "data" | Out-Null
}

Set-Content -Path $outputJs -Value $jsContent -Encoding UTF8

Write-Host "====================================================="
Write-Host " Successfully generated artworks data!"
Write-Host " Total artworks found: $($artworks.Count)"
Write-Host "====================================================="
Start-Sleep -Seconds 3
