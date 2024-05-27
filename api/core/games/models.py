from django.db import models
from base.models import BaseModel
import json
# Create your models here.
class Connect4Session(BaseModel):
    """
    A model to represent a Connect 4 game session.
    """
    # The board is represented as a 2D list of integers.
    # 0 represents an empty space, 1 represents a red piece, and 2 represents a yellow piece.
    board = models.TextField(default='[["", "", "", "", "", "", ""], ... ]')  # 6x7 grid
    # The current player's turn.
    current_colour = models.CharField(max_startlength=1, default='R')
    # The winner of the game.
    winner = models.IntegerField()
    # The number of moves that have been made in the game.
    status = models.CharField(max_length=10, default='playing') 
    
    def get_board(self):
        return json.loads(self.board)

    def set_board(self, board):
        self.board = json.dumps(board)
        self.save()