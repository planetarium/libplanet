#!/bin/bash
# Invoke github-release <https://github.com/aktau/github-release>.
set -e

if [[ ! -f /tmp/bin/linux/amd64/github-release ]]; then
  wget -O /tmp/github-release.tar.bz2 \
    https://github.com/aktau/github-release/releases/download/v0.7.2/linux-amd64-github-release.tar.bz2
  tar xvfj /tmp/github-release.tar.bz2 -C /tmp
  rm /tmp/github-release.tar.bz2
fi

/tmp/bin/linux/amd64/github-release "$@"
