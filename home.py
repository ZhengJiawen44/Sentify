from flask import Flask, render_template
from flask import request, redirect, flash, url_for
from forms import videoLinkForm
from YT_Sentiments import analyzer
from dotenv import load_dotenv
from flask_wtf.csrf import CSRFProtect


import os
app = Flask(__name__)


load_dotenv()
YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')
SECRET_KEY = os.getenv('SECRET_KEY')

@app.route("/", methods = ['GET', 'POST'])
def home():
    form = videoLinkForm() 
    if form.validate_on_submit():
        try:
            API_KEY = YOUTUBE_API_KEY
            video_link = request.form.get("link")[-11:]
            obj = analyzer(API_KEY, video_link,100)
            result = obj.get_analysis()
            comment = obj.get_raw_comments()
            title = obj.get_title()
            return render_template("result.html", form = form, result = result,comments = comment, title = title, id = video_link)
        except Exception as e:
            flash(f"An error occurred: invalild link")
            return redirect(url_for('home'))
    return render_template("home.html", form = form)

@app.route("/result", methods = ['GET', 'POST'])
def result():
        form = videoLinkForm() 
        if form.validate_on_submit():
            try:
                API_KEY = YOUTUBE_API_KEY
                video_link = request.form.get("link")[-11:]
                obj = analyzer(API_KEY, video_link,100)
                result = obj.get_analysis()
                comment = obj.get_raw_comments()  
                title = obj.get_title()
                return render_template("result.html", form = form, result = result,comments = comment, title = title, id = video_link)
            except Exception as e:
                flash(f"An error occurred: invalild link")
                return redirect(url_for('home'))
        return render_template("result.html", form = form)

@app.route("/docs", methods = ['GET'])
def docs():
     return render_template("docs.html")


if __name__ == "__main__":
    app.config['SECRET_KEY'] = SECRET_KEY
    csrf = CSRFProtect(app)
    app.run(debug=True)