#!/bin/bash
# Submit npm packages to npmjs.org.
# Note that this script is intended to be run by GitHub Actions.
set -e

# shellcheck source=constants.sh
. "$(dirname "$0")/constants.sh"

if [ "$NODE_AUTH_TOKEN" = "" ]; then
  echo "This script requires NODE_AUTH_TOKEN envrionment variable." \
    > /dev/stderr
  exit 1
fi

# Publish a package only if the repository is upstream (planetarium/libplanet)
# and the branch is for releases (master or *-maintenance or 9c-*).
# shellcheck disable=SC2235
if [ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ] && [[ \
    "$GITHUB_REF" = refs/tags/* || \
    "$GITHUB_REF" = refs/heads/master || \
    "$GITHUB_REF" = refs/heads/*-maintenance || \
    "$GITHUB_REF" = refs/heads/9c-* \
  ]]; then
  dry_run=
else
  dry_run=--dry-run
fi

set -x

for project in "${executables[@]}"; do
  pushd "./$project/"
    # shellcheck disable=SC2086
    npm publish --access=public $dry_run
  popd
done
