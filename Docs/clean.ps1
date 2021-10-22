#!/usr/local/bin/pwsh
$ErrorActionPreference = "SilentlyContinue"
Remove-Item api/*.manifest
Remove-Item api/*.yml
Remove-Item docfx.zip
Remove-Item -Recurse _site/
