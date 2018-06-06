from flask import Flask, render_template, request
from main import convertImageToAscii
from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/ascii/": {"origins": "https://choubeyaakash77.github.io/image-texter/"}})

@app.route('/')
def out():
    return "Server running"

@app.route('/ascii/', methods=['GET', 'POST'])
@cross_origin()
def ascii():
    img = request.files['image']
    ext = img.filename.split('.')[-1].lower()
    fname = 'img.'+ext
    img.save(fname)
    return convertImageToAscii(fname, 150, 0.5, False, False) or "Error"

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    #app.run(host='0.0.0.0', port=port)
    app.run(debug=True)
