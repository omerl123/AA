from flask import Flask, jsonify 

app = Flask(__name__)

@app.route('/get', methods = ['GET'])
def get_products():
    return jsonify({"hel":"world"})


if __name__ == "__main__":
    app.run(debug=True)
    