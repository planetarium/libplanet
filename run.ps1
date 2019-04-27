#!/usr/local/bin/pwsh
if ($args.Length -lt 1) {
  $stderr = [Console]::Error.WriteLine
  $stderr.Invoke("error: Too few arguments.")
  $stderr.Invoke("Try ``run.ps1 --help' for more information.")
  exit 1
} elseif ($args.Contains("--help") -or $args.Contains("-h")) {
  dotnet run -p Libplanet.Explorer.Executable -- @args
  exit $?
}
dotnet watch -p Libplanet.Explorer.Executable -- run -- @args
