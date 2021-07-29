#!/bin/bash
# Make "bundle" archives, include all referenced assemblies, for each
# supported target platform.
# Note that this script is intended to be run by GitHub Actions.
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

if [[ "$1" = "" ]]; then
  echo No the first argument.  Needs a nupkg path. > /dev/stderr
  exit 1
elif [[ "$2" = "" ]]; then
  echo No the second argument.  Needs an output directory. > /dev/stderr
  exit 1
elif [[ "$3" = "" ]]; then
  echo No the third argument.  Needs a target framework. > /dev/stderr
  exit 1
fi

nupkg="$(realpath "$1")"
outdir="$(realpath "$2")"
target="$3"

if ! [[ "$(basename "$nupkg")" =~ \.([0-9]+\.[0-9]+\.[0-9]+.*)\.nupkg$ ]]; then
  echo No version information in the filename: "$nupkg" > /dev/stderr
  exit 1
fi

version="${BASH_REMATCH[1]}"
package="$(basename "$nupkg" | sed -E 's/(\.[0-9]{1,}){3}.*?\.nupkg$//')"
workdir="$(mktemp -d)"

if printf '%s\n' "${executables[@]}" | grep -q -P "^$package$"; then
  echo "Since $package is an executable project, its bundle won't be made." \
    > /dev/stderr
  exit 0
fi

pushd "$workdir"
  # Prepare a local NuGet repository
  mkdir repo/
  nuget add "$nupkg" -Source ./repo
  nuget sources add \
    -NonInteractive \
    -Name "$workdir/repo" \
    -Source "$workdir/repo"

  if ! nuget sources list | grep -i nuget.org > /dev/null; then
    nuget sources add \
      -NonInteractive \
      -Name nuget.org \
      -Source https://api.nuget.org/v3/index.json
  fi

  # Create a skeleton app to bundle assemblies
  app="BundleApp$(head -c 1024 /dev/urandom | md5sum | head -c 10)"
  dotnet new console -o "$app" -n "$app"
  pushd "$app/"
    sed \
      -E "s|(<TargetFramework>)[^<]*(</TargetFramework>)|\1$target\2|" \
      "$app.csproj" \
      > "$app.csproj_"
    mv "$app.csproj_" "$app.csproj"

    dotnet add package "$package" --version "$version" --source "$workdir/repo"

    if [[ "$target" =~ ^net[0-9][0-9][0-9]$ ]]; then
      msbuild /r "/p:Configuration=$configuration"
    else
      dotnet build -c "$configuration"
    fi

    # All referenced assemblies would go inside the bin/ directory:
    pushd "bin/Release/$target/"
      # Remove unnecessary assemblies
      find . -name "$app*" -exec rm {} +

      # Archive everything in the directory using tarball + xz
      mkdir -p "$outdir"
      tar cvfJ "$outdir/$package-$version-$target.tar.xz" .
    popd
  popd
popd
