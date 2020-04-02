#!/bin/bash

# shellcheck disable=SC2034
projects=("Libplanet" "Libplanet.RocksDBStore" "Libplanet.Tools")
configuration=Release
executables=("Libplanet.Tools")
rids=(linux-x64 osx-x64 win-x64)
# https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
