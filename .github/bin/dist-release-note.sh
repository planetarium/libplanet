#!/bin/bash
# Extract a release note from the given changelog file.
# Note that this script is intended to be run by GitHub Actions.
set -e

if [ "$1" = "" ]; then
  echo "A changelog file path is missing." > /dev/stderr
  exit 1
elif [ "$2" = "" ]; then
  echo "An output path is missing." > /dev/stderr
  exit 1
elif [ ! -f obj/package_version.txt ]; then
  {
    echo "obj/package_version.txt file is missing."
    echo "dist:version action must be run first."
  } > /dev/stderr
  exit 1
fi

version_prefix="$(cat obj/version_prefix.txt)"
package_version="$(cat obj/package_version.txt)"

wget -O /tmp/submark \
  https://github.com/dahlia/submark/releases/download/0.2.0/submark-linux-x86_64
chmod +x /tmp/submark
/tmp/submark \
  -o "$2" \
  -iO \
  --h2 "Version $version_prefix" \
  "$1"
rm /tmp/submark

if ! grep -E '\S' "$2" > /dev/null; then
  echo "There is no section for the version $version_prefix." > /dev/stderr
  exit 1
elif [ "$version_prefix" = "$package_version" ] && \
     grep -i "to be released" "$2"; then
  echo 'Release date should be shown on the release note.' > /dev/stderr
  exit 1
fi
