from django.db import models
from base.models import BaseModel
import json

class Connect4Session(BaseModel):
 
    board = models.TextField(default='[["", "", "", "", "", "", ""], ... ]')  # 6x7 grid
    current_colour = models.CharField(max_startlength=1, default='R')
    winner = models.IntegerField()
    status = models.CharField(max_length=10, default='playing') 
    
    def get_board(self):
        return json.loads(self.board)

    def set_board(self, board):
        self.board = json.dumps(board)
        self.save()
        
    def __str__(self):
        return f'Connect4Session {self.id}'

class NoughtsAndCrossesSession(BaseModel):
 
    board = models.TextField(default='[["", "", ""], ... ]') 
    current_shape = models.CharField(max_startlength=1, default='X')
    winner = models.IntegerField()
    status = models.CharField(max_length=10, default='playing') 
    
    def get_board(self):
        return json.loads(self.board)

    def set_board(self, board):
        self.board = json.dumps(board)
        self.save()
        
    def __str__(self):
        return f'NoughtsAndCrossesSession {self.id}'