#!/bin/bash

# shellcheck disable=SC2034
solution="Libplanet"
projects=(
  "Libplanet.Stun"
  "Libplanet"
  "Libplanet.RocksDBStore"
  "Libplanet.Analyzers"
  "Libplanet.Tools"
  "Libplanet.Explorer"
  "Libplanet.Explorer.Executable"
  "Libplanet.Extensions.Cocona"
)
configuration=Release
executables=(
  "Libplanet.Tools"
)

# https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
rids=(linux-arm64 linux-x64 osx-x64 win-arm64 win-x64)
# FIXME: osx-arm64 cannot be cross-compiled from other-than osx-arm64 machines.

# Publish a package only if the repository is upstream (planetarium/libplanet)
# and the branch is for releases (main or *-maintenance or 9c-*).
# shellcheck disable=SC2235
if [ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ] && [[ \
    "$GITHUB_REF" = refs/tags/* || \
    "$GITHUB_REF" = refs/heads/main || \
    "$GITHUB_REF" = refs/heads/*-maintenance || \
    "$GITHUB_REF" = refs/heads/9c-* \
  ]]; then
  publish_package=true
fi
