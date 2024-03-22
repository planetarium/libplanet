#!/bin/bash

# shellcheck disable=SC2034
solution="Libplanet"
projects=(
  "Libplanet"
  "Libplanet.Action"
  "Libplanet.Common"
  "Libplanet.Crypto"
  "Libplanet.Crypto.Secp256k1"
  "Libplanet.Mocks"
  "Libplanet.Net"
  "Libplanet.Store"
  "Libplanet.Store.Remote"
  "Libplanet.Stun"
  "Libplanet.Types"
  "Libplanet.RocksDBStore"
  "Libplanet.Analyzers"
  "Libplanet.Tools"
  "Libplanet.Explorer"
  "Libplanet.Explorer.Executable"
  "Libplanet.Explorer.Cocona"
  "Libplanet.Extensions.Cocona"
)
configuration=Release
executables=(
  "Libplanet.Tools"
  "Libplanet.Explorer.Executable"
)
npm_packages=(
  "@planetarium/cli"
  "@planetarium/tx"
  "@planetarium/account"
  "@planetarium/account-aws-kms"
  "@planetarium/account-web3-secret-storage"
)

# https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
rids=(linux-x64 osx-x64 osx-arm64 win-x64)

# Publish a package only if the repository is upstream (planetarium/libplanet)
# and the branch is for releases (main or *-maintenance or 9c-*).
# shellcheck disable=SC2235
if [ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ] && [[ \
    "$GITHUB_REF" = refs/tags/* || \
    "$GITHUB_REF" = refs/heads/main || \
    "$GITHUB_REF" = refs/heads/*-maintenance || \
    "$GITHUB_REF" = refs/heads/ci-* || \
    "$GITHUB_REF" = refs/heads/9c-* \
  ]]; then
  publish_package=true
fi
