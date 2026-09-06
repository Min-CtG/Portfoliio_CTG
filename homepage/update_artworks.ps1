$artworksRoot = "assets\ARTWORKS"
$outputJs = "data\artworksData.js"

if (-not (Test-Path $artworksRoot)) {
    Write-Host "Error: ARTWORKS directory not found."
    Read-Host "Press Enter to exit"
    Exit
}

$categories = @()

# Get all subdirectories (each = one category)
$subDirs = Get-ChildItem -Path $artworksRoot -Directory | Where-Object { $_.Name -ne "images" }

foreach ($dir in $subDirs) {
    $categoryName = $dir.Name
    $allFiles = Get-ChildItem -Path $dir.FullName -File
    $artworkMap = @{}

    foreach ($file in $allFiles) {
        $baseName = $file.BaseName -replace "_thumb$", "" -replace "_full$", ""
        
        if (-not $artworkMap.ContainsKey($baseName)) {
            $artworkMap[$baseName] = @{
                thumb = $null
                full = $null
            }
        }
        
        if ($file.BaseName -match "_thumb$") {
            $artworkMap[$baseName].thumb = $file.Name
        } elseif ($file.BaseName -match "_full$") {
            $artworkMap[$baseName].full = $file.Name
        } else {
            if (-not $artworkMap[$baseName].full) { $artworkMap[$baseName].full = $file.Name }
            if (-not $artworkMap[$baseName].thumb) { $artworkMap[$baseName].thumb = $file.Name }
        }
    }

    $works = @()
    $coverThumb = $null

    foreach ($key in ($artworkMap.Keys | Sort-Object)) {
        $item = $artworkMap[$key]
        if ($item.thumb -and -not $item.full) { $item.full = $item.thumb }
        if ($item.full -and -not $item.thumb) { $item.thumb = $item.full }
        if (-not $item.full) { continue }

        $title = (Get-Culture).TextInfo.ToTitleCase($key.Replace("_", " "))
        
        $work = [ordered]@{
            id = ($key -replace "[^a-zA-Z0-9]", "_")
            sub = "2026"
            title = $title
            desc = "A digital restoration and exploration of form and space. Rendered in full high-fidelity 3D."
            thumb = "assets/ARTWORKS/$categoryName/$($item.thumb)"
            image = "assets/ARTWORKS/$categoryName/$($item.full)"
        }
        $works += $work

        if (-not $coverThumb) {
            $coverThumb = "assets/ARTWORKS/$categoryName/$($item.thumb)"
        }
    }

    if ($works.Count -gt 0) {
        $cat = [ordered]@{
            id = ($categoryName -replace "[^a-zA-Z0-9]", "_")
            title = $categoryName
            cover = $coverThumb
            count = $works.Count
            works = $works
        }
        $categories += $cat
    }
}

# Sort categories alphabetically
$categories = $categories | Sort-Object { $_.title }

$wrapper = [ordered]@{ categories = $categories }
$json = $wrapper | ConvertTo-Json -Depth 5
$jsContent = "const artworksData = $json;"

if (-not (Test-Path "data")) {
    New-Item -ItemType Directory -Path "data" | Out-Null
}

Set-Content -Path $outputJs -Value $jsContent -Encoding UTF8

Write-Host "====================================================="
Write-Host " Successfully generated artworks data!"
Write-Host " Categories found: $($categories.Count)"
foreach ($cat in $categories) {
    Write-Host "   - $($cat.title): $($cat.count) works"
}
Write-Host "====================================================="
Start-Sleep -Seconds 3
