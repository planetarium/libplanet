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

version="$(xmllint \
 --xpath './Project/PropertyGroup/Version/text()' \
 Libplanet/Libplanet.csproj)"
if [[ "$TRAVIS_TAG" = "" && "$version" != *-dev ]]; then
  # If we prepare a RC, at that time a package version does not end with
  # "-dev" suffix, and Travis CI builds try to build a .nupkg file of
  # a stable versionn number twice, because two builds for one commit
  # are made: one for push to a branch, and another one is a tag push.
  # So we need to avoid publishing .nupkg to NuGet for stable version numbers
  # when it is not a tag push.
  echo "Publishing to NuGet will be done at a tag build." > /dev/stderr
  exit 0
fi

if [[ "$NUGET_API_KEY" = "" ]]; then
  echo "This script is skipped if NUGET_API_KEY envrionment variable is not" \
       "present." > /dev/stderr
  exit 0
fi

set -ev

curl -o /tmp/nuget.exe \
  https://dist.nuget.org/win-x86-commandline/v5.0.0-preview2/nuget.exe

if compgen -G "Libplanet/bin/Release/Libplanet.*.nupkg" > /dev/null; then
  for f in Libplanet/bin/Release/Libplanet.*.nupkg; do
    mono /tmp/nuget.exe push \
      "$f" \
      -ApiKey "$NUGET_API_KEY" \
      -NonInteractive \
      -Source https://api.nuget.org/v3/index.json
  done
fi
