#!/usr/local/bin/pwsh
# This PowerShell script builds the docs using DocFX.
#
# If you are on Linux or macOS you need to install PowerShell and Mono first.
# See also the following articles:
#
# https://docs.microsoft.com/powershell/scripting/install/installing-powershell
# https://www.mono-project.com/docs/getting-started/install/
#
# If prerequisites are satisfied you can run the script using the following
# command:
#
#   ./build.ps1
#
# The above command generates static HTML files into _site/ directory.
#
# Note that this command can take options that docfx.exe can take.  For example,
# the following command builds the docs and serves them through an HTTP server:
#
#   ./build.ps --serve
#
Add-Type -AssemblyName System
Add-Type -AssemblyName System.IO.Compression.FileSystem

# The below assumes that the working directory is Docs/.
$BaseDir = Split-Path -Path $MyInvocation.MyCommand.Source
Set-Location $BaseDir

# https://github.com/PowerShell/PowerShell/pull/1901#issuecomment-240847078
if (Get-Alias Curl -ErrorAction SilentlyContinue) {
  Remove-Item Alias:Curl
}
if (Get-Alias WGet -ErrorAction SilentlyContinue) {
  Remove-Item Alias:WGet
}

function Download-File ($From, $To) {
  # Why we prefer curl/wget here?  Because in some environments
  # (e.g., Travis CI) .NET's root certificates are seemingly outdated,
  # or at least, an error "Could not create SSL/TLS secure channel" occurs.
  if (Get-Command curl -ErrorAction SilentlyContinue) {
    curl -L -o "$To" "$From"
  } elseif (Get-Command wget -ErrorAction SilentlyContinue) {
    wget -O "$To" "$From"
  } else {
    Invoke-WebRequest -OutFile "$To" "$From"
  }
}

# Download docfx if not exist yet.
if (-not (Test-Path "$BaseDir/docfx")) {
  Download-File `
    "https://github.com/dotnet/docfx/releases/download/v2.40.7/docfx.zip" `
    -To "$BaseDir/docfx.zip"
  New-Item -ItemType directory -Path "$BaseDir/docfx"
  [System.IO.Compression.ZipFile]::ExtractToDirectory(
    "$BaseDir/docfx.zip",
    "$BaseDir/docfx"
  )
  Remove-Item "$BaseDir/docfx.zip"
}

# Workaround a bug on Mono 5.16 + docfx.
# https://github.com/dotnet/docfx/issues/3389
if (-not (Test-Path "$BaseDir/docfx/SQLitePCLRaw.core.dll")) {
  Download-File `
    -From "https://www.nuget.org/api/v2/package/SQLitePCLRaw.core/1.1.12" `
    -To "$BaseDir/sqlitepclraw.core.1.1.12.nuget"
  New-Item -ItemType directory -Path "$BaseDir/sqlitepclraw.core"
  [System.IO.Compression.ZipFile]::ExtractToDirectory(
    "$BaseDir/sqlitepclraw.core.1.1.12.nuget", "$BaseDir/sqlitepclraw.core"
  )
  Move-Item `
    "$BaseDir/sqlitepclraw.core/lib/net45/SQLitePCLRaw.core.dll" `
    "$BaseDir/docfx/SQLitePCLRaw.core.dll"
  Remove-Item "$BaseDir/sqlitepclraw.core" -Force -Recurse
}

# Invoke docfx.exe which is a .NET application.  While it can be run in
# the native way on Windows, it should be interpreted by Mono VM on other POSIX
# systems.
Set-Location $BaseDir
if (Get-Command mono -ErrorAction SilentlyContinue) {
  mono "$BaseDir/docfx/docfx.exe" "$BaseDir/docfx.json" @args
} else {
  $platform = [System.Environment]::OSVersion.Platform;
  $unix = [System.PlatformId]::Unix;
  $macos = [System.PlatformId]::MacOSX;
  if (@($unix, $macos).Contains($platform)) {
    Write-Error @"
Failed to find the command: mono
You need to install Mono on your system.
See also: https://www.mono-project.com/
"@
    exit 127
  } else {
    & "$BaseDir\docfx\docfx.exe" "$BaseDir/docfx.json" @args
  }
}
