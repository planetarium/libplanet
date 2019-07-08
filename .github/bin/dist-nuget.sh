#!/bin/sh
# Submit .nupkg files to NuGet.
# Note that this script is intended to be run by GitHub Actions.
set -e

project=Libplanet
configuration=Release

if [ ! -f obj/package_version.txt ]; then
  {
    echo "obj/package_version.txt file is missing."
    echo "dist:version action must be run first."
  } > /dev/stderr
  exit 1
fi

if [ "$NUGET_API_KEY" = "" ]; then
  echo "This script requires NUGET_API_KEY envrionment variable." > /dev/stderr
  exit 1
fi

# Publish a package only if the repository is upstream (planetarium/libplanet)
# and the branch is for releases (master or maintenance-*).
# shellcheck disable=SC2235
if [ "$GITHUB_REPOSITORY" != "planetarium/libplanet" ] || (
    [ "$GITHUB_REF" = "${GITHUB_REF#refs/tags/}" ] &&
    [ "$GITHUB_REF" != refs/heads/master ] &&
    [ "$GITHUB_REF" = "${GITHUB_REF#refs/heads/maintenance-}" ] ); then
  alias dotnet="echo DRY-RUN: dotnet"
fi

package_version="$(cat obj/package_version.txt)"
dotnet nuget push \
  "./$project/bin/$configuration/$project.$package_version.nupkg" \
  --api-key "$NUGET_API_KEY" \
  --source https://api.nuget.org/v3/index.json
