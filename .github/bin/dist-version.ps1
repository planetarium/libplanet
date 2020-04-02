#!/usr/bin/env pwsh
# Append suffix to the package version if it's not a tag push:
# - "dev.TIMESTAMP" (e.g., 0.1.2-dev.20190423131415)
# - "nightly.DATE" (e.g., 0.1.2-nightly.20190423)
# Note that this script is intended to be run by GitHub Actions.
if ((Get-ChildItem env:GITHUB_*).Count -lt 1) {
  Write-Error "This script is intended to be run by GitHub Actions."
  exit 1
}

# The root element could belong to the namespace.
$Namespace = @{m = "http://schemas.microsoft.com/developer/msbuild/2003"}
$versionPrefixNode = (Select-Xml `
  -Path Libplanet/Libplanet.csproj `
  -Namespace $Namespace `
  -XPath './m:Project/m:PropertyGroup/m:VersionPrefix/text()')
# The root element could belong to no namespace.
$versionPrefixNode ??= (Select-Xml `
  -Path ./Libplanet/Libplanet.csproj `
  -XPath './Project/PropertyGroup/VersionPrefix/text()')
$VersionPrefix = $versionPrefixNode.Node.Value

New-Item -ItemType directory -Path obj -ErrorAction SilentlyContinue
[Console]::Error.Write("VersionPrefix: ")
Write-Output $VersionPrefix
Write-Output $VersionPrefix > obj/version_prefix.txt

$Event = Get-Content $env:GITHUB_EVENT_PATH | ConvertFrom-Json
if ($Event.head_commit.id -ne $null) {
  $HeadCommitHash = $Event.head_commit.id
}
if ($HeadCommitHash -eq $null) {
  $headCommit = Get-Content .git/HEAD
  $refPair = $headCommit.Split()
  if ($refPair.Length -gt 1) {
    $HeadCommitHash = Get-Content ".git/$($refPair[1])"
  } else {
    $HeadCommitHash = $headCommit
  }
}
$HeadCommitHash = $HeadCommitHash.Substring(0, 7)

if ($env:GITHUB_EVENT_NAME.StartsWith("schedule")) {
  $date = (Get-Date).ToUniversalTime().ToString("yyyyMMdd")
  $VersionSuffix = "nightly.$date"
  $PackageVersion = "$VersionPrefix-$VersionSuffix"
  $VersionSuffix = "$VersionSuffix+$HeadCommitHash"
} elseif ($env:GITHUB_REF.StartsWith("refs/tags/")) {
  $tag = $env:GITHUB_REF.Substring(10)
  if ("$tag" -ne "$VersionPrefix") {
    Write-Error "Git tag ($tag) doesn't match to VersionPrefix ($VersionPrefix)"
    exit 1
  }
  $PackageVersion = $tag
} else {
  $timestamp = $Event.head_commit.timestamp
  if ($timestamp -eq $null) {
    $timestamp = Get-Date
  }
  $timestamp = $timestamp.ToUniversalTime()
  $VersionSuffix = "dev.$($timestamp.ToString("yyyyMMddHHmmss"))"
  $PackageVersion = "$VersionPrefix-$VersionSuffix"
  $VersionSuffix = "$VersionSuffix+$HeadCommitHash"
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

