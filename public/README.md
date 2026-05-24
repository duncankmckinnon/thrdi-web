# public/

This folder holds the static assets the site references. The binary image files
listed below could not be staged from inside the `task-2` worktree because the
agent sandbox restricts filesystem reads to this working directory and the
source images live at `/Users/duncanmckinnon/Documents/code/thrdi-web/docs/img/`
in the main worktree (they are not tracked in any branch).

To populate the assets, run these commands from any shell that has filesystem
access to both paths:

```sh
SRC=/Users/duncanmckinnon/Documents/code/thrdi-web/docs/img
DST=/Users/duncanmckinnon/Documents/code/thrdi-web/.workbench/build-site/task-2/public

# Full logo + wordmark, re-saved as PNG (used in the hero)
sips -s format png "$SRC/thrdi-logo.jpeg" --out "$DST/thrdi-logo.png"

# Badge-only icon (used in the Nav)
cp "$SRC/thrdi-logo-3.png" "$DST/thrdi-logo-icon.png"

# OpenGraph banner (1200x630). Acceptable placeholder: copy the full logo as-is.
cp "$SRC/thrdi-logo.jpeg" "$DST/thrdi-banner.png"

# Favicon (32x32 PNG renamed to .ico; browsers tolerate PNG content)
sips -z 32 32 "$SRC/thrdi-logo-3.png" --out "$DST/favicon.ico"

# Apple touch icon (180x180)
sips -z 180 180 "$SRC/thrdi-logo-3.png" --out "$DST/apple-touch-icon.png"
```

Delete this README after the assets are in place.
