#!/bin/bash
# Extract a release note from the given changelog file.
# Note that this script is intended to be run by GitHub Actions.
# shellcheck disable=SC2169
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

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

for project in "${projects[@]}"; do
  nupkg_path="./$project/bin/$configuration/$project.$tag.nupkg"
  if [ ! -f "$nupkg_path" ]; then
    {
      echo "$nupkg_path is missing."
      echo "dist:pack action must be run first."
    } > /dev/stderr
    exit 1
  fi
done

if command -v apk; then
  apk add --no-cache ca-certificates
  update-ca-certificates
fi

# Fill the description on GitHub releases with the release note
github_user="${GITHUB_REPOSITORY%/*}"
github_repo="${GITHUB_REPOSITORY#*/}"

trial=0
while ! "$(dirname "$0")/github-release.sh" info \
          --user "$github_user" \
          --repo "$github_repo" \
          --tag "$tag"; do
  "$(dirname "$0")/github-release.sh" release \
    --user "$github_user" \
    --repo "$github_repo" \
    --tag "$tag" \
    --name "$solution $tag" \
    --description - < obj/release_note.txt || true
  trial=$(( trial + 1 ))
  if [[ "$trial" -gt 5 ]]; then break; fi
done

for project in "${projects[@]}"; do
  nupkg_path="./$project/bin/$configuration/$project.$tag.nupkg"
  "$(dirname "$0")/github-release.sh" upload \
    --user "$github_user" \
    --repo "$github_repo" \
    --tag "$tag" \
    --name "$(basename "$nupkg_path")" \
    --file "$nupkg_path"
done

for project in "${executables[@]}"; do
  for rid in "${rids[@]}"; do
    for exec_path in "./$project/bin/$configuration"/*-"$tag-$rid".*
    do
      "$(dirname "$0")/github-release.sh" upload \
        --user "$github_user" \
        --repo "$github_repo" \
        --tag "$tag" \
        --name "$(basename "$exec_path")" \
        --file "$exec_path"
    done
  done
done

for npmpkg in "${npm_packages[@]}"; do
  for tgz in "./$npmpkg"/*.tgz; do
    "$(dirname "$0")/github-release.sh" upload \
      --user "$github_user" \
      --repo "$github_repo" \
      --tag "$tag" \
      --name "$(basename "$tgz")" \
      --file "$tgz"
  done
done
