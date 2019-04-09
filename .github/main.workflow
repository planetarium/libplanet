workflow "on push" {
  on = "push"
  resolves = ["pack"]
}

action "build" {
  uses = "docker://mcr.microsoft.com/dotnet/core/sdk:2.2-alpine3.8"
  args = ["dotnet", "build"]
}

action "pack" {
  needs = "build"
  uses = "docker://mcr.microsoft.com/dotnet/core/sdk:2.2-alpine3.8"
  env = {
    PWSH_URL = "https://github.com/PowerShell/PowerShell/releases/download/v6.2.0/powershell-6.2.0-linux-alpine-x64.tar.gz"
  }
  args = [
    "/bin/ash",
    "-c",
    "apk add openssl && wget -P /tmp/ $PWSH_URL && tar xvfz /tmp/powershell-*.tar.gz -C /usr/local/bin && ./build.ps1"
  ]
}
