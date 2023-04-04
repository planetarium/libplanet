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

version="$(cat obj/package_version.txt)"       # e.g. 0.50.0-dev.20230221015836
version_prefix="$(cat obj/version_prefix.txt)" # e.g. 0.50.0
if [[ -f obj/version_suffix.txt ]]; then       # e.g. dev.20230221015836+35a2dbc
  version_suffix="$(cat obj/version_suffix.txt)"
fi

for project in "${executables[@]}"; do
  for rid in "${rids[@]}"; do
    output_dir="./$project/bin/$configuration/$rid/"
    mkdir -p "$output_dir"
    dotnet publish \
      --runtime "$rid" \
      -p:PublishSingleFile=true \
      --self-contained \
      -p:Version="$version" \
      --configuration "$configuration" \
      --output "$output_dir" \
      "$project" || \
        if [[ "$?" = "139" ]]; then
          # On GitHub Actions, `dotnet` command occasionally fails due to
          # segfault.
          dotnet publish \
            --runtime "$rid" \
            -p:PublishSingleFile=true \
            --self-contained \
            -p:Version="$version" \
            --configuration "$configuration" \
            --output "$output_dir" \
            "$project"
        else
          exit 1
        fi
    bin_name="$(find "$output_dir" -type f -perm /o+x -exec basename {} \;)"
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
  if [[ "$version_suffix" = "" ]]; then
    dotnet_args="-p:Version=$version"
  else
    dotnet_args="-p:VersionPrefix=$version_prefix" \
    dotnet_args="$dotnet_args --version-suffix=$version_suffix"
    dotnet_args="$dotnet_args -p:NoPackageAnalysis=true"
  fi
  # shellcheck disable=SC2086
  dotnet build -c "$configuration" $dotnet_args || \
    if [[ "$?" = "139" ]]; then
      # On GitHub Actions, `dotnet` command occasionally fails due to segfault.
      dotnet build -c "$configuration" $dotnet_args
    else
      exit 1
    fi
  # shellcheck disable=SC2086
  dotnet pack "$project" -c "$configuration" $dotnet_args || \
    if [[ "$?" = "139" ]]; then
      # On GitHub Actions, `dotnet` command occasionally fails due to segfault.
      dotnet pack "$project" -c "$configuration" $dotnet_args
    else
      exit 1
    fi

  ls -al "./$project/bin/$configuration/"
  if [ "$version" != "$version_prefix" ]; then
    rm -f "./$project/bin/$configuration/$project.$version_prefix.nupkg"
  fi
done

for npmpkg in "${npm_packages[@]}"; do
  if [[ -f "./$npmpkg/package.json" ]]; then
    pushd "./$npmpkg/"
    jq --arg v "$version" 'del(.private) | .version = $v' package.json \
      > .package.json.tmp
    mv .package.json.tmp package.json
    popd
  fi
done

# Loop twice to make sure that all packages are versioned
for npmpkg in "${npm_packages[@]}"; do
  if [[ -f "./$npmpkg/package.json" ]]; then
    pushd "./$npmpkg/"
    yarn
    yarn pack --out "${npmpkg//\//-}-$version.tgz"
    popd
  fi
done
