dev-api-local:
	python api/manage.py runserver

dev-build-docker:
	docker compose -f docker-compose.dev.yml build

dev-up-docker:
	docker compose -f docker-compose.dev.yml up

dev-down:
	docker compose -f docker-compose.dev.yml down

dev: dev-build-docker dev-up-docker

dev-log:
	docker compose -f docker-compose.dev.yml logs -f 

dev-api-restart:
	docker compose -f docker-compose.dev.yml restart api
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

test-api:
	docker compose -f docker-compose.dev.yml exec api python manage.py test

prod-build:
	docker compose -f docker-compose.prod.yml build

prod-up:
	docker compose -f docker-compose.prod.yml up 