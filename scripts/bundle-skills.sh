#!/bin/bash
# Fetches all thirdeye skills from GitHub and bundles them into a downloadable zip.
# Runs as a prebuild step so the download always has the latest skills.
set -e

REPO="duncankmckinnon/thirdeye"
BRANCH="main"
SKILLS_PATH="src/thirdeye/skills"

TMPDIR=$(mktemp -d)
trap "rm -rf $TMPDIR" EXIT

echo "Fetching $REPO@$BRANCH..."
curl -sSfL "https://codeload.github.com/${REPO}/tar.gz/${BRANCH}" | tar -xz -C "$TMPDIR"

SRC="$TMPDIR/$(basename "$REPO")-${BRANCH}/$SKILLS_PATH"
if [ ! -d "$SRC" ]; then
  echo "error: $SKILLS_PATH not found in $REPO@$BRANCH" >&2
  exit 1
fi

# Skills are directories containing a SKILL.md; each may carry a references/ subdir.
SKILLS=()
for dir in "$SRC"/*/; do
  [ -f "${dir}SKILL.md" ] || continue
  SKILLS+=("$(basename "$dir")")
done

if [ ${#SKILLS[@]} -eq 0 ]; then
  echo "error: no skills found in $SRC" >&2
  exit 1
fi

mkdir -p public/downloads
OUT="$(pwd)/public/downloads/thirdeye-skills.zip"
rm -f "$OUT"
cd "$SRC"
zip -rq "$OUT" "${SKILLS[@]}" -x '*/__pycache__/*'

echo "Bundled ${#SKILLS[@]} skills (${SKILLS[*]}) to public/downloads/thirdeye-skills.zip"
