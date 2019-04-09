workflow "on push" {
  on = "push"
  resolves = ["share"]
}

action "build" {
  uses = "docker://mcr.microsoft.com/dotnet/core/sdk:2.2-alpine3.8"
  args = ["dotnet", "build"]
}

action "pack" {
  needs = ["build"]
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

action "gcloud-auth" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "upload" {
  needs = ["pack", "gcloud-auth"]
  uses = "actions/gcloud/cli@master"
  env = {
    BUCKET = "libplanet-explorer"
  }
  runs = ["/bin/sh", "-c"]
  args = [
    "gsutil cp -a public-read Libplanet.Explorer.Executable/bin/Release/libplanet-explorer.*.zip gs://$BUCKET/$GITHUB_SHA/"
  ]
}

action "share" {
  needs = ["upload"]
  uses = "shawnbot/action-status@master"
  env = {
    BUCKET = "libplanet-explorer"
  }
  secrets = ["GITHUB_TOKEN"]
  runs = ["/bin/sh", "-c"]
  args = [
    "for f in Libplanet.Explorer.Executable/bin/Release/libplanet-explorer.*.zip; do b=`basename $f`; /action-status/cli.js --context=bin/`echo $b | cut -d. -f2` --description=$b --url=https://storage.googleapis.com/$BUCKET/$GITHUB_SHA/$b --state=success; done"
  ]
}
