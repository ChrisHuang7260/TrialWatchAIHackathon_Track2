#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
printf '%s\n' 'FairTrial is available at http://localhost:8000'
python3 -m http.server 8000
