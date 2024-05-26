FROM python:3.11-slim


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /api

COPY . .

RUN pip install --no-cache-dir -r req.dev.txt

EXPOSE 8000

ENTRYPOINT [ ".docker/dev/entrypoint.sh" ]