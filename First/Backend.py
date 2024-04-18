from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import json
import pytesseract
import io
from PIL import Image
import base64

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/easyreceipt'

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    email = db.Column(db.String(100), primary_key=True)
    username = db.Column(db.String(30))
    password = db.Column(db.String(30))

    def __init__(self ,email, username, password):
        self.email = email
        self.username = username
        self.password = password
        


class userSchema(ma.Schema):
    class Meta:
        fields = ('email', 'username', 'password')

user_Schema = userSchema()
users_Schema = userSchema(many=True)


@app.route('/get', methods=['GET'])
def get_user_data():
    # שאילתת SQLAlchemy לקבלת כל המשתמשים מהטבלה
    users = User.query.all()
    # המרת התוצאה לפורמט JSON
    result = users_Schema.dump(users)
    return jsonify(result)

@app.route('/check_user', methods=['POST'])
def check_user():
    username = request.json['username']
    password = request.json['password']


    user = User.query.filter_by(username=username).first()


    if user and username is not None:
        if user and user.password == password and username is not None:
            return jsonify("2")
        else:
            return jsonify("1")
    else:
        return jsonify("0")



@app.route('/add', methods=['POST'])
def add_Details():
    email = request.json['email']
    username = request.json['username']
    password = request.json['password']

    user = User(email, username, password)
    db.session.add(user)
    db.session.commit()
    return user_Schema.jsonify(user)

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(200))

    def __init__(self, url):
        self.url = url

class photoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'url')

photo_schema = photoSchema()
photos_schema = photoSchema(many=True)


@app.route('/upload_image', methods=['POST'])
def upload_image():
    # Get the image data from the request JSON
    image_data = request.json.get('image_data', None)
    
    # Check if the image data is present in the JSON
    if image_data:
        try:
            # Process the image text from JSON
            extracted_text = process_image_text_from_json(json.dumps({"image_base64": image_data}))
            
            # If the text extraction is successful, return a success response
            if extracted_text:
                return jsonify({"result": "Image text processed successfully", "text": extracted_text}), 200
            else:
                return jsonify({"error": "Failed to process image text"}), 500
        except Exception as e:
            return jsonify({"error": "Error: " + str(e)}), 500
    else:
        return jsonify({"error": "Error: Image data not found in JSON"}), 400

def process_image_text_from_json(json_data):
    try:
        # הפענחת הנתונים מפורמט JSON
        image_data = json.loads(json_data)
        
        # אם הנתונים מכילים את התמונה והיא בבסיס 64
        if 'image_base64' in image_data:
            # קריאת התמונה מהבסיס 64
            image_bytes = base64.b64decode(image_data['image_base64'])
            
            # יצירת תמונה מהבתים
            image = Image.open(io.BytesIO(image_bytes))
            
            # עיבוד הטקסט באמצעות pytesseract
            extracted_text = pytesseract.image_to_string(image)
            
            # החזרת הטקסט המחודד
            return extracted_text
        
        else:
            print("No image data found in JSON.")
            return None
        
    except Exception as e:
        print("Error processing image text from JSON:", str(e))
        return None





if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)

