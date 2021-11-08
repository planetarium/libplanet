#!/bin/bash
# Publish docs to GitHub Pages.
# Note that this script is intended to be run by GitHub Actions.
if ! (env | grep '^GITHUB_'); then
  {
    echo "This script is intended to be run by GitHub Actions."
    echo "You can run GitHub Actions locally using \`act':"
    echo "  https://github.com/nektos/act"
  } >&2
  exit 1
fi

set -ev

b64d() {
  if command -v python > /dev/null; then
    python -m base64 -d
  else
    base64 -d
  fi
}

if [ "$GHPAGES_SSH_KEY" = "" ]; then
  {
    echo "The environment variable GHPAGES_SSH_KEY is not configured."
    echo "Configure GHPAGES_SSH_KEY from GitHub Actions web page."
    echo "The key has to be also registered as a deploy key of the repository" \
         ", and be allowed write access."
    echo "GHPAGES_SSH_KEY has to contain a base64-encoded private key without" \
         "new lines."
  } >&2
  exit 0
fi

if [ "$GITHUB_EVENT_NAME" = "pull_request" ]; then
  if ! command -v jq > /dev/null; then
    wget -O /usr/local/bin/jq \
      https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64
    chmod +x /usr/local/bin/jq
  fi
  pr_number="$(jq '.pull_request.number' "$GITHUB_EVENT_PATH")"
  slug="pulls/$pr_number"
else
  if [[ "$GITHUB_REPOSITORY" = "planetarium/libplanet" ]] && \
     [[ "$GITHUB_REF" != refs/tags/* ]] &&
     [[ "$GITHUB_REF" != refs/heads/main ]] && \
     [[ "$GITHUB_REF" != refs/heads/maintenance-* ]]; then
    echo "This branch is not for releases, so docs won't be published." >&2
    exit 0
  fi
  slug="$(echo -n "$GITHUB_REF" | sed -e 's/^refs\/\(heads\|tags\)\///g')"
fi
[ "$slug" != "" ]

echo "Slug: $slug" >&2

echo "$GHPAGES_SSH_KEY" | b64d > /tmp/github_id
chmod 600 /tmp/github_id
export GIT_SSH_COMMAND='ssh -i /tmp/github_id -o "StrictHostKeyChecking no"'

for _ in 1 2 3; do
  # If more than an action are running simultaneously git push may fail
  # due to conflicts.  So try up to 3 times.

  git clone -b gh-pages "git@github.com:$GITHUB_REPOSITORY.git" /tmp/gh-pages
  git -C /tmp/gh-pages config user.name "$(git log -n1 --format=%cn)"
  git -C /tmp/gh-pages config user.email "$(git log -n1 --format=%ce)"

  rm -rf "/tmp/gh-pages/$slug"
  mkdir -p "/tmp/gh-pages/$(dirname "$slug")"
  cp -r Docs/_site "/tmp/gh-pages/$slug"
  git -C /tmp/gh-pages add "/tmp/gh-pages/$slug"

  latest_version="$(git tag --sort -v:refname | head -n1)"
  commit_hash="$(git log -n1 --pretty=%H)"
  tag="$(echo -n "$GITHUB_REF" | sed -e 's/^refs\/tags\///g')"
  if [ "$(git tag -l)" = "" ] || [ "$latest_version" = "$tag" ]; then
    index="$(cat "/tmp/gh-pages/$slug/index.html")"
    {
      echo -n "${index%</title>*}</title>"
      echo "<meta http-equiv=\"refresh\" content=\"0;$slug/\">"
      echo "<base href=\"$slug/\">"
      echo -n "${index#*</title>}"
    } > /tmp/gh-pages/index.html
    git -C /tmp/gh-pages add /tmp/gh-pages/index.html
  fi

  git -C /tmp/gh-pages commit \
    --allow-empty \
    -m "Publish docs from $commit_hash [ci skip]"

  if git -C /tmp/gh-pages push origin gh-pages; then
    break
  fi

  rm -rf /tmp/gh-pages
done

rm /tmp/github_id

mkdir -p Docs/obj/
github_user="${GITHUB_REPOSITORY%/*}"
github_repo="${GITHUB_REPOSITORY#*/}"
echo -n "https://$github_user.github.io/$github_repo/$slug/" > Docs/obj/url.txt
