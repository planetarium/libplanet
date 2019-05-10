#!/usr/bin/env pwsh
# Append suffix to the package version if it's not a tag push:
# - "dev.TIMESTAMP" (e.g., 0.1.2-dev.20190423131415)
# - "nightly.DATE" (e.g., 0.1.2-nightly.20190423)
# Note that this script is intended to be run by GitHub Actions.
if ((Get-ChildItem env:GITHUB_*).Count -lt 1) {
  Write-Error "This script is intended to be run by GitHub Actions."
  exit 1
}

$VersionPrefix = (Select-Xml `
  -Path Libplanet/Libplanet.csproj `
  -XPath './Project/PropertyGroup/VersionPrefix/text()').Node.Value

New-Item -ItemType directory -Path obj -ErrorAction SilentlyContinue
[Console]::Error.Write("VersionPrefix: ")
Write-Output $VersionPrefix
Write-Output $VersionPrefix > obj/version_prefix.txt

if ($env:GITHUB_EVENT_NAME.StartsWith("schedule")) {
  $date = (Get-Date).ToUniversalTime().ToString("yyyyMMdd")
  $VersionSuffix = "nightly.$date"
  $PackageVersion = "$VersionPrefix-$VersionSuffix"
} elseif ($env:GITHUB_REF.StartsWith("refs/tags/")) {
  $tag = $env:GITHUB_REF.Substring(10)
  if ("$tag" -ne "$VersionPrefix") {
    Write-Error "Git tag ($tag) doesn't match to VersionPrefix ($VersionPrefix)"
    exit 1
  }
  $PackageVersion = $tag
} else {
  $event = Get-Content $env:GITHUB_EVENT_PATH | ConvertFrom-Json
  $timestamp = $event.head_commit.timestamp
  if ($timestamp -eq $null) {
    $timestamp = Get-Date
  }
  $timestamp = $timestamp.ToUniversalTime()
  $VersionSuffix = "dev." + $timestamp.ToString("yyyyMMddHHmmss")
  $PackageVersion = "$VersionPrefix-$VersionSuffix"
}

if ($VersionSuffix -eq $null) {
  Remove-Item obj/version_suffix.txt -ErrorAction SilentlyContinue
} else {
  [Console]::Error.Write("VersionSuffix: ")
  Write-Output $VersionSuffix
  Write-Output $VersionSuffix > obj/version_suffix.txt
}
[Console]::Error.Write("PackageVersion: ")
Write-Output $PackageVersion
Write-Output $PackageVersion > obj/package_version.txt

