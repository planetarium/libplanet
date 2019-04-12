#!/bin/bash
# Publish docs to GitHub Pages.
# Note that this script is intended to be run by Travis CI.
if ! (env | grep '^TRAVIS_'); then
  echo "This script is intended to be run by Travis CI." > /dev/stderr
  exit 1
fi

set -ev

b64d() {
  if command -v python > /dev/null; then
    python -m base64 -d
  else
    base64 --decode
  fi
}

if [[ "$TRAVIS_JOB_NUMBER" != *.1 ]]; then
  echo "This script is executed by only the first job so that" \
       "it is run only once." > /dev/stderr
  exit 0
fi

if [[ "$TRAVIS_SECURE_ENV_VARS" = "false" ]]; then
  echo "The secure envrionment variables are disallowed or not configured." \
    > /dev/stderr
  exit 0
fi

if [[ "$GITHUB_SSH_KEY" = "" ]]; then
  {
    echo "The environment variable GITHUB_SSH_KEY is not configured."
    echo "Configure the secure variable from Travis CI repository settings."
    echo "https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings"
    echo "GITHUB_SSH_KEY has to contain a base64-encoded private key without" \
         "new lines."
  } > /dev/stderr
  exit 0
fi

echo "$GITHUB_SSH_KEY" | b64d > /tmp/github_id
if [[ "$TRAVIS_OS_NAME" != "windows" ]]; then
  chmod 600 /tmp/github_id
fi
export GIT_SSH_COMMAND='ssh -i /tmp/github_id -o "StrictHostKeyChecking no"'

git clone -b gh-pages "git@github.com:$TRAVIS_REPO_SLUG.git" /tmp/gh-pages
git -C /tmp/gh-pages config user.name "$(git log -n1 --format=%cn)"
git -C /tmp/gh-pages config user.email "$(git log -n1 --format=%ce)"

slug="${TRAVIS_TAG:-${TRAVIS_BRANCH}}"
[[ "$slug" != "" ]]
rm -rf "/tmp/gh-pages/$slug"
cp -r Docs/_site "/tmp/gh-pages/$slug"
git -C /tmp/gh-pages add "/tmp/gh-pages/$slug"

latest_version="$(git tag --sort -v:refname | head -n1)"
if [[ "$(git tag -l)" = "" || "$latest_version" = "$TRAVIS_TAG" ]]; then
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
  -m "Publish docs from $TRAVIS_COMMIT"
git -C /tmp/gh-pages push origin gh-pages

rm /tmp/github_id
