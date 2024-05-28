from django.contrib import admin
from .models import Connect4Session, NoughtsAndCrossesSession

admin.site.register(Connect4Session)
admin.site.register(NoughtsAndCrossesSession)