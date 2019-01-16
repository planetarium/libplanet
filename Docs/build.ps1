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

# Download docfx if not exist yet.
if (-not (Test-Path docfx)) {
  Invoke-WebRequest -OutFile docfx.zip `
    https://github.com/dotnet/docfx/releases/download/v2.40.7/docfx.zip
  New-Item -ItemType directory -Path docfx
  [System.IO.Compression.ZipFile]::ExtractToDirectory("docfx.zip", "docfx")
  Remove-Item docfx.zip
}

# Workaround a bug on Mono 5.16 + docfx.
# https://github.com/dotnet/docfx/issues/3389
if (-not (Test-Path docfx/SQLitePCLRaw.core.dll)) {
  Invoke-WebRequest -OutFile sqlitepclraw.core.1.1.12.nuget `
    https://www.nuget.org/api/v2/package/SQLitePCLRaw.core/1.1.12
  New-Item -ItemType directory -Path sqlitepclraw.core
  [System.IO.Compression.ZipFile]::ExtractToDirectory(
    "sqlitepclraw.core.1.1.12.nuget", "sqlitepclraw.core"
  )
  Move-Item `
    sqlitepclraw.core/lib/net45/SQLitePCLRaw.core.dll `
    docfx/SQLitePCLRaw.core.dll
  Remove-Item sqlitepclraw.core -Force -Recurse
}

# Invoke docfx.exe which is a .NET application.  While it can be run in
# the native way on Windows, it should be interpreted by Mono VM on other POSIX
# systems.
if (Get-Command mono -errorAction SilentlyContinue) {
  mono docfx/docfx.exe docfx.json @args
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
    docfx/docfx.exe docfx.json @args
  }
}
