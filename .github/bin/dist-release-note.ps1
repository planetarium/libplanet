#!/usr/bin/env pwsh
# Extract a release note from the given changelog file.
# Note that this script is intended to be run by GitHub Actions.
param (
  [string]$changelogPath,
  [string]$outputPath
)

if (-not (Test-Path obj/package_version.txt)) {
  Write-Error "obj/package_version.txt file is missing."
  Write-Error "dist-version.ps1 script must be run first."
  exit 1
}

$versionPrefix = (Get-Content obj/version_prefix.txt).Trim()
$packageVersion = (Get-Content obj/package_version.txt).Trim()

Invoke-WebRequest `
  -Uri "https://github.com/dahlia/submark/releases/download/0.2.0/submark-win64.exe" `
  -OutFile "$env:Temp\submark.exe"
& "$env:Temp\submark.exe" `
  -o "$outputPath" `
  -iO `
  --h2 "Version $versionPrefix" `
  "$changelogPath"
Remove-Item "$env:Temp\submark.exe"

if ((Get-Content "$outputPath").Trim().Length -lt 1) {
  Write-Error "There is no section for the version $versionPrefix."
  exit 1
} elseif (($versionPrefix -eq $packageVersion) -and `
    (Select-String -Path $outputPath -Pattern "to be released" -SimpleMatch)) {
  Write-Error "Release date should be shown in the release note."
  exit 1
}