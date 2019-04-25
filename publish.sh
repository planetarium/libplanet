#!/bin/bash
# Submit .nupkg files to NuGet.
# Note that this script is intended to be run by Travis CI.
if ! (env | grep '^TRAVIS_'); then
  echo "This script is intended to be run by Travis CI." > /dev/stderr
  exit 1
fi

if [[ "$TRAVIS_JOB_NUMBER" != *.1 ]]; then
  echo "This script is executed by only the first job so that" \
       "it is run only once." > /dev/stderr
  exit 0
fi

if [[ "$NUGET_API_KEY" = "" ]]; then
  echo "This script is skipped if NUGET_API_KEY envrionment variable is not" \
       "present." > /dev/stderr
  exit 0
fi

set -ev

if [[ "$TRAVIS_TAG" = "" ]]; then
  # If it's not a tag push, ensure only suffixed versions are uploaded.
  version_prefix="$(xmllint \
   --xpath './Project/PropertyGroup/VersionPrefix/text()' \
   Libplanet/Libplanet.csproj)"
  rm -f "Libplanet/bin/Release/Libplanet.$version_prefix.nupkg"
fi

if compgen -G "Libplanet/bin/Release/Libplanet.*.nupkg" > /dev/null; then
  for f in Libplanet/bin/Release/Libplanet.*.nupkg; do
    dotnet nuget push \
      "$f" \
      --api-key "$NUGET_API_KEY" \
      --source https://api.nuget.org/v3/index.json
  done
fi
