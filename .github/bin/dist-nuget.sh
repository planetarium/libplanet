#!/bin/bash
# Submit .nupkg files to NuGet.
# Note that this script is intended to be run by GitHub Actions.
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

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
# and the branch is for releases (master or *-maintenance or 9c-*).
# shellcheck disable=SC2235
if [ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ] && [[ \
    "$GITHUB_REF" = refs/tags/* || \
    "$GITHUB_REF" = refs/heads/master || \
    "$GITHUB_REF" = refs/heads/*-maintenance || \
    "$GITHUB_REF" = refs/heads/9c-* \
  ]]; then
  function dotnet-nuget {
    dotnet nuget "$@"
  }
else
  function dotnet-nuget {
    echo "DRY-RUN: dotnet nuget" "$@"
  }
fi

package_version="$(cat obj/package_version.txt)"

for project in "${projects[@]}"; do
  dotnet-nuget push \
    "./$project/bin/$configuration/$project.$package_version.nupkg" \
    --api-key "$NUGET_API_KEY" \
    --source https://api.nuget.org/v3/index.json
done
