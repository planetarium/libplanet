#!/usr/bin/env pwsh
param (
  [Parameter(Mandatory, Position=0, HelpMessage="Enter a version to download.")]
  [ValidatePattern("^[0-9]+\.[1-9][0-9]*\.[0-9]+$")]
  [string]
  $Version
)

function New-TemporaryDirectory {
  New-TemporaryFile | ForEach-Object {
    Remove-Item $_
    New-Item -ItemType Directory -Path $_
  }
}

function Test-Npx(
  [Parameter(Mandatory, Position=0)][string[]]$Command,
  [Parameter(Mandatory, Position=1)][string]$Expected
) {
  $actual = & "npx" @Command
  if ($actual -ne $Expected) {
    $cmd = $Command -Join " "
    Write-Error "The command 'npx $cmd' printed an unexpected output.
  Expected: $Expected
  Actual: $actual"
    exit 1
  }
}

function Test-Planet() {
  Test-Npx @("planet", "--version") "planet $Version"
}

$ErrorActionPreference = "Stop"
$InformationPreference = "Continue"
$DebugPreference = "Continue"
$PackageDir = Resolve-Path (Split-Path -Path $PSScriptRoot -Parent)

Copy-Item (Join-Path -Path $PackageDir -ChildPath "package.json") `
  (Join-Path -Path $PackageDir -ChildPath ".package.json.bak")
try {
  $Package = Get-Content "package.json" | ConvertFrom-Json
  $Package.private = $false
  $Package.version = $Version
  ConvertTo-Json $Package | Set-Content "package.json"

  Remove-Item -Force planetarium-cli-*.tgz
  npm pack --quiet
  $PackagePath = Join-Path `
    -Path $PackageDir `
    -ChildPath "planetarium-cli-$Version.tgz"

  Write-Information 'Test with "npm install"...'
  $tempDir = New-TemporaryDirectory
  Push-Location $tempDir
  Write-Debug "Enter a temporary directory: $($tempDir.FullName)"
  npm install --quiet --save $PackagePath
  Test-Planet
  Pop-Location

  Write-Information 'Test with "npm install --ignore-scripts"...'
  $tempDir = New-TemporaryDirectory
  Push-Location $tempDir
  Write-Debug "Enter a temporary directory: $($tempDir.FullName)"
  npm install --quiet --ignore-scripts --save $PackagePath
  Test-Planet
  Pop-Location

  Write-Output "Succeeded!"
} finally {
  Remove-Item (Join-Path -Path $PackageDir -ChildPath "package.json")
  Rename-Item (Join-Path -Path $PackageDir -ChildPath ".package.json.bak") `
    (Join-Path -Path $PackageDir -ChildPath "package.json")
  Pop-Location -PassThru
}
