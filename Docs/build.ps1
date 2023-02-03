#!/usr/bin/env pwsh
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

# Install docfx with `dotnet tool`. 
dotnet tool restore

# As DocFX requires the Git remote named "origin", which is hard-coded in
# the DocFX internals (see also: # https://github.com/dotnet/docfx/issues/5547),
# it fails to get VCS metadata without it.  To work around this, this script
# temporarily adds the remote named "origin" if it does not exist, and removes
# it when the script ends.
$originExisted = -not ( `
  git remote | Select-String -AllMatches -CaseSensitive -Quiet "origin")
if ($originExisted) {
  git remote add origin "https://github.com/planetarium/libplanet.git"
}
try {

# Invoke docfx.exe which is a .NET application.  While it can be run in
# the native way on Windows, it should be interpreted by Mono VM on other POSIX
# systems.
Set-Location $BaseDir
dotnet tool run docfx docfx.json @args

if (-not (Test-Path "$BaseDir/_site/api/Libplanet.html")) {
      Write-Error @"
Failed to build: _site/api/Libplanet.html doesn't exist.
"@
    exit 127
}

} finally {
  if ($originExisted) {
    git remote remove origin
  }
}
