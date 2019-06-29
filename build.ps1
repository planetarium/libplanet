#!/usr/bin/env pwsh
$project = "Libplanet.Explorer.Executable"
$target = "netcoreapp2.2"
$platforms = @("osx-x64","win-x64")
$results = @()
foreach ($rid in $platforms) {
  dotnet publish -c Release -r $rid --self-contained true
  $dest = "$project/bin/Release/libplanet-explorer.$rid.zip"
  if (Test-Path $dest) {
    Remove-Item $dest
  }
  Compress-Archive `
    -Path $project/bin/Release/$target/$rid/publish/* `
    -DestinationPath $dest
  $results += $dest
}
foreach ($dest in $results) {
  echo $dest
}
