#!/bin/bash
# Invoke github-release <https://github.com/github-release/github-release>.
set -e

if [[ "$(uname -o)" = Msys ]]; then
  if [[ ! -f /tmp/github-release.exe ]]; then
    u='https://github.com/github-release/github-release/releases/download/v0.10.0/windows-amd64-github-release.zip'
    powershell -Command 'iwr -o $env:Temp/github-release.zip '"$u"
    pushd "$TEMP"
    7z x github-release.zip
    mv bin/windows/amd64/github-release.exe /tmp/github-release.exe
    popd
  fi

  /tmp/github-release.exe "$@"
else
  if [[ ! -f /tmp/github-release ]]; then
    wget -O /tmp/github-release.bz2 \
      https://github.com/github-release/github-release/releases/download/v0.10.0/linux-amd64-github-release.bz2
    bzip2 -d /tmp/github-release.bz2
    chmod +x /tmp/github-release
  fi

  /tmp/github-release "$@"
fi

