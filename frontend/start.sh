#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

npm install

npm run dev
