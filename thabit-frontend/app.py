# -*- encoding: utf-8 -*-

from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
	return redirect( url_for('static', filename='favicon.ico') )

if __name__=="__main__":
	app.run(port=8000)