#!/usr/bin/env pwsh
if ($args.Length -lt 1) {
  $stderr = [Console]::Error.WriteLine
  $stderr.Invoke("error: Too few arguments.")
  $stderr.Invoke("Try ``run.ps1 --help' for more information.")
  exit 1
} elseif ($args.Contains("--help") -or $args.Contains("-h")) {
  dotnet run -p . -- @args
  exit $?
}
dotnet watch -p . -- run -- @args
