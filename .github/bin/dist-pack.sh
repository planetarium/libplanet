#!/bin/sh
# Build a .nupkg file.
# Note that this script is intended to be run by GitHub Actions.
set -e

projects="Libplanet Libplanet.RocksDBStore"
configuration=Release

if ! (env | grep '^GITHUB_'); then
  echo "This script is intended to be run by GitHub Actions." > /dev/stderr
  exit 1
fi

for project in $projects; do
  rm -rf "./$project/bin/$configuration/"

  if [ -f obj/version_suffix.txt ]; then
    dotnet_args="-p:Version=$(cat obj/package_version.txt)"
    dotnet_args="$dotnet_args -p:NoPackageAnalysis=true"
  fi
  # shellcheck disable=SC2086
  dotnet build -c "$configuration" $dotnet_args
  # shellcheck disable=SC2086
  dotnet pack "$project" -c "$configuration" $dotnet_args

  version_prefix="$(cat obj/version_prefix.txt)"
  package_version="$(cat obj/package_version.txt)"

  ls -al "./$project/bin/$configuration/"
  if [ "$package_version" != "$version_prefix" ]; then
    rm -f "./$project/bin/$configuration/$project.$version_prefix.nupkg"
  fi
done
