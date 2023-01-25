#!/bin/sh
if [ "$1" = "" ]; then
  echo "usage: $0 VERSION" > /dev/stderr
  exit 1
fi

version="$1"
dotnet clean src/NetMQ.sln
rm -rf src/NetMQ/bin/
dotnet restore src/NetMQ.sln
dotnet build src/NetMQ.sln \
  /p:Configuration=Release \
  /p:PackageVersion="$version-planetarium" \
  /p:Version="$version" \
  /verbosity:minimal
dotnet pack src/NetMQ/NetMQ.csproj \
  -c Release \
  --no-build \
  /p:PackageVersion="$version-planetarium" \
  /p:Version="$version"
