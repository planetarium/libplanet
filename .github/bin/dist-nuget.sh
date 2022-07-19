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

if [ "$publish_package" = "" ]; then
  function dotnet-nuget {
    echo "DRY-RUN: dotnet nuget" "$@"
  }
else
  function dotnet-nuget {
    dotnet nuget "$@"
  }
fi

package_version="$(cat obj/package_version.txt)"

for project in "${projects[@]}"; do
  dotnet-nuget push \
    "./$project/bin/$configuration/$project.$package_version.nupkg" \
    --skip-duplicate \
    --api-key "$NUGET_API_KEY" \
    --source https://api.nuget.org/v3/index.json
done
