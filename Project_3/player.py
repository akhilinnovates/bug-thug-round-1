from turtle import Turtle


class Player(Turtle):

    def __init__(self):
        super().__init__()
        self.penup()
        self.shape("turtle")
        self.goto(0, -270)
        self.setheading(90)

    def up(self):
        self.forward(20)
        
     def down(self):
        self.backward(20)
        
    def right(self):
        self.right(20)

    def left(self):
        self.left(20)


