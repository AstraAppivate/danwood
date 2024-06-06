from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get("SECRET_KEY", "realmdesk"),

DEBUG = True

ALLOWED_HOSTS = ["localhost","tom.warfighter.danwood.io","*.warfighter.danwood.io"]

ASGI_APPLICATION = 'config.asgi.application'

INSTALLED_APPS = [
    'daphne',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
    'graphene_django',
    'authorisation',
    'authentication',
    'core.games',
 
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'endpoints'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    "default": {
        "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.postgresql"),
        "NAME": os.environ.get("POSTGRES_DB", "realmdesk"),
        "USER": os.environ.get("POSTGRES_USER", "realmdesk"),
        "PASSWORD": os.environ.get("POSTGRES_PASSWORD", "password"),
        "HOST": os.environ.get("POSTGRES_HOST", "localhost"),
        "PORT": os.environ.get("POSTGRES_PORT", "5432"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



AUTH_USER_MODEL = 'authentication.Warfighter'

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

GRAPHENE = {
    "SCHEMA": "schema.schema"
}


SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

CORS_ORIGIN_ALLOW_ALL = True

STATIC_URL = '/static/'

# This is where collectstatic will collect static files for deployment.
STATIC_ROOT = os.path.join(BASE_DIR, 'collected_static')

# Additional locations of static files
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),  # This is assuming you have a 'static' directory at the same level as your apps
]

MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media/")

X_FRAME_OPTIONS = "SAMEORIGIN"

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

CSRF_COOKIE_HTTPONLY = True

CSRF_TRUSTED_ORIGINS = [ 'http://dan.warfighter.danwood.io',
                        'http://dan.warfighter.danwood.io',
                        "ws://dan.warfighter.danwood.io",
                        "wss://dan.warfighter.danwood.io:443"  ]

CORS_ALLOWED_ORIGINS = ['http://dan.warfighter.danwood.io',
                        'http://dan.warfighter.danwood.io',
                        "ws://dan.warfighter.danwood.io",
                        "wss://dan.warfighter.danwood.io:443"  ]

CORS_ALLOW_HEADERS = [  "accept",
                        "accept-encoding",
                        "authorization",
                        "content-type",
                        "dnt",
                        "origin",
                        "user-agent",
                        "X-CSRFToken",  ]
