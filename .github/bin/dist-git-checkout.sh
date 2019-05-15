#!/bin/ash
# Make the workspace directory to have a pull request's head instead of
# base if it's a pull request.
# Note that this script is intended to be run by GitHub Actions.
set -ev

if [ "$GITHUB_EVENT_NAME" = "" ]; then
  {
    echo "This script is intended to be run by GitHub Actions."
    echo "You can run GitHub Actions locally using \`act':"
    echo "  https://github.com/nektos/act"
  } > /dev/stderr
  exit 1
elif [ "$GITHUB_EVENT_NAME" != "pull_request" ]; then
  exit 0
fi


if ! command -v jq > /dev/null; then
  wget -O /usr/local/bin/jq \
    https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64
  chmod +x /usr/local/bin/jq
fi

git_url="$(jq -r '.pull_request.head.repo.git_url' "$GITHUB_EVENT_PATH")"
git_ref="$(jq -r '.pull_request.head.ref' "$GITHUB_EVENT_PATH")"
git_sha="$(jq -r '.pull_request.head.sha' "$GITHUB_EVENT_PATH")"

git remote add fork "$git_url"
git fetch fork

git branch -f "$git_ref"
git checkout "$git_ref"
git reset --hard "$git_sha"
