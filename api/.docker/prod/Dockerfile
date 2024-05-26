FROM python:3.11-slim

WORKDIR /api

COPY . /api

RUN pip install --no-cache-dir -r req.txt

EXPOSE 8000

ENV PYTHONUNBUFFERED=1

RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]