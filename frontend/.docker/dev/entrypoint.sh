#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

postgres_ready() {
	python3 <<END
import sys

import psycopg2

try:
    psycopg2.connect(
        dbname="${POSTGRES_DB}",
        user="${POSTGRES_USER}",
        password="${POSTGRES_PASSWORD}",
        host="${POSTGRES_HOST}",
        port="${POSTGRES_PORT}",
    )
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)

END
}
until postgres_ready; do
	echo >&2 'Waiting for PostgreSQL to become available...'
 
	sleep 1
done
echo >&2 'PostgreSQL is available'

exec "$@"