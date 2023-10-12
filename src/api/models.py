from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    name = db.Column(db.String(40), nullable=False)
    surname = db.Column(db.String(40), nullable=False)
    image = db.Column(db.String(300), nullable=False)
    location = db.Column(db.String(40), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name" : self.name ,
            "surname" : self.surname ,
            "image" : self.image ,
            "location" : self.location 
        }
    
class Item(db.Model):
    __tablename__ = "item"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    type = db.Column(db.String(120), nullable=True)    
    description = db.Column(db.String(1000), nullable=False)
    location = db.Column(db.String(250), nullable=True)
    publishing_date = db.Column(db.String(10), nullable=False)
    image = db.Column(db.ARRAY(db.String(2000))) 
    counter = db.Column(db.Integer, nullable=True, default=0)
    price = db.Column(db.Integer, nullable=True, default=0)


    def __repr__(self):
        return f'<Reviews {self.id}>'
      
    def serialize(self):
       return {
            "id": self.id,
            "title": self.title,
            "type": self.type,           
            "description": self.description,
            "location":self.location,
            "publishing_date": self.publishing_date,
            "price": self.price,
            "image": self.image,
            "counter": self.counter,
        }


