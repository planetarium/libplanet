#!/bin/bash
set -e
if [[ "$1" = "" ]]; then
  echo error: missing version to download >&2
  exit 1
elif [[ "$1" =~ ^[0-9]+\.[1-9][0-9]*\.[0-9]+$ ]]; then
  version="$1"
else
  echo error: invalid version number: "$1" >&2
  exit 1
fi

function test_npx() {
  cmd="$1"
  expected="$2"
  actual="$(npx $1)"
  if [[ "$actual" != "$expected" ]]; then
    {
      echo "The command \`$cmd' printed an unexpected output."
      echo "  expected: $expected"
      echo "  actual:   $actual"
    } >&2
    exit 1
  fi
}

function test_planet() {
  test_npx "planet --version" "planet $version"
}

pkgdir="$(cd "$(dirname "$0")"; cd ..; pwd)"

cp "$pkgdir/package.json" "$pkgdir/.package.json.bak"
# shellcheck disable=SC2064
trap "mv '$pkgdir/.package.json.bak' '$pkgdir/package.json'" EXIT
jq --arg v "$version" 'del(.private) | .version = $v' package.json \
  > .package.json.tmp
mv .package.json.tmp package.json

rm -f planetarium-cli-*.tgz
npm pack --quiet

echo Test with \`npm install\'... >&2
pushd "$(mktemp -d)"
npm install --quiet --save "$pkgdir/planetarium-cli-$version.tgz"
test_planet
popd

echo Test with \`npm install --ignore-scripts\'... >&2
pushd "$(mktemp -d)"
npm install \
  --quiet \
  --ignore-scripts \
  --save \
  "$pkgdir/planetarium-cli-$version.tgz"
test_planet
popd

rm "$pkgdir"/planetarium-cli-*.tgz

echo "Succeeded!"
