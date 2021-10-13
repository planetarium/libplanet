#!/bin/bash
# Invoke github-release <https://github.com/github-release/github-release>.
set -e

if [[ ! -f /tmp/github-release ]]; then
  wget -O /tmp/github-release.bz2 \
    https://github.com/github-release/github-release/releases/download/v0.10.0/linux-amd64-github-release.bz2
  bzip2 -d /tmp/github-release.bz2
  chmod +x /tmp/github-release
fi

/tmp/github-release "$@"
