#!/bin/bash
# Submit npm packages to npmjs.org.
# Note that this script is intended to be run by GitHub Actions.
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

if [ "$NODE_AUTH_TOKEN" = "" ]; then
  echo "This script requires NODE_AUTH_TOKEN environment variable." \
    > /dev/stderr
  exit 1
fi

if [ "$publish_package" = "" ]; then
  dry_run=--dry-run
else
  dry_run=
fi

version_type="$(cat "$(dirname "$0")/../../obj/version_type.txt")"
if [[ "$version_type" = stable ]]; then
  tag=latest
else
  tag="$version_type"
fi

for npmpkg in "${npm_packages[@]}"; do
  for tgz in "./$npmpkg"/*.tgz; do
    # shellcheck disable=SC2086
    npm publish --access=public --tag="$tag" $dry_run "$tgz"
  done
done
