#!/bin/bash
# Build a .nupkg file.
# Note that this script is intended to be run by GitHub Actions.
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

if ! (env | grep '^GITHUB_'); then
  echo "This script is intended to be run by GitHub Actions." > /dev/stderr
  exit 1
fi

version="$(cat obj/package_version.txt)"
version_prefix="$(cat obj/version_prefix.txt)"
package_version="$(cat obj/package_version.txt)"

for project in "${executables[@]}"; do
  for rid in "${rids[@]}"; do
    output_dir="./$project/bin/$configuration/$rid/"
    dotnet publish \
      --runtime "$rid" \
      -p:PublishSingleFile=true \
      -p:Version="$version" \
      --configuration "$configuration" \
      --output "$output_dir" \
      "$project"
    bin_name="$(find "$output_dir" -type f -executable -exec basename {} \;)"
    pushd "$output_dir"
    if [[ "$rid" = win-* ]]; then
      zip -r9 "../${bin_name%.exe}-$version-$rid.zip" ./*
    else
      tar cvfJ "../$bin_name-$version-$rid.tar.xz" ./*
    fi
    popd
    rm -rf "$output_dir"
  done
done

for project in "${projects[@]}"; do
  rm -rf "./$project/bin/$configuration/"

  dotnet_args="-p:Version=$version"
  if [ -f obj/version_suffix.txt ]; then
    dotnet_args="$dotnet_args -p:NoPackageAnalysis=true"
  fi
  # shellcheck disable=SC2086
  dotnet build -c "$configuration" $dotnet_args
  # shellcheck disable=SC2086
  dotnet pack "$project" -c "$configuration" $dotnet_args

  ls -al "./$project/bin/$configuration/"
  if [ "$package_version" != "$version_prefix" ]; then
    rm -f "./$project/bin/$configuration/$project.$version_prefix.nupkg"
  fi
done
