dev-api-local:
	python api/manage.py runserver

dev-build-docker:
	docker compose -f docker-compose.dev.yml build

dev-up-docker:
	docker compose -f docker-compose.dev.yml up

dev-down-docker:
	docker compose -f docker-compose.dev.yml down

dev: dev-build-docker dev-up-docker

dev-down: dev-down-docker

exec-api:
	docker compose -f docker-compose.dev.yml exec api bash

dev-superuser:
	docker compose -f docker-compose.dev.yml exec api python manage.py createsuperuser

dev-makemigrations:
	docker compose -f docker-compose.dev.yml exec api python manage.py makemigrations

dev-migrate:
	docker compose -f docker-compose.dev.yml exec api python manage.py migrate

dev-shell:
	docker compose -f docker-compose.dev.yml exec api python manage.py shell

dev-flush:
	docker compose -f docker-compose.dev.yml exec api python manage.py flush

dev-start-core-app:
	docker compose -f docker-compose.dev.yml exec api python manage.py startapp /core_apps/$(app)

test-api:
	docker compose -f docker-compose.dev.yml exec api python manage.py test

squash-realm-migrations:
	docker compose -f docker-compose.dev.yml exec api python manage.py squashmigrations realms 0001 0003