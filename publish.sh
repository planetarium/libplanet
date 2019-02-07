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

set -ev

curl -o /tmp/nuget.exe \
  https://dist.nuget.org/win-x86-commandline/v5.0.0-preview2/nuget.exe

if compgen -G "Libplanet/bin/Release/Libplanet.*.nupkg" > /dev/null; then
  for f in Libplanet/bin/Release/Libplanet.*.nupkg; do
    mono /tmp/nuget.exe push \
      "$f" \
      -ApiKey "$NUGET_API_KEY" \
      -Source https://api.nuget.org/v3/index.json
  done
fi
