#!/bin/ash
# Extract a release note from the given changelog file.
# Note that this script is intended to be run by GitHub Actions.
# shellcheck disable=SC2169
set -e

project=Libplanet
configuration=Release

if [ "$GITHUB_REPOSITORY" = "" ] | [ "$GITHUB_REF" = "" ]; then
  echo "This script is intended to be run by GitHub Actions." > /dev/stderr
  exit 1
elif [ ! -f obj/package_version.txt ]; then
  {
    echo "obj/package_version.txt file is missing."
    echo "dist:version action must be run first."
  } > /dev/stderr
  exit 1
elif [ "${GITHUB_REF:0:10}" != "refs/tags/" ]; then
  echo "This script is run for only tag push; being skipped..." > /dev/stderr
  exit 0  # If it exits with non-zero other actions become cancelled
fi

tag="${GITHUB_REF#refs/*/}"
if [ "$tag" != "$(cat obj/package_version.txt)" ]; then
  {
    echo -n "Git tag ($tag) does not match to obj/package_version.txt ("
    cat obj/package_version.txt
    echo ")."
  } > /dev/stderr
  exit 1
elif [ ! -f obj/release_note.txt ]; then
  {
    echo "obj/release_note.txt file is missing."
    echo "dist:release-note action must be run first."
  } > /dev/stderr
  exit 1
fi

nupkg_path="./$project/bin/$configuration/$project.$tag.nupkg"
if [ ! -f "$nupkg_path" ]; then
  {
    echo "$nupkg_path is missing."
    echo "dist:pack action must be run first."
  } > /dev/stderr
  exit 1
fi

wget -O /tmp/github-release.tar.bz2 \
  https://github.com/aktau/github-release/releases/download/v0.7.2/linux-amd64-github-release.tar.bz2
tar xvfj /tmp/github-release.tar.bz2 -C /tmp
rm /tmp/github-release.tar.bz2 \

# Fill the description on GitHub releases with the release note
github_user="${GITHUB_REPOSITORY%/*}" \
github_repo="${GITHUB_REPOSITORY#*/}"

if [ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ]; then
  alias github-release=/tmp/bin/linux/amd64/github-release
else
  alias github-release="echo DRY-RUN: github-release"
fi

github-release relase \
  --user "$github_user" \
  --repo "$github_repo" \
  --tag "$tag" \
  --name "$project $tag" \
  --description - < obj/release_note.txt

github-release upload \
  --user "$github_user" \
  --repo "$github_repo" \
  --tag "$tag" \
  --name "$(basename "$nupkg_path")" \
  --file "$nupkg_path"

rm /tmp/bin/linux/amd64/github-release
