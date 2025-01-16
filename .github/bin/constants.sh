#!/bin/bash

# shellcheck disable=SC2034
solution="Libplanet"
projects=(
  "sdk/node/Libplanet.Node"
  "sdk/node/Libplanet.Node.Executable"
  "sdk/node/Libplanet.Node.Extensions"
  "src/Libplanet"
  "src/Libplanet.Action"
  "src/Libplanet.Common"
  "src/Libplanet.Crypto"
  "src/Libplanet.Crypto.Secp256k1"
  "src/Libplanet.Net"
  "src/Libplanet.Store"
  "src/Libplanet.Store.Remote"
  "src/Libplanet.Stun"
  "src/Libplanet.Types"
  "src/Libplanet.RocksDBStore"
  "test/Libplanet.Mocks"
  "tools/Libplanet.Analyzers"
  "tools/Libplanet.Tools"
  "tools/Libplanet.Explorer"
  "tools/Libplanet.Explorer.Executable"
  "tools/Libplanet.Explorer.Cocona"
  "tools/Libplanet.Extensions.Cocona"
)
configuration=Release
executables=(
  "tools/Libplanet.Tools"
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
